import React from 'react'
import NeetHero from '../NeetPage/NeetComponent/NeetHero'
import NeetHero2 from '../NeetPage/NeetComponent/NeetHero2'
import NeetHero3 from '../NeetPage/NeetComponent/NeetHero3'
import NettHero4 from '../NeetPage/NeetComponent/NettHero4'
import JeeQuestion from './JeeQuestion'

const JeePage = () => {
    return (
        <>
            <NeetHero

                h={"JEE Online Coaching"}
                t1={"Our JEE coaching programs are expertly designed to navigate the"}
                t2={"complexity of JEE concepts. The program balances its focus on both in-"}
                t3={"depth understanding and challenging problem-solving, empowering"}
                t4={"you with confidence to ace the JEE Main and Advanced exams."}
                img1={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081052/200_jee_pnsy0n.webp"}
                img2={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1726907235/dark_w_CTA_guaqy5.webp"}

            />

            <NeetHero2
                image={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1727297851/Homepage_Entry_Banner_nvf0yj.webp"}

            />

            <NeetHero3

                title={"What’s special about our JEE Programs?"}
                h1={"We work with you to improve your learning outcomes"}
                h2={"Proven over 1000s of ALLEN students"}
                image={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1699111593/stage/widget/announcement_carousel/carausel_02_2x_sb1wms.webp"}

            />

            <NettHero4 
            title={"JEE Online Coaching"}
            p1={"ALLEN’s JEE Online Coaching program is designed to help students prepare for the IIT JEE. These programs are designed based on the syllabus as per NCERT guidelines to ensure that students always remain a step ahead in their preparation. The program offers live courses, video lessons, doubt-clearing sessions, and study materials, including solved examples, important formulas, and conceptual questions that help memorize key concepts. The IIT online coaching also provides personalized evaluation to help students prepare for the JEE Main and Advanced exams."}
            />
             

             <JeeQuestion/>

        </>
    )
}

export default JeePage