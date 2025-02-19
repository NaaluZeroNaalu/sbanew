import section1 from "./section1.gif"
import bg from "./bg.png"

function Aboutus(){

    return(

        <>
{/* SECTION ONE START */}

<section style={{backgroundImage:`url(${bg})`,backgroundSize:"fit",backgroundPosition:"center"}}>
<div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="text-center md:text-left">
      <h1 className="text-left text-3xl font-bold text-danger mb-4">
        Scale Smarter, Not Harder
      </h1>
      <p className="text-xl text-white text-left">
        At SBA Info Solutions, we empower your businesses to innovate, streamline operations, and achieve sustainable growth while optimizing costs. By leveraging our deep industry knowledge, data-driven insights, and advanced AI solutions, we help you unlock the full potential of your resources and create a future-ready business model. Our mission is to drive long-term success and ensure your investment delivers maximum value.
      </p>
      <div className="d-grid">
      <button className="btn btn-outline-danger">Let's Talk</button>
      </div>
    </div>
    <div className="flex justify-center md:justify-end">
      <img src={section1} alt="AI Solutions" className="w-full sm:w-72 md:w-80 lg:w-96 object-contain" />
    </div>
  </div>
</div>

</section>
{/* SECTION ONE END */}

<h1 className="text-center">About SBA</h1>

{/* SECTION TWO START */}
<div className="container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="text-center md:text-left">
      {/* <h1 className="text-left text-3xl font-bold text-danger mb-4">
        About SBA
      </h1> */}
      <p className="text-xl text-white text-left">
      Founded in 1991, SBA Info Solutions Private Limited is a Chennai-based automation company with over 30 years of experience in delivering enterprise solutions. We strive to empower professionals by advancing innovative solutions that seamlessly integrate Data & AI, IT & Business Automation, Security & Sustainability, and Open hybrid cloud technologies.
      </p>
    </div>
    <div className="flex justify-center md:justify-end">
      <img src={section1} alt="AI Solutions" className="w-full sm:w-72 md:w-80 lg:w-96 object-contain" />
    </div>
  </div>
</div>
{/* SECTION TWO END */}
<h1 className="text-center">Our Focus</h1>

{/* SECTION THREE START */}
<div className="container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="text-center md:text-left">
      {/* <h1 className="text-left text-3xl font-bold text-danger mb-4">
        About SBA
      </h1> */}
      <p className="text-xl text-white text-left">
      Our focus is on creating agile and secure work environments that boost productivity and promote sustainable growth, contributing to a more resilient and equitable global economy.

We thrive with our motto “Automate the Mundane, Elevate Human Potential”
     </p>
    </div>
    <div className="flex justify-center md:justify-end">
      <img src={section1} alt="AI Solutions" className="w-full sm:w-72 md:w-80 lg:w-96 object-contain" />
    </div>
  </div>
</div>
{/* SECTION THREE END */}
<h1 className="text-center">Our Expertise</h1>

{/* SECTION THREE START */}
<div className="container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="text-center md:text-left">
      {/* <h1 className="text-left text-3xl font-bold text-danger mb-4">
        About SBA
      </h1> */}
      <p className="text-xl text-white text-left">
      SBA has 60+ partne    ships with top OEMs, specializing in Next Gen AI, ML, Cloud Services, and Security networks.

Our expertise spans BFSI, Manufacturing, IT/ITES, Healthcare, Media with solutions architecture and consulting capabilities enhancing our AI Innovation Center and Managed security services.
     </p>
    </div>
    <div className="flex justify-center md:justify-end">
      <img src={section1} alt="AI Solutions" className="w-full sm:w-72 md:w-80 lg:w-96 object-contain" />
    </div>
  </div>
</div>
{/* SECTION THREE END */}


        </>
    )
}


export default Aboutus;