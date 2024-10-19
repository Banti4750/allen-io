import React from 'react'

const NettHero4 = ({title , p1 , p2}) => {
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
                }}>


                <div style={{ display: 'flex', justifyContent: 'center', color: 'white', marginTop: '100px' }}>
                    <div style={{ width: '1016px', marginBottom: '30px' }}>
                        <h1 style={{ display: 'flex', justifyContent: 'flex-start', color: 'white' }}>Looking for a classroom based program?</h1>
                    </div>

                </div>



                <div style={{ width: '1020px', height: '300px', display: 'flex ', justifyContent: 'space-between', backgroundColor: '#122034', borderRadius: '20px', padding: '0 40px', marginBottom: '100px' }}>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <h1 style={{ color: 'white', display: 'flex', marginBottom: '10px', justifyContent: 'flex-start', fontWeight: 'normal' }}>Present in 53 cities with
                            </h1>
                            <h1 style={{ color: 'white', marginBottom: '70px', display: 'flex', justifyContent: 'flex-start', fontWeight: 'normal' }}>
                                250+ classrooms</h1>

                            <button style={{ cursor: 'pointer', display: 'flex', justifyContent: 'flex-start', padding: '15px 40px', fontSize: '16px', borderRadius: '30px' }}>Find a Center</button>
                        </div>
                    </div>
                    <img
                        style={{ width: '600px', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
                        src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707820846/Updated_size_classroom_ck4yjp.webp"
                        alt="SAT program"
                    />

                </div>


                <div style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>
                    <div style={{ width: '1016px', marginBottom: '30px' }}>
                        <h1 style={{ display: 'flex', justifyContent: 'flex-start', color: 'white' }}>{title}</h1>
                    </div>

                </div>

                <div style={{   
                    maxWidth: '1020px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '30px',
                    textAlign: 'left',}}>

                    <p style={{color:'white' , fontSize:'18px' , lineHeight:'25px' , fontWeight:'normal'}}>{p1}</p>


                    <p style={{color:'white' , fontSize:'18px' , lineHeight:'25px' , fontWeight:'normal'}}>{p2}</p>
                </div>


            </div>

        </>
    )
}

export default NettHero4