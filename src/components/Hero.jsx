import React from 'react';

const Hero = () => {
    return (
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
            <div
                style={{
                    display: 'flex',
                    //   flexDirection: 'row',
                    justifyContent: 'space-between',
                    //   alignItems: 'center',
                    flexWrap: 'wrap',


                    gap: '220px'
                }}
            >
                <div style={{ maxWidth: '600px' }}>
                    <h1 style={{ fontSize: '2.5rem', display: 'flex', justifyContent: 'flex-start', fontWeight: 'bold', color: 'white', marginTop: '30px' }}>
                        <div>
                            Your Dream.
                            
                        </div>
                        {/* <div></div> */}

                    </h1>
                    <h1 style={{ fontSize: '2.5rem', display: 'flex', justifyContent: 'flex-start', fontWeight: 'bold', color: 'white', marginBottom: '100px', }}>
                        <div>
                        Our Expertise.
                            
                        </div>
                        {/* <div>Our Expertise.</div> */}

                    </h1>



                    <h2 style={{ fontSize: '1.5rem', color: 'white', margin: '20px 0', marginBottom: '30px' }}>
                        What brings you to us today?
                    </h2>

                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '10px' }}>
                        <button
                            style={{
                                cursor: 'pointer',
                                width: '80px',
                                borderRadius: '40px',
                                padding: '10px 20px',
                                display: 'flex',
                                backgroundColor: '#0f1825',
                                border: '3px solid red',
                                color: 'white',
                                alignItems: 'center',
                            }}
                        >
                            NEET
                        </button>
                        <button
                            style={{
                                cursor: 'pointer',
                                width: '70px',
                                borderRadius: '40px',
                                padding: '10px 20px',
                                display: 'flex',
                                backgroundColor: '#0f1825',
                                border: '3px solid red',
                                color: 'white',
                                alignItems: 'center',
                            }}
                        >
                            JEE
                        </button>
                        <button
                            style={{
                                cursor: 'pointer',
                                width: '120px',
                                borderRadius: '40px',
                                padding: '10px 20px',
                                display: 'flex',
                                backgroundColor: '#0f1825',
                                border: '3px solid red',
                                color: 'white',
                                alignItems: 'center',
                            }}
                        >
                            Grade 6-10
                        </button>
                    </div>
                </div>


                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <img
                        style={{
                            width: '400px',
                            height: '400px',
                            objectFit: 'cover',
                            borderRadius: '20px',

                        }}
                        src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1707310905%2Fc_4_olon7a.webp&w=640&q=75"
                        alt="Education Banner"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
