import React from 'react'

const Discover = () => {
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
                <div style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>
                    <div style={{ width: '1016px', marginBottom: '30px' }}>
                        <h1 style={{ display: 'flex', justifyContent: 'flex-start', color: 'white' }}>Discover the perfect online program</h1>
                    </div>

                </div>


                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
                    <div style={{ width: '320px', height: '250px', backgroundColor: '#122034', padding: '25px', borderRadius: '20px' }}>
                        <h1 style={{ color: 'white', display: 'flex', justifyContent: 'flex-start', fontWeight: 'normal' }}>JEE</h1>

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
                        <h1 style={{ color: 'white', display: 'flex', justifyContent: 'flex-start', fontWeight: 'normal' }}>NEET</h1>
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
                        <h1 style={{ color: 'white', display: 'flex', justifyContent: 'flex-start', fontWeight: 'normal' }}>Grade 6-10</h1>
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



                <div style={{ display: 'flex', justifyContent: 'center', color: 'white', marginTop: '100px' }}>
                    <div style={{ width: '1016px', marginBottom: '30px' }}>
                        <h1 style={{ display: 'flex', justifyContent: 'flex-start', color: 'white' }}>Looking for a classroom based program?</h1>
                    </div>

                </div>



                <div style={{ width: '1020px', height: '300px', display: 'flex ', justifyContent:'space-between' ,backgroundColor: '#122034', borderRadius: '20px', padding: '0 40px' , marginBottom:'100px'}}>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <h1 style={{ color: 'white', display: 'flex', marginBottom:'10px' , justifyContent: 'flex-start', fontWeight: 'normal' }}>Present in 53 cities with
                            </h1>
                            <h1 style={{ color: 'white', marginBottom:'70px' , display: 'flex', justifyContent: 'flex-start', fontWeight: 'normal' }}>
                                250+ classrooms</h1>

                                <button style={{  cursor:'pointer' , display: 'flex', justifyContent: 'flex-start',padding:'15px 40px' , fontSize:'16px' , borderRadius:'30px'}}>Find a Center</button>
                        </div>
                    </div>
                    <img
                        style={{ width: '600px', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
                        src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707820846/Updated_size_classroom_ck4yjp.webp"
                        alt="SAT program"
                    />

                </div>
              

              <img style={{ width: '1020px', height: '600px',}} src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707734560/download_app_vgvsbx.webp" alt="" />



            </div>
        </>
    )
}

export default Discover;
