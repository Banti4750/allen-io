import React from 'react'
import Acorrdian from './Acorrdian'
import NeetAcordian from './NeetAcordian'

const NeetQuestion = () => {
  return (
    <>
       <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        //   textAlign: 'center',
        }}
      >

           <div>
                <h1 style={{color:'white'}}>Frequently Asked Questions</h1>
           </div>

           <NeetAcordian/>

      </div>
    </>
  )
}

export default NeetQuestion