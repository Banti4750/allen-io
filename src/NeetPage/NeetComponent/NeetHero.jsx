import React from 'react'

const NeetHero = ({ h , t1 , t2 , t3 , t4 , img1 , img2}) => {
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
                textAlign: 'center',
                marginTop: '100px'
            }}
        >


            <div style={{display:'flex' ,gap:'130px' , justifyContent:'space-between'  }}>
                <div>
                     <h1 style={{display:'flex' , justifyContent:'flex-start' , color:'white' , fontSize:'40px' , marginBottom:'30px'}}>{h}</h1>

                     <h4 style={{display:'flex' , justifyContent:'flex-start' , color:'white' , fontSize:'20px' ,fontWeight:'normal' , marginBottom:'20px'}} >{t1}</h4>

                     <h4 style={{display:'flex' , justifyContent:'flex-start' , color:'white' , fontSize:'20px' , fontWeight:'normal' ,  marginBottom:'20px'}}>{t2}</h4>

                     <h4 style={{display:'flex' , justifyContent:'flex-start' , color:'white' , fontSize:'20px',fontWeight:'normal' , marginBottom:'20px'}}>{t3}</h4>

                     <h4 style={{display:'flex' , justifyContent:'flex-start' , color:'white' , fontSize:'20px',fontWeight:'normal', marginBottom:'20px'}}>{t4}</h4>

                </div>
                {/* https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707308305/neet_0._2x_dkqbnv.webp */}
                <div>
                    <img  style={{width:'300px' , height:'300px' , marginTop:'30px'}} src={img1} alt="" />
                </div>
            </div>
               

            {/* https://res.cloudinary.com/dpzpn3dkw/image/upload/v1727444104/PLP_Ticker_tx7nvz.webp */}

            <div>
                <img style={{width:'1010px' , height:'60px' , margin:'100px'}} src={img2} alt="" />
            </div>
        </div>
    </>
  )
}

export default NeetHero