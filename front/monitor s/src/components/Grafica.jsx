import React from 'react'
import Rectangle from '../base/Rectangle'
function Grafica() {
  return (
    <div className="row h100">
      <div className="container">
        <div className='graphic'>
          <div className='columns-12' >
            <div className='columns-2'>
              <Rectangle porcentaje="30" />
              <Rectangle porcentaje="50" />
            </div>
            <div className='columns-2'>
              <Rectangle porcentaje="70" />
              <Rectangle porcentaje="30" />
            </div>
            <div className='columns-2'>
              <Rectangle />
              <Rectangle />
            </div>
            <div className='columns-2'>
              <Rectangle />
              <Rectangle />
            </div>
            <div className='columns-2'>
              <Rectangle />
              <Rectangle />
            </div>
            <div className='columns-2'>
              <Rectangle />
              <Rectangle />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Grafica