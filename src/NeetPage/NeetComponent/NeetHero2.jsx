import React from 'react'

const NeetHero2 = ({image}) => {
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
                    // marginTop: '100px'
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>
                    <div style={{ width: '1016px', marginBottom: '30px' }}>
                        <h1 style={{ display: 'flex', justifyContent: 'flex-start', color: 'white' }}>Online Coaching for NEET</h1>
                    </div>

                </div>

               

                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
                    <div style={{ width: '320px', height: '250px', backgroundColor: '#122034', padding: '25px', borderRadius: '20px' }}>
                        <h1 style={{ color: 'white', display: 'flex', justifyContent: 'flex-start', fontWeight: 'normal' }}>For 11th</h1>

                        <div style={{ display: 'flex', gap: '40px', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 style={{ color: '#ADD8E6', marginTop: '50px', cursor: 'pointer' }}>View</h2>
                            <img
                                style={{ width: '200px', height: '240px', objectFit: 'cover', borderRadius: '10px' }}
                                src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707373455/jee_0_250_nbnt3y.webp"
                                alt="JEE program"
                            />
                        </div>
                    </div>

                    <div style={{ width: '320px', height: '250px', backgroundColor: '#122034', borderRadius: '20px', padding: '25px' }}>
                        <h1 style={{ color: 'white', display: 'flex', justifyContent: 'flex-start', fontWeight: 'normal' }}>For 12th</h1>
                        <div style={{ display: 'flex', gap: '50px', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 style={{ color: '#ADD8E6', marginTop: '90px', cursor: 'pointer' }}>View</h2>
                            <img
                                style={{ width: '210px', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
                                src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707308305/neet_0._2x_dkqbnv.webp"
                                alt="NEET program"
                            />
                        </div>
                    </div>

                    <div style={{ width: '320px', height: '250px', backgroundColor: '#122034', borderRadius: '20px', padding: '25px' }}>
                        <h1 style={{ color: 'white', display: 'flex', justifyContent: 'flex-start', fontWeight: 'normal' }}>For 12th Plus</h1>
                        <div style={{ display: 'flex', gap: '40px', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 style={{ color: '#ADD8E6', marginTop: '75px', cursor: 'pointer' }}>View</h2>
                            <img
                                style={{ width: '210px', height: '220px', objectFit: 'cover', borderRadius: '10px' }}
                                src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707373620/grade_6_10_250_k1dk8u.webp"
                                alt="SAT program"
                            />
                        </div>
                    </div>
                </div>
               
              
                {/* https://res.cloudinary.com/dpzpn3dkw/image/upload/v1727296954/Carousel_j1svii.webp */}


               <div>
                <img style={{width:'1020px' , height:'250px' , margin:'100px  '}} src={image}alt="" />
               </div>






            </div>
        </>
    )
}

export default NeetHero2