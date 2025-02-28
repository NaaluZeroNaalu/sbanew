import ibm from "../..//assets/partners/ibm.png"
import redhat from "../..//assets/partners/redhat.png"
import trendmicro from "../..//assets/trusted_partners/trendmicro.png"
import hitachi from "../..//assets/trusted_partners/hitachi.png"
import netapp from "../..//assets/trusted_partners/netapp.png"
import paloalto from "../..//assets/trusted_partners/paloalto.png"
import crowdstrike from "../..//assets/trusted_partners/crowdstrike.png"
import commvault from "../..//assets/trusted_partners/commvault.png"
import vmware from "../../assets/trusted_partners/vmware.png"
import delphi from "../../assets/trusted_partners/delphi.png"
import finance from "../../assets/trusted_partners/finance.png"
import housing from "../../assets/trusted_partners/housing.png"
import hyundai from "../../assets/trusted_partners/hyundai.png"
import indianbank from "../../assets/trusted_partners/indianbank.png"
import iob from "../../assets/trusted_partners/iob.png"
import taab from "../../assets/trusted_partners/taab.png"
import tafe from "../../assets/trusted_partners/tafe.png"
import tvs from "../../assets/trusted_partners/tvs.png"
import will from "../../assets/trusted_partners/wil.png"
import { useEffect, useState } from "react"
import section1 from "./section1.gif"
import bg from "./bg.png"

