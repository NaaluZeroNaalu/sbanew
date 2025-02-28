import section1 from "./section1.gif"
import bg from "./bg.png"
import aboutus from "./aboutus.svg"
import ourfocus from "./ourfocus.png"
import expertise from "./expertise.png"
import c1 from "../../assets/certifications/certification 1.png"
import c2 from "../../assets/certifications/certification 2.png"
import c3 from "../../assets/certifications/certification 3.png"
import c4 from "../../assets/certifications/certification 4.png"
import c5 from "../../assets/certifications/certification 5.png"
import c6 from "../../assets/certifications/certification 6.png"
import c7 from "../../assets/certifications/certification 7.png"
import c8 from "../../assets/certifications/certification 8.png"
import c9 from "../../assets/certifications/certification 9.png"
import c10 from "../../assets/certifications/certification 10.png"
import c11 from "../../assets/certifications/certification 11.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Aboutus(){


  const certifications = [
    { image: c1, title: "Certification 1" },
    { image: c2, title: "Certification 2" },
    { image: c3, title: "Certification 3" },
    { image: c4, title: "Certification 4" },
    { image: c5, title: "Certification 5" },
    { image: c6, title: "Certification 6" },
    { image: c7, title: "Certification 7" },
    { image: c8, title: "Certification 8" },
    { image: c9, title: "Certification 9" },
    { image: c10, title: "Certification 10" },
    { image: c11, title: "Certification 11" },
  ];


  const settings = {
    dots: true, // Show dots at the bottom
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 4, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: false, // Disable next/previous arrows (optional)
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay every 3 seconds
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 3, // Show 3 slides at a time
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
        },
      },
      {
        breakpoint: 480, // For very small screens
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
        },
      },
    ],
    
  };
  


    return(

        <>
        <br /><br />

        {/* SECTION ONE START */}

        <section style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className="bg-black py-16">
  <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="text-center md:text-left text-white">
        <h1 className="text-4xl font-bold mb-6">Scale Smarter, Not Harder</h1>
        <p className="text-lg mb-4">Empower your business with smarter AI and automation solutions.</p>
        <div className="d-grid">
          <button className="btn btn-outline-light text-white border-white hover:bg-white hover:text-black py-2 px-6 rounded-full transition-all duration-300">Let's Talk</button>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <img src={section1} alt="AI Solutions" className="w-full sm:w-72 md:w-80 lg:w-96 object-contain" />
      </div>
    </div>
  </div>
</section>

<br /><br />

<div className="section2">
  <div className="container">
    {/* Add details about why clients should choose SBA */}
    <p className="text-white text-center">
    At SBA Info Solutions, we empower your businesses to innovate, streamline operations, and achieve sustainable growth while optimizing costs. By leveraging our deep industry knowledge, data-driven insights, and advanced AI solutions, we help you unlock the full potential of your resources and create a future-ready business model. Our mission is to drive long-term success and ensure your investment delivers maximum value.
    </p>  
  </div>
</div>

<br /><br />


{/* SECTIONS */}

<section id="solutions">
  {[ 
    {
      description: "Founded in 1991, SBA Info Solutions Private Limited is a Chennai-based automation company with over 30 years of experience in delivering enterprise solutions. We strive to empower professionals by advancing innovative solutions that seamlessly integrate Data & AI, IT & Business Automation, Security & Sustainability, and Open hybrid cloud technologies.",
      image: aboutus
    },
    {
      description: "Our focus is on creating agile and secure work environments that boost productivity and promote sustainable growth, contributing to a more resilient and equitable global economy. We thrive with our motto 'Automate the Mundane, Elevate Human Potential'",
      image: ourfocus
    },
    {
      description: "SBA has 60+ partnerships with top OEMs, specializing in Next Gen AI, ML, Cloud Services, and Security networks. Our expertise spans BFSI, Manufacturing, IT/ITES, Healthcare, Media with solutions architecture and consulting capabilities enhancing our AI Innovation Center and Managed security services.",
      image: expertise
    }
  ].map((item, index) => (

    <>
<div key={index} className={`p-6 md:p-10  shadow-md ${index % 2 === 0 ? 'bg-dark':''}`}>
  <div className={`flex flex-col md:flex-row gap-6 md:gap-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
    {/* Image */}
    <div className="w-full sm:w-64 md:w-80 lg:w-96 p-1 md:p-2">
      <div className="overflow-hidden rounded-lg">
        <img
          src={item.image}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105 img-fluid"
          loading="eager"
          alt="AI Solutions"
        />
      </div>
    </div>

    {/* Text */}
    <div className="w-full md:pl-6 mt-6 md:mt-0">
      {/* <br /><br /><br /><br /><br /> */}
      <p className="text-xl text-left text-white lg:pt-35 sm:pt-0">{item.description}</p>
    </div>
  </div>
</div>

    </>
  ))}
</section>


{/* SECTIONS */}

<div className="w-full mx-auto max-w-7xl">

<div class="flex flex-col items-center justify-center w-full mt-12 border-t border-gray-700 md:flex-row md:justify-between">
      
</div>
</div>
<br /><br />

{/* SECTION FIVE START */}

<h1 className="text-center text-white mt-8">OUR CERTIFICATIONS</h1>

<div className="certifications-slider mt-8 justify-center items-center" > 
  <Slider {...settings} >
    {certifications.map((cert, index) => (
      <div key={index} className="slide">
        <img src={cert.image} alt={cert.title} className="cert-image" />
        {/* <p className="text-center text-white">{cert.title}</p> */}
      </div>
    ))}
  </Slider>
</div>

{/* SECTION FIVE END */}
<br /><br />

<section class="bg-dark py-20">
  <div class="container mx-auto text-center">
    <h2 class="text-4xl font-semibold text-white mb-6">Contact Us</h2>
    <p class="text-lg text-white mb-8">We'd love to hear from you! Get in touch with us for any inquiries or feedback.</p>
    
    <div class="max-w-4xl bg-gray-800 mx-auto p-8 rounded-xl shadow-xl">
      <form class="">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label for="name" class="text-gray-300">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your Name" 
              class="w-full p-4 rounded-lg border-2 border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-white transition-all"
            />
          </div>
          <div>
            <label for="email" class="text-gray-300">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Your Email" 
              class="w-full p-4 rounded-lg border-2 border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-white transition-all"
            />
          </div>
        </div>
        
        <div class="mt-8">
          <label for="message" class="text-gray-300">Your Message</label>
          <textarea 
            id="message" 
            rows="5" 
            placeholder="Your Message" 
            class="w-full p-4 rounded-lg border-2 border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-white transition-all"
          ></textarea>
        </div>
        
        <div class="mt-8 text-center">
          <button 
            type="submit" 
            class="w-full py-3 px-6 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-500 focus:outline-none transition-all"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>

<div className="w-full mx-auto max-w-7xl">

<div class="flex flex-col items-center justify-center w-full mt-12 border-t border-gray-700 md:flex-row md:justify-between">
      
</div>
</div>
</section>


        </>
    )
}


export default Aboutus;