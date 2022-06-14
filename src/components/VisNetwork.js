import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network';

const VisNetwork = () => {
	const container = useRef(null);

  const nodes = [
    { id: 1, label: 'Protein Sweetener', shape: 'diamond', color: '#F03967' },
    { id: 2, label: 'Sweetness Index', shape: 'box', color: '#BACDE1'  },
    { id: 3, label: 'Type of Drink', shape: 'box', color: '#BACDE1'  },
    { id: 4, label: 'Composition Details',shape: 'box', color: '#BACDE1'  },
    { id: 5, label: 'Storage Conditions', shape: 'box', color: '#BACDE1'  },
    { id: 6, label: 'Production Process', shape: 'box', color: '#BACDE1'  },
    { id: 7, label: 'Benefits', shape: 'box', color: '#BACDE1'  }
  ];

  const edges = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 1, to: 5 },
    { from: 1, to: 6 },
    { from: 1, to: 7 }
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
  }, [container, nodes, edges, options]);

  return <div ref={container} style={{ height: '100vh', width: '100%' }} />;
};

export default VisNetwork;