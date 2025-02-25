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

        <div className="section2">
  <p className="font-bold text-center text-muted mb-12">Why Choose Us</p>
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
        <p className="font-bold text-center text-muted mb-12">Our solutions</p>

        <div className="section2 bg-black text-white">
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
        </>
    )
}

export default OpendhybridCloud;