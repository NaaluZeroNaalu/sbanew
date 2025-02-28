import security from "./section1.gif"
import bg from "./bg.png"
import partner1 from "./1.png"
import partner2 from "./2.png"

function SecurityandSustainability(){

    return(

        <>

 
        {/* SECTION ONE START */}
            <br /><br />
              <section style={{backgroundImage:`url(${bg})`,backgroundSize:"fit",backgroundPosition:"center"}}>
                  <div className="container mx-auto px-4 py-8" >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold text-white mb-4">
                        Security and Sustainability
                        </h1>
                        <h4 className="text-xl text-white">
                        Secure Enterprise Computing
                        </h4>
                      </div>
                      <div className="flex justify-center md:justify-end">
                        <img src={security} alt="AI Solutions" className="w-full sm:w-72 md:w-80 lg:w-96 object-contain" />
                      </div>
                    </div>
                  </div>
            </section>
                {/* SECTION ONE END */}
        {/* SECTION ONE END */}


<br /><br />
{/* SECTION TWO START */}

<div className="flex items-center justify-center">
  <div className="border-t border-b border-gray-300 w-1/3 my-4"></div>
  <h5 className="mx-4 text-xl text-light font-semibold">Outcomes</h5>
  <div className="border-t border-b border-gray-300 w-1/3 my-4"></div>
</div>
<br />
<div className="section2">
  <div className="container">
    {/* Add details about why clients should choose SBA */}
    <p className="text-white text-center">
    At SBA Info Solution, we integrate Security and Sustainability into all our solutions to ensure a secure and responsible business environment. Our advanced, multi-layered security measures protect your data and infrastructure with real-time threat detection, automated responses, and compliance with industry standards. Simultaneously, we are committed to sustainability by implementing energy-efficient technologies and eco-friendly practices, helping your business reduce its carbon footprint. By optimizing resource usage and promoting green cloud infrastructure, we support your sustainability goals while ensuring your business remains secure and competitive.
    </p>  
  </div>
</div>
{/* SECTION TWO END */}


<div className="section2">
  
  {/* <p className="font-bold text-center text-muted mb-12">Why Choose Us</p> */}
  <div className="container">
    {/* Add details about why clients should choose SBA */}
<br /><br />  
<div className="section2 bg-black text-white">
<div className="flex items-center justify-center">
  <div className="border-t border-b border-gray-300 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 my-4"></div>
  <h5 className="mx-4 text-base sm:text-xl md:text-1xl font-semibold">Why Choose Us</h5>
  <div className="border-t border-b border-gray-300 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 my-4"></div>
</div>
<br />
  <h4 className="text-4xl font-bold text-center text-white mb-12">SBA provides modular and sustainable <span className="text-danger">AI solutions & ML Models</span></h4>
  <div className="flex flex-wrap justify-center gap-4 p-4">
    {/* Box 1 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">

      <h6 className="text-xl font-semibold text-center mb-4 text-white">Comprehensive Security Solutions</h6>
      <p className="text-center">SBA provides end-to-end security services, protecting your IT infrastructure, data, and digital assets from threats, vulnerabilities, and cyberattacks.</p>
    </div>
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">

      <h6 className="text-xl font-semibold text-center mb-4 text-white">Secure Cloud & Hybrid Environments</h6>
      <p className="text-center">Whether on-premises, in the cloud, or in hybrid environments, SBA secures every layer of your infrastructure to prevent unauthorized access and ensure data integrity.</p>
    </div>
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">

      <h6 className="text-xl font-semibold text-center mb-4 text-white">Eco-Friendly IT Solutions</h6>
      <p className="text-center">SBA is committed to delivering sustainable IT solutions that help businesses reduce their carbon footprint, energy consumption, and environmental impact.</p>
    </div>
  </div>
</div>
  </div>
</div>


<br /><br />
{/* SECTION THREE START*/}


<div className="section2 bg-black text-white">
<div className="flex items-center justify-center">
  <div className="border-t border-b border-gray-300 w-1/3 my-4"></div>
  <h5 className="mx-4 text-xl  font-semibold">Our Solutions</h5>
  <div className="border-t border-b border-gray-300 w-1/3 my-4"></div>
</div>
<br />
  <h2 className="text-4xl font-bold text-center text-white mb-12">Why Choose SBA for Your Security & Sustainability Solutions?</h2>
  <div className="flex flex-wrap justify-center gap-4 p-4">
    {/* Box 1 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-shield-alt text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Advanced Encryption & Secure Partitioning</h6>
      <p className="text-center">Our security solutions employ advanced encryption methods and secure partitioning to ensure your sensitive data is always protected from unauthorized access.</p>
    </div>

    {/* Box 2 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-tachometer-alt text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Performance Optimization</h6>
      <p className="text-center">Our solutions handle large workloads efficiently, enabling your business to perform seamlessly even in the most demanding industries.</p>
    </div>

    {/* Box 3 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-expand text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Scalability</h6>
      <p className="text-center">Easily scale your resources to meet growing demands, all while maintaining high performance and avoiding any service disruptions.</p>
    </div>

    {/* Box 4 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-check-circle text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Reliability</h6>
      <p className="text-center">Our solutions ensure continuous availability with minimal downtime, offering reliable protection and service for your critical business operations.</p>
    </div>

    {/* Box 5 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-dollar-sign text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Cost Efficiency</h6>
      <p className="text-center">By consolidating resources and optimizing energy use, we help you reduce operational costs while maximizing your return on investment.</p>
    </div>

    {/* Box 6 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-leaf text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Sustainability</h6>
      <p className="text-center">We prioritize eco-friendly solutions that lower CO2 emissions and promote sustainable practices, making your business greener and more resource-efficient.</p>
    </div>
  </div>
</div>

{/* SECTION THREE END */}


<br /><br />
<div className="section4">
<div className="flex items-center justify-center">
  <div className="border-t border-b border-gray-300 w-1/3 my-4"></div>
  <h5 className="mx-4 text-light text-xl  font-semibold">Protecting Your Buisness with Best Tools</h5>
  <div className="border-t border-b border-gray-300 w-1/3 my-4"></div>
</div>
<br />
  <h1 className="text-white text-center">Protecting <span className="text-danger">Your Business</span> with Leading-Edge Security Solutions</h1>
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

export default SecurityandSustainability;