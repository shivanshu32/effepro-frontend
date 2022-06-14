import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network';

const VisNetworkNPA = () => {
	const container = useRef(null);

  const nodes = [
    { id: 1, label: 'Literature Focus', shape: 'diamond', color: '#F03967' },
    { id: 2, label: 'Modification/ Modified Protein Sweeter', shape: 'box', color: '#BACDE1'  },
    { id: 3, label: 'Properties/ Advantages', shape: 'box', color: '#BACDE1'  },
    { id: 4, label: 'Bio Product Host',shape: 'box', color: '#BACDE1'  },
    { id: 5, label: 'Natural Source', shape: 'box', color: '#BACDE1'  },
    { id: 6, label: 'Extraction Method', shape: 'box', color: '#BACDE1'  },
    { id: 7, label: 'Sequence Details (If Claimed)', shape: 'box', color: '#BACDE1'  },
    { id: 8, label: 'Sweetness Index', shape: 'box', color: '#BACDE1'  },
    { id: 9, label: 'Type of Drink', shape: 'box', color: '#BACDE1'  },
    { id: 10, label: 'Composition Details', shape: 'box', color: '#BACDE1'  },
    { id: 11, label: 'Storage Conditions', shape: 'box', color: '#BACDE1'  },
    { id: 12, label: 'Production Process', shape: 'box', color: '#BACDE1'  },
    { id: 13, label: 'Benefits', shape: 'box', color: '#BACDE1'  }
  ];

  const edges = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 1, to: 5 },
    { from: 1, to: 6 },
    { from: 1, to: 7 },
    { from: 1, to: 8 },
    { from: 1, to: 9 },
    { from: 1, to: 10 },
    { from: 1, to: 11 },
    { from: 1, to: 12 },
    { from: 1, to: 13 }
  ];

  const options = {
    // position: {x:x, y:x},    // position to animate to (Numbers)
    scale: 2.0,              // scale to animate to  (Number)
    // offset: {x:x, y:y},      // offset from the center in DOM pixels (Numbers)
    animation: {             // animation object, can also be Boolean
      duration: 1000,                 // animation duration in milliseconds (Number)
      easingFunction: "easeInOutQuad" // Animation easing function, available are:
    }                                   // linear, easeInQuad, easeOutQuad, easeInOutQuad,
}                        
  useEffect(() => {
    const network =
      container.current &&
      new Network(container.current, { nodes, edges }, options);
      network.on( 'click', function(properties) {
        alert('clicked node ' + properties.nodes);
    });
  }, [container, nodes, edges]);

  return <div ref={container} style={{ height: '100vh', width: '100%' }} />;
};

export default VisNetworkNPA;