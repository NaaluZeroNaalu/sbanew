import section1 from "./section1.gif"
import { FaShapes } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiArtificialIntelligence } from "react-icons/gi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import dataandai from "./Group.svg"
import brochure from "./data-ai-brochure.pdf"
import bg from "./2.png"


function DatandAi(){

    return(

        <>
        <br /><br />
{/* SECTION ONE START */}
<section style={{backgroundImage:`url(${bg})`,backgroundSize:"fit",backgroundPosition:"center"}}>
<div className="container mx-auto px-4 py-8" >
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="text-center md:text-left">
      <h1 className="text-3xl font-bold text-white mb-4">
        Empower Your Business With
      </h1>
      <h4 className="text-xl text-white">
        Trusted AI Solutions
      </h4>
    </div>
    <div className="flex justify-center md:justify-end">
      <img src={section1} alt="AI Solutions" className="w-full sm:w-72 md:w-80 lg:w-96 object-contain" />
    </div>
  </div>
</div>
</section>
{/* SECTION ONE END */}

<br />
{/* SECTION TWO START */}

<div className="section2">
  <div className="container">
    {/* Add details about why clients should choose SBA */}
    <p className="text-white text-center">
    SBA provides modular and sustainable AI solutions & ML Models    </p>
  </div>
</div>
{/* SECTION TWO END */}

<br /><br />
{/* SECTION THREE START */}

<div className="section2 bg-black text-white">
  <h2 className="text-4xl font-bold text-center text-white mb-12">Why Choose SBA for Your Data & AI Solutions?</h2>
  <div className="flex flex-wrap justify-center gap-4 p-4">
    {/* Box 1 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-chart-line text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Data Analytics Excellence</h6>
      <p className="text-center">SBA brings deep expertise in data analytics to transform raw data into actionable insights, enabling your business to make informed decisions and drive growth.</p>
    </div>
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-robot text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">AI-Driven Innovation</h6>
      <p className="text-center">SBA brings deep expertise in data analytics to transform raw data into actionable insights, enabling your business to make informed decisions and drive growth.</p>
    </div>
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-cogs text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">End-to-End Solutions</h6>
      <p className="text-center">SBA brings deep expertise in data analytics to transform raw data into actionable insights, enabling your business to make informed decisions and drive growth.</p>
    </div>
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-puzzle-piece text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Customizable Solutions</h6>
      <p className="text-center">SBA brings deep expertise in data analytics to transform raw data into actionable insights, enabling your business to make informed decisions and drive growth.</p>
    </div>
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-arrow-up text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Scalable and Future-Ready</h6>
      <p className="text-center">SBA brings deep expertise in data analytics to transform raw data into actionable insights, enabling your business to make informed decisions and drive growth.</p>
    </div>
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-headset text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Expert Support & Collaboration</h6>
      <p className="text-center">SBA brings deep expertise in data analytics to transform raw data into actionable insights, enabling your business to make informed decisions and drive growth.</p>
    </div>
  </div>
</div>


{/* SECTION THREE END */}

<hr  className="text-white" />

<h1>hello</h1>

<hr  className="text-white" />
{/* SECTION FOUR START */}

<section className="my-5 py-5 bg-black text-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
    {/* Left Content */}
    <div className="md:w-1/2 w-full text-center md:text-left">
      <p className="text-5xl font-bold text-white leading-tight">
        Ready To <span className="text-red-500">Unlock</span> The Power Of{" "}
        <span className="text-red-500">Data and AI?</span>
      </p>

      <p className="text-lg text-gray-300 mt-5">
        If you're interested in exploring our Data and AI solutions or need
        more information, our experts are ready to assist you.
      </p>

      <div className="flex gap-3 mt-5 justify-content-center md:justify-start flex-col md:flex-row items-center">
        {/* Brochure Download Button */}
        <a
          href={brochure} 
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <button className="btn btn-outline-danger btn-lg">
            Download Brochure
          </button>
        </a>
      </div>
    </div>

    {/* Right Image */}
    <div className="md:w-1/2 w-full mt-5 md:mt-0 flex justify-center md:justify-end">
      <img
        src={dataandai}
        className="w-full max-w-md"
        loading="lazy"
        alt="AI"
      />
    </div>
  </div>
</section>


{/* SECTION FOUR END */}

<hr  className="text-white" />


{/* SECTION FIVE START */}

<section className="container text-center">

 
  <div>
    <h1 className="text-white">Transform your vision into reality</h1>
  </div>
  <div>
    <p className="text-white">Collaborate with us from start to finish and build solutions that deliver results.</p>
  </div>
  <div className="">
    <button className="btn btn-danger">We’re Here to Help</button>
  </div>
 
</section>


{/* SECTION FIVE END */}
<hr  className="text-white" />

        </>
    )
}

export default DatandAi