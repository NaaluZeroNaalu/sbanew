import section1 from "./section1.gif"
import bg from "./bg.png"
import partner1 from "./1.png"
import partner2 from "./2.png"
import partner3 from "./3.png"

function OpendhybridCloud(){

    return(

        <>

{/* SECTION ONE START */}
    <br /><br />
      <section  style={{backgroundImage:`url(${bg})`,backgroundSize:"fit",backgroundPosition:"center"}}>
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
        <div className="flex items-center justify-center">
  <div className="border-t border-b border-gray-300 w-1/3 my-4"></div>
  <h5 className="mx-4 text-xl text-light font-semibold">Outcomes</h5>
  <div className="border-t border-b border-gray-300 w-1/3 my-4"></div>
</div>  
<div  class=" p-12 rounded-xl" >
      {/* <h3 class="text-3xl font-semibold text-white mb-6 text-center">Ready to Apply?</h3> */}
<p class="text-lg text-gray-300 mb-8 text-center">
SBA Info Solution offers cutting-edge Hybrid Cloud solutions that combine private and public cloud environments to optimize your business operations. By leveraging both cloud infrastructures, we help you manage data and applications more efficiently, ensuring flexibility, scalability, and security. With SBA's Hybrid Cloud solutions, you can store sensitive data on private clouds while using public clouds for cost-effective, dynamic workloads. This integration provides your business with the flexibility to adapt to changing needs and ensures optimal performance across your infrastructure.
</p>
</div>
        <br /><br />

        <div className="section2">
        <div className="flex items-center justify-center">
  <div className="border-t border-b border-gray-300 w-1/3 my-4"></div>
  <h5 className="mx-4 text-xl text-light font-semibold">Why Choose us</h5>
  <div className="border-t border-b border-gray-300 w-1/3 my-4"></div>
</div>
  <div className="container">
    {/* Add details about why clients should choose SBA */}

<div className="section2 bg-black text-white">
  <h4 className="text-4xl font-bold text-center text-white mb-12">SBA provides modular and sustainable <span className="text-danger">AI solutions & ML Models</span></h4>
  <div className="flex flex-wrap justify-center gap-4 p-4">
    {/* Box 1 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">

      <h6 className="text-xl font-semibold text-center mb-4 text-white">Flexible Cloud Infrastructure</h6>
      <p className="text-center">SBA’s open hybrid cloud solutions combine the best of both private and public clouds, offering businesses the flexibility to run workloads in the most efficient environment based on their needs.</p>
    </div>
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">

      <h6 className="text-xl font-semibold text-center mb-4 text-white">Improved Security and Compliance</h6>
      <p className="text-center">SBA ensures that sensitive data is securely managed within private clouds, while public clouds handle less critical workloads, allowing businesses to meet security and regulatory requirements.</p>
    </div>
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">

      <h6 className="text-xl font-semibold text-center mb-4 text-white">Cross-Platform Compatibility</h6>
      <p className="text-center">With open hybrid cloud solutions, businesses can leverage multiple cloud providers, ensuring compatibility and avoiding vendor lock-in while accessing the best technologies from each provider.</p>
    </div>
  </div>
</div>
  </div>
</div>

        <br /><br />

        {/* SECTION THREE START */}
        {/* <p className="font-bold text-center text-muted mb-12">Our solutions</p> */}

        <div className="section2 bg-black text-white">
        <div className="flex items-center justify-center">
  <div className="border-t border-b border-gray-300 w-1/3 my-4"></div>
  <h5 className="mx-4 text-xl text-light font-semibold">Our solutions</h5>
  <div className="border-t border-b border-gray-300 w-1/3 my-4"></div>
</div>
  <h2 className="text-4xl font-bold text-center text-white mb-12">Why Choose SBA for Your Open Hybrid Cloud Solutions?</h2>
  <div className="flex flex-wrap justify-center gap-4 p-4">
    {/* Box 1 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-cloud text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Flexibility</h6>
      <p className="text-center">Select the optimal environment for each workload, ensuring that your applications run in the best possible setup, whether on-premise, public cloud, or hybrid cloud.</p>
    </div>

    {/* Box 2 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-expand text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Scalability</h6>
      <p className="text-center">Easily adjust applications and infrastructure according to demand, scaling up or down to meet the ever-changing needs of your business.</p>
    </div>

    {/* Box 3 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-cogs text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Simplified Management</h6>
      <p className="text-center">Manage your environments with ease across multiple clouds and on-premise infrastructures, giving you a unified and efficient operational model.</p>
    </div>

    {/* Box 4 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-shield-alt text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Enhanced Security</h6>
      <p className="text-center">Leverage best practices in security to protect your applications and data, ensuring a safe environment across all hybrid cloud models.</p>
    </div>

    {/* Box 5 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-lightbulb text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Innovation</h6>
      <p className="text-center">Drive innovation by leveraging the optimal technologies for every workload, creating an ecosystem that enhances agility and future-proofing your business.</p>
    </div>

    {/* Box 6 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-sync-alt text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Increased Efficiency</h6>
      <p className="text-center">Automate deployments and streamline operations to increase efficiency, reducing manual intervention and accelerating the time to market for new services.</p>
    </div>
  </div>
</div>


        {/* SECTION THREE END */}

<br /><br />

<div className="section4">
<div className="flex items-center justify-center">
  <div className="border-t border-b border-gray-300 w-1/3 my-4"></div>
  <h5 className="mx-4 text-xl text-light font-semibold">Our Tools</h5>
  <div className="border-t border-b border-gray-300 w-1/3 my-4"></div>
</div>
  <h1 className="text-white text-center">Powering <span className="text-danger">Hybrid Cloud</span>  with Cutting-Edge Technologies</h1>
  <div className="container">
    {/* Add partner logos or more content here */}
    <p className="text-white text-center">We collaborate with the best in the industry to drive results.</p>
    
  </div>
  <div className="flex flex-wrap justify-center gap-4 p-4">

      {/* Box 2 */}
      <div style={{boxShadow:"1px 1px 10px red"}} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-30 bg-gray-300 p-6 rounded-lg shadow-md transparent-box">
        <img src={partner1} alt="" />
      </div>
      <div style={{boxShadow:"1px 1px 10px red"}} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-30 bg-gray-300 p-6 rounded-lg shadow-md transparent-box">
        <img src={partner2} alt="" />
      </div>
      <div style={{boxShadow:"1px 1px 10px red"}} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-30 bg-gray-300 p-6 rounded-lg shadow-md transparent-box">
        <img src={partner3} alt="" />
      </div>
    </div>
</div>
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

export default OpendhybridCloud;