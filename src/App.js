import { useState, useRef, useEffect } from 'react'

import ForceGraph from 'react-force-graph-2d'

export default function App() {
	const ref = useRef(null)
  let data = {
    nodes: [{}, {}, {}],
    links: []
  }
  const arrive = {
    
  }

  const onClick = () => {
    console.log(data)
    data.nodes[0].x = 0
    data.nodes[0].y = 0

  }

  return (
    <>
      <button onClick={onClick}>Hello</button>
        <ForceGraph
          ref={ref}
					graphData={data}
				/>
    </>
  );
}