function Home(){


  

    return(

        <>

{/* SECTION ONE START */}
<br /><br />
<section style={{backgroundImage:`url(${bg})`,backgroundSize:"fit",backgroundPosition:"center"}}>
  <div className="container mx-auto px-4 py-8" >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-white mb-4">
                Automate the Mundane
                </h1>
                <h4 className="text-xl text-white">
                Elevate Human Potential
                </h4>
              </div>
              <div className="flex justify-center md:justify-end">
                <img src={section1} alt="AI Solutions" className="w-full sm:w-72 md:w-80 lg:w-96 object-contain" />
              </div>
            </div>
          </div>
    </section>

{/* SECTION ONE END */}

<br /><br />



{/* SECTION TWO START */}
<div className="section2">
<h1 className="text-white mb-4 text-center">Our Guiding <span className="text-danger">Principles</span></h1>
<div className="flex flex-wrap justify-center gap-4 p-4">
      {/* Box 1 */}
      <div style={{boxShadow:"1px 1px 10px red"}}  className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-30 bg-gray-300 p-6 rounded-lg shadow-md transparent-box">
        <h2 className="text-xl font-semibold text-center mb-4 text-danger">MISSION</h2>
        <p className="text-center text-white">To be the transformative force that shapes an agile, purposeful future of work on a global scale</p>
      </div>

      {/* Box 2 */}
      <div style={{boxShadow:"1px 1px 10px red"}} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-30 bg-gray-300 p-6 rounded-lg shadow-md transparent-box">
        <h2 className="text-xl font-semibold text-center mb-4 text-danger">VISION</h2>
        <p className="text-center text-white">To become a global leader in creating agile and seure work environments that boost productivity and promote sustainable growth, contributing to a more resilent and equitable global economy</p>
      </div>

      {/* Box 3 */}
      <div style={{boxShadow:"1px 1px 10px red"}} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-30 bg-gray-300 p-6 rounded-lg shadow-md transparent-box">
        <h2 className="text-xl font-semibold text-center mb-4 text-danger">VALUES</h2>
        <p className=" text-white">
        <ol className="list-symbol pl-5">
          <li className="mb-2 before:content-['•'] before:mr-2">Relentless curiosity & agility</li>
          <li className="mb-2 before:content-['•'] before:mr-2">Bold Experimentation</li>
          <li className="mb-2 before:content-['•'] before:mr-2">Multidisciplinary Innovation</li>
          <li className="mb-2 before:content-['•'] before:mr-2">Wisdom in Action</li>
          <li className="mb-2 before:content-['•'] before:mr-2">Data and Future Obsessed</li>
        </ol>
        </p>
      </div>
    </div>
</div>
{/* SECTION TWO END */}


<br /><br />
<hr className="text-light" />
{/* SECTION THREE START */}
<div className="section3 text-center py-5">
        <h1 className="text-white mb-4">Trusted By <span className="text-danger">Talent Leaders</span> At</h1>

        <div className="container">
          <div className="logo-scroll-container overflow-hidden">
            <div className="d-flex logo-scroll">
              <div className="company-logo mx-4">
                <img src={trendmicro} alt="TrendMicro" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={hitachi} alt="Hitachi" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={crowdstrike} alt="CrowdStrike" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={commvault} alt="CommVault" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={netapp} alt="NetApp" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={paloalto} alt="Palo Alto" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={vmware} alt="VMware" className="img-fluid" />
              </div>
              {/* Repeat logos for infinite scrolling */}
              <div className="company-logo mx-4">
                <img src={trendmicro} alt="TrendMicro" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={hitachi} alt="Hitachi" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={crowdstrike} alt="CrowdStrike" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={commvault} alt="CommVault" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={netapp} alt="NetApp" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={paloalto} alt="Palo Alto" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={delphi} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={finance} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={housing} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={hyundai} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={indianbank} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={iob} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={taab} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={tafe} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={tvs} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={will} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={vmware} alt="VMware" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="section3 text-center py-5">
        <div className="container">
          <div className="logo-scroll-container overflow-hidden">
            <div className="d-flex logo-scroll">
              <div className="company-logo mx-4">
                <img src={delphi} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={finance} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={housing} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={hyundai} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={indianbank} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={iob} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={taab} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={tafe} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={tvs} alt="VMware" className="img-fluid" />
              </div>
              <div className="company-logo mx-4">
                <img src={will} alt="VMware" className="img-fluid" />
              </div>

            </div>
          </div>
        </div>
      </div>
{/* SECTION THREE END */}

<br /><br />
<hr className="text-light" />
{/* SECTION FOUR START */}
<div className="section4">
  <h1 className="text-white text-center">Our <span className="text-danger">Partners</span> Ecosystem</h1>
  <div className="container">
    {/* Add partner logos or more content here */}
    <p className="text-white text-center">We collaborate with the best in the industry to drive results.</p>
    
  </div>
  <div className="flex flex-wrap justify-center gap-4 p-4">
      {/* Box 1 */}
      <div style={{boxShadow:"1px 1px 10px red"}} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-30 bg-gray-300 p-6 rounded-lg shadow-md transparent-box">
        <img src={ibm} alt="" />
      </div>

      {/* Box 2 */}
      <div style={{boxShadow:"1px 1px 10px red"}} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-30 bg-gray-300 p-6 rounded-lg shadow-md transparent-box">
        <img src={redhat} alt="" />
      </div>
    </div>
</div>
{/* SECTION FOUR END */}

<br /><br />

{/* SECTION FIVE START */}
<div className="section5">
  <h1 className="text-white text-center">Why SBA</h1>
  <div className="container">
    {/* Add details about why clients should choose SBA */}
    <p className="text-white text-center">
      SBA brings innovation, agility, and data-driven insights to transform the way companies work and grow.
    </p>
    <br /><br />
    <div className="row">
        <div className="col-md-3 text-center">
            <div style={{boxShadow:"1px 1px 10px red"}} className="transparent-box pt-5 pb-5">
                <h1 className="text-white">300+</h1>
                <p className="text-white">customers</p>
            </div>
        </div>
        <div  className="col-md-3 text-center">
            <div style={{boxShadow:"1px 1px 10px red"}} className="transparent-box pt-5 pb-5">
                <h1 className="text-white">30+</h1>
                <p className="text-white">Years in market</p>
            </div>
        </div>
        <div className="col-md-3 text-center">
            <div style={{boxShadow:"1px 1px 10px red"}} className="transparent-box pt-5 pb-5">
                <h1 className="text-white">Best</h1>
                <p className="text-white">predictive support</p>
            </div>
        </div>
        <div className="col-md-3 text-center">
            <div style={{boxShadow:"1px 1px 10px red"}} className="transparent-box pt-5 pb-5">
                <h1 className="text-white">ISO</h1>
                <p className="text-white">process rigor & certifications</p>
            </div>
        </div>

    </div>
  </div>
</div>
{/* SECTION FIVE END */}

<br /><br />

{/* SECTION SIX START */}

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

{/* SECTION SIX END */}




        </>
    )
}

export default Home;