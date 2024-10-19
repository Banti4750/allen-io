import React from 'react'
import NeetHero from './NeetComponent/NeetHero'
import NeetHero2 from './NeetComponent/NeetHero2'
import NeetHero3 from './NeetComponent/NeetHero3'
import NettHero4 from './NeetComponent/NettHero4'
import WhyNeet from './NeetComponent/WhyNeet'
import NeetTable from './NeetComponent/NeetTable'
import NeetQuestion from './NeetComponent/NeetQuestion'


const Neetpage = () => {
    return (
        <>
            <NeetHero
             
            h ={"NEET Online Coaching"}
            t1={"Our NEET Online coaching programs prioritize the NCERT syllabus, a"}
            t2={"cornerstone for NEET success. You get access to exclusive study tools"}
            t3={"and techniques to enhance memory retention and boost your speed,"}
            t4={"two crucial factors in acing the NEET exam"}
            img1={" https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707308305/neet_0._2x_dkqbnv.webp"}
            img2={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1727444104/PLP_Ticker_tx7nvz.webp"}
            
            
            
            />
            <NeetHero2
            image={"   https://res.cloudinary.com/dpzpn3dkw/image/upload/v1727296954/Carousel_j1svii.webp"}

            />
            <NeetHero3
            
            title={"What’s special about our NEET Programs?"}
            h1={"We work with you to improve your learning outcomes"}
            h2={"Proven over 1000s of ALLEN students"}
            image={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1699111593/stage/widget/announcement_carousel/carausel_03_2x_goyqtl.webp"}

            />
            <NettHero4
            title={"NEET Online Coaching"}
            p1={"ALLEN’s NEET Online Coaching Courses are meticulously crafted to equip students with the knowledge and strategies needed to excel in the NEET exam. To secure a seat in a prestigious medical college, preparation must be strategic, consistent, and guided by expert mentors. ALLEN’s NEET Online Course offers an integrated approach, combining high-quality study materials and practice papers, ensuring thorough preparation under the guidance of our experienced and renowned faculty."}
            
            p2={"At ALLEN, we prioritize quality without compromise. Our comprehensive NEET preparation materials are designed to simplify complex concepts and accelerate your learning process. The course includes subject-specific tests in Physics, Chemistry, Botany, and Zoology, allowing students to evaluate their performance and target areas for improvement. Additionally, ALLEN provides improvement books to help students strengthen their weak areas and track their progress throughout their preparation journey. Enroll today and take a step closer to your medical dream with ALLEN’s NEET Online Coaching!"}
            />
            <WhyNeet/>
            <NeetTable/>
            <NeetQuestion/>
            

           
        </>
    )
}

export default Neetpage