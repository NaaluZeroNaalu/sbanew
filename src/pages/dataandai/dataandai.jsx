import section1 from "./ssection1.gif"
import { FaShapes } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiArtificialIntelligence } from "react-icons/gi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import dataandai from "./Group.svg"
import brochure from "./data-ai-brochure.pdf"
import bg from "./2.png"
import manufacturing from "./manufacturing.gif"
import banking from "./banking.gif"
import healthcare from "./healthcare.gif"
import it from "./it.gif"
import partner1 from "./one.png"
import partner2 from "./two.png"
import partner3 from "./three.png"
import partner4 from "./four.png"

function DatandAi(){

    return(

        <>

<br /><br />
{/* SECTION ONE START */}
<section style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
  <div className="container mx-auto px-4 py-8">
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
<br /> {/* Line break to separate sections */}
<br />

<div  class=" mt-16 p-12 " >
      {/* <h3 class="text-3xl font-semibold text-white mb-6 text-center">Ready to Apply?</h3> */}
<p class="text-lg text-gray-300 mb-8 text-center">
  At SBA Info Solution, we specialize in providing cutting-edge Artificial Intelligence (AI) solutions designed to elevate your business operations. Our expert team leverages trusted AI technologies to help you streamline processes, enhance decision-making, and drive growth. With a strong commitment to innovation and reliability, we offer tailored AI services that align with your unique business needs, ensuring efficiency and scalability. Partner with us to unlock the full potential of AI and transform your business into a smarter, more competitive enterprise.
</p>

</div>

<br /><br />



<br /><br />
{/* SECTION TWO START */}
<div className="section2 bg-black text-white">
  <p className="font-bold text-center text-muted mb-12">Why Choose Us</p>
  <div className="container">
    <h4 className="text-4xl font-bold text-center text-white mb-12">SBA provides modular and sustainable <span className="text-red-500">AI solutions & ML Models</span></h4>
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {/* Box 1 */}
      <div style={{ boxShadow: "1px 1px 10px red" }} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
        <h6 className="text-xl font-semibold text-center mb-4 text-white">Modular AI Solutions</h6>
        <p className="text-center">SBA offers flexible and scalable AI solutions that can be tailored to meet the unique needs of businesses, allowing for easy integration and future upgrades.</p>
      </div>
      <div style={{ boxShadow: "1px 1px 10px red" }} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
        <h6 className="text-xl font-semibold text-center mb-4 text-white">Efficiency & Cost Savings</h6>
        <p className="text-center">SBA's modular approach promotes efficient use of resources, reducing operational costs while increasing the overall performance of AI and ML systems.</p>
      </div>
      <div style={{ boxShadow: "1px 1px 10px red" }} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
        <h6 className="text-xl font-semibold text-center mb-4 text-white">Seamless Integration</h6>
        <p className="text-center">SBA ensures that their AI and ML models are easily integrated with existing systems, minimizing disruption while maximizing operational efficiency.</p>
      </div>
    </div>
  </div>
</div>
{/* SECTION TWO END */}
<br /> {/* Line break to separate sections */}
<br />
{/* SECTION THREE START */}
<div className="section2 bg-black text-white">
  <p className="font-bold text-center text-muted mb-12">Our solutions</p>
  <h2 className="text-4xl font-bold text-center text-white mb-12">Explore Our <span className="text-red-500">AI Solutions</span></h2>
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
<br /> {/* Line break to separate sections */}

{/* SECTION FOUR START */}
<section className="my-5 py-5 bg-black text-white">
  <p className="font-bold text-center text-muted mb-12">Unlock The Power Of Data and AI</p>
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

      <div className="flex gap-3 mt-5 justify-center md:justify-start flex-col md:flex-row items-center">
        {/* Brochure Download Button */}
        <a href={brochure} target="_blank" rel="noopener noreferrer" download>
          <button className="btn btn-outline-danger btn-lg">
            Download Brochure
          </button>
        </a>
      </div>
    </div>

    {/* Right Image */}
    <div className="md:w-1/2 w-full mt-5 md:mt-0 flex justify-center md:justify-end">
      <img src={dataandai} className="w-full max-w-md" loading="lazy" alt="AI" />
    </div>
  </div>
</section>
{/* SECTION FOUR END */}
<hr className="text-white" /> {/* Horizontal line */}


<br /> {/* Line break to separate sections */}

<section className="bg-gray-900 py-20">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-semibold text-white mb-6">Contact Us</h2>
    <p className="text-lg text-white mb-8">We'd love to hear from you! Get in touch with us for any inquiries or feedback.</p>

    <div className="max-w-4xl bg-gray-800 mx-auto p-8 rounded-xl shadow-xl">
      <form className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label for="name" className="text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg border-2 border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-white transition-all"
            />
          </div>
          <div>
            <label for="email" className="text-gray-300">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg border-2 border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-white transition-all"
            />
          </div>
        </div>

        <div className="mt-8">
          <label for="message" className="text-gray-300">Your Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-lg border-2 border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-white transition-all"
          ></textarea>
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-500 focus:outline-none transition-all"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</section>



        </>
    )
}

export default DatandAi