import ibm from "../..//assets/partners/ibm.png"
import redhat from "../..//assets/partners/redhat.png"
import trendmicro from "../..//assets/trusted_partners/trendmicro.png"
import hitachi from "../..//assets/trusted_partners/hitachi.png"
import netapp from "../..//assets/trusted_partners/netapp.png"
import paloalto from "../..//assets/trusted_partners/paloalto.png"
import crowdstrike from "../..//assets/trusted_partners/crowdstrike.png"
import commvault from "../..//assets/trusted_partners/commvault.png"
import vmware from "../../assets/trusted_partners/vmware.png"
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
                Open Hybrid Cloud
                </h1>
                <h4 className="text-xl text-white">
                Integrated Cloud Services
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

{/* SECTION THREE START */}
<div className="section3 text-center py-5">
        <h1 className="text-white mb-4">Trusted By Talent Leaders At</h1>

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
                <img src={vmware} alt="VMware" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
{/* SECTION THREE END */}

<br /><br />

{/* SECTION FOUR START */}
<div className="section4">
  <h1 className="text-white text-center">Our Partners Ecosystem</h1>
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

<section class="bg-dark py-20">
  <div class="container mx-auto text-center">
    <h2 class="text-4xl font-semibold text-white mb-6">Contact Us</h2>
    <p class="text-lg text-white mb-8">We'd love to hear from you! Get in touch with us for any inquiries or feedback.</p>
    
    <div class="max-w-4xl bg-dark  mx-auto bg-white p-8 rounded-lg shadow-lg">
      <form className="">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your Name" 
              class="w-full p-4 rounded-lg border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label for="email" class="text-gray-700">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Your Email" 
              class="w-full p-4 rounded-lg border-gray-300 shadow-sm"
            />
          </div>
        </div>
        
        <div class="mt-6">
          <label for="message" class="text-gray-700">Your Message</label>
          <textarea 
            id="message" 
            rows="5" 
            placeholder="Your Message" 
            class="w-full p-4 rounded-lg border-gray-300 shadow-sm"
          ></textarea>
        </div>
        
        <div class="mt-6 text-center">
          <button 
            type="submit" 
            class="btn btn-primary btn-lg"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

{/* SECTION SIX END */}

<br /><br />

{/* FOOTER SECTION */}
<div className="footer">
  <footer className="text-center text-white py-4">
    <p>&copy; 2025 SBA. All Rights Reserved. | <a href="#privacy-policy" className="text-white">Privacy Policy</a></p>
  </footer>
</div>
{/* FOOTER SECTION END */}


        </>
    )
}

export default Home;