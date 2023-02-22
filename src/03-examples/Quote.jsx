import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({data}) => {

  const h4Ref = useRef();
  const [boxSize, setBoxSize] = useState({ height: 0, witdh: 0 });

  useLayoutEffect(() => {
    const { height, width } = h4Ref.current.getBoundingClientRect();
    setBoxSize({ height, width })
  }, [data])


  return (
    <>
      <blockquote 
        className='blockquote text-end'
        style={
          {
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center'
          }
        }
      >
          <img src={data.image} className='' />
          <h4 ref={h4Ref}>{data.species}</h4>
          <p>{data.status}</p>
          <footer className='blockquote-footer mt-2'>{data.name}</footer>
      </blockquote>

      <code>{ JSON.stringify(boxSize) }</code>
    </>
    
  )
}
