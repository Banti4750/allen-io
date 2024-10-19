import React from 'react'

const NeetHero3 = ({title , h1 , h2 , image}) => {
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
                }} >

                <div style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>
                    <div style={{ width: '1016px', marginBottom: '30px' }}>
                        <h1 style={{ display: 'flex', justifyContent: 'flex-start', color: 'white' }}>{title}</h1>
                    </div>

                </div>


                <div style={{  display:'flex' ,justifyContent:'center' , alignItems:'center' , gap:'45px' ,  width: '1020px', height: '290px', backgroundColor: '#122034', borderRadius: '30px' ,padding:'20px' }}>


                    <div>
                        <div>
                            <img style={{ width: "160px", height: '160px' }} src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1712231009/widget/stream_selection/live_intractive_classes_rryjiy.webp" alt="" />
                        </div>
                        <p style={{color:'white' , marginTop:'40px' , fontSize:'18px' , fontWeight:'normal'}}>
                            Daily Live Interactive Classes
                        </p>
                    </div>

                    <div>
                        <div>
                            <img style={{ width: "160px", height: '160px' }} src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1712300211/widget/stream_selection/personalised_study_tool_dt952h.webp" alt="" />
                        </div>
                        <p style={{color:'white' , marginTop:'40px' , fontSize:'18px' , fontWeight:'normal'}}>
                        Personalised Study Tools
                        </p>
                    </div>

                    <div>
                        <div>
                            <img style={{ width: "160px", height: '160px' }} src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1712231009/widget/stream_selection/weekly_self_study_plan_p7xw68.webp" alt="" />
                        </div>
                        <p style={{color:'white' , marginTop:'40px' , fontSize:'18px' , fontWeight:'normal'}}>
                        Weekly Self-study Plan
                        </p>
                    </div>

                    <div>
                        <div>
                            <img style={{ width: "160px", height: '160px' }} src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1712231009/widget/stream_selection/score_improvement_strategy_h9mzhl.webp" alt="" />
                        </div>
                        <p style={{color:'white' , marginTop:'40px' , fontSize:'18px' , fontWeight:'normal'}}>
                        Score Improvement Strategy
                        </p>
                    </div>

                </div>




                <div style={{margin:'50px' , color:'white' , fontWeight:'normal'}}>
                    <h1 style={{marginBottom:'10px'}}>{h1}</h1>
                    <h3 style={{fontSize:'25px'}}>{h2}</h3>
                </div>


                {/* https://res.cloudinary.com/dpzpn3dkw/image/upload/v1699111593/stage/widget/announcement_carousel/carausel_03_2x_goyqtl.webp */}

                <div>
                    <img style={{width:'1020px' , height:'auto'}} src={image} alt="" />
                </div>


            </div>
        </>
    )
}

export default NeetHero3