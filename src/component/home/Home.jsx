import "locomotive-scroll/dist/locomotive-scroll.css";

import { AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import ScrollTriggerProxy from "./ScrollTriggerProxy";



import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "./home.css"; // Assuming style.css contains styles for your components
import "./landingpage.css"; // Assuming style.css contains styles for your components
import Scramblesloder from "./Scramblesloder"; // Import the Scrambles component
import Landingpage from "./Landingpage";
import My_Navbar from "../Navbar/Nav";
import founder from "../images1/vimgt.png";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Experience from "./Experience";
import Testnomial from "./Testnomial";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import Cidias from "./Cidias";
import Loader from "./Loader";



function App() {
  // useLocoScroll();
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 7000);
  }, []);



  return (
    <>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            <ScrollTriggerProxy />
            <AnimatePresence>
              {Loaded ? null : <Loader />}

            
    
         <My_Navbar />
     < ScrollToTopButton />

        <Landingpage key="home" />
        <About key="about" />
        <Skills key="skill" />
        <Project key="project" />
        <Experience key="exp" />
        <Testnomial key="testnomial" />
        <Cidias key="cidias" />
        <Contact key="contact" />
        <Footer />


            </AnimatePresence>
          </main>
        </LocomotiveScrollProvider>
    </>
  );
}

export default App;









// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import LocomotiveScroll from "locomotive-scroll";
// import "./home.css"; // Assuming style.css contains styles for your components
// import "./landingpage.css"; // Assuming style.css contains styles for your components
// import Scramblesloder from "./Scramblesloder"; // Import the Scrambles component
// import Landingpage from "./Landingpage";
// import My_Navbar from "../Navbar/Nav";
// import founder from "../images1/vimgt.png";
// import About from "./About";
// import Skills from "./Skills";
// import Project from "./Project";
// import Experience from "./Experience";
// import Testnomial from "./Testnomial";
// import Contact from "./Contact";
// import Footer from "./Footer";
// import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
// import Cidias from "./Cidias";

// function Home() {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//     });

//     loading(); // Run animation after LocomotiveScroll is initialized

//     return () => {
//       scroll.destroy(); // Clean up LocomotiveScroll instance on component unmount
//     };
//   }, []);

//   function loading() {
//     // start code for slide page
//     var tl = gsap.timeline();

//     tl.to("#yellow", {
//       top: "-100%",
//       delay: 1,
//       duration: 0.7,
//       ease: "expo.out",
//     });

//     tl.from("#yellow1", {
//       top: "100%",
//       delay: 2,
//       duration: 0.01,
//       ease: "expo.out",
//     });

//     tl.to(
//       "#loader h1",
//       {
//         color: "red",
//         delay: 0.6,
//         duration: 0.7,
//       },
//       "anim"
//     );
  
//     tl.to(
//       "#loader h1",
//       {
//         color: "blue",
//         textShadow: 2,
//         textDecoration: "dotted",
//         textDecorationColor: "white",
//         delay: 0.8,
//         duration: 0.7,
//       },
//       "anim"
//     );

//     tl.to("#loader", {
//       delay: 0.6,
//       duration: 0.7,
//       transition: 2,
//       display: "none",
//     });
//     // end code for slide page
//   }

 

//   return (
//     <>
//       <div id="loader">
//         <div id="yellow"></div>
//         <div id="yellow1"></div>

//         <video autoPlay loop muted src="/video/myy.mp4"></video>

//         <h1>
//           <Scramblesloder
//             text="CREATIVE PROFESSIONALS 
//                    DEDICATED TO CULTURAL 
//                     ADVANCEMENT THROUGH 
//                     STRATEGY AND DESIGN"
//           />
//         </h1>
//       </div>

//       <div ref={scrollRef} id="main">
//         <My_Navbar />
//         <Landingpage id="home" />
//         <About id="about" />
//         <Skills id="skill" />
//         <Project id="project" />
//         <Experience id="exp" />
//         <Testnomial id="testnomial" />
//         <Cidias />
//         <Contact id="contact" />
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Home;






















