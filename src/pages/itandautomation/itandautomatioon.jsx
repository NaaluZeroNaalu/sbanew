import section1 from "./ss.gif"
import bg from "./bg.png"

import product1 from "./1.png"
import product2 from "./2.png"
import product3 from "./3.png"
import product4 from "./4.png"

function ItandAutomation(){

    return(
        <>
<br /><br />
  <section style={{backgroundImage:`url(${bg})`,backgroundSize:"fit",backgroundPosition:"center"}}>
      <div className="container mx-auto px-4 py-8" >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-white mb-4">
            IT Automation
            </h1>
            <h4 className="text-xl text-white">
            Empower Your Operations
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

      <h6 className="text-xl font-semibold text-center mb-4 text-white">End-to-End IT Automation</h6>
      <p className="text-center">SBA offers comprehensive automation services, from IT infrastructure management to workflow automation, ensuring seamless operations across all aspects of your business.</p>
    </div>
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">

      <h6 className="text-xl font-semibold text-center mb-4 text-white">Cost Efficiency</h6>
      <p className="text-center">Automation reduces the need for manual intervention, leading to significant cost savings by minimizing errors, reducing resource consumption, and optimizing existing systems.</p>
    </div>
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">

      <h6 className="text-xl font-semibold text-center mb-4 text-white">Streamlined Operations</h6>
      <p className="text-center">SBA’s IT and automation solutions help organizations automate repetitive tasks, reducing manual workload and improving operational efficiency.</p>
    </div>
  </div>
</div>
  </div>
</div>

<br /><br />  
{/* SECTION THREE START */}

<div className="section2 bg-black text-white">
<p className="font-bold text-center text-muted mb-12">Our solutions</p>
<br />
  <h2 className="text-4xl font-bold text-center text-white mb-12">Why Choose SBA for Your <span className="text-danger">IT & Automation Solutions?</span></h2>
  <div className="flex flex-wrap justify-center gap-4 p-4">
    {/* Box 1 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-cogs text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Increased Efficiency</h6>
      <p className="text-center">Streamline tasks and processes with automation, boosting productivity across your organization and allowing your team to focus on more strategic activities.</p>
    </div>

    {/* Box 2 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-dollar-sign text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Cost Reduction</h6>
      <p className="text-center">Reduce labor costs and minimize errors through automation, saving both time and money while optimizing business operations.</p>
    </div>

    {/* Box 3 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-check-circle text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Improved Accuracy</h6>
      <p className="text-center">Automation ensures fewer human errors, resulting in better data integrity and more accurate outcomes for your business decisions.</p>
    </div>

    {/* Box 4 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-fast-forward text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Faster Response</h6>
      <p className="text-center">Quickly resolve issues with automation, improving your service levels and ensuring that customer concerns are addressed in a timely manner.</p>
    </div>

    {/* Box 5 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-clipboard-check text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Enhanced Compliance</h6>
      <p className="text-center">Ensure your business adheres to policy guidelines and regulations with automated solutions that maintain consistency and compliance across operations.</p>
    </div>

    {/* Box 6 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-dark p-6 rounded-lg shadow-md">
      <i className="fas fa-search-plus text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Proactive Resolution</h6>
      <p className="text-center">Identify and resolve issues proactively with automated systems, preventing potential problems from escalating and minimizing downtime.</p>
    </div>
  </div>
</div>

<br />

<br />
{/* SECTION THREE END */}

<div className="section4">
  <h1 className="text-white text-center">Leading IT Automation with<span className="text-danger"> Industry-Leading Tools</span></h1>
  <div className="container">
    {/* Add partner logos or more content here */}
    <p className="text-white text-center">We collaborate with the best in the industry to drive results.</p>
    
  </div>
  <div className="flex flex-wrap justify-center gap-4 p-4">
      {/* Box 1 */}
      <div style={{boxShadow:"1px 1px 10px red"}} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 bg-opacity-30 bg-gray-300 p-6 rounded-lg shadow-md transparent-box">
        <img src={product1} alt="" />
      </div>

      {/* Box 2 */}
      <div style={{boxShadow:"1px 1px 10px red"}} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 bg-opacity-30 bg-gray-300 p-6 rounded-lg shadow-md transparent-box">
        <img src={product2} alt="" />
      </div>
      <div style={{boxShadow:"1px 1px 10px red"}} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 bg-opacity-30 bg-gray-300 p-6 rounded-lg shadow-md transparent-box">
        <img src={product3} alt="" />
      </div>
      <div style={{boxShadow:"1px 1px 10px red"}} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 bg-opacity-30 bg-gray-300 p-6 rounded-lg shadow-md transparent-box">
        <img src={product4} alt="" />
      </div>
    </div>
</div>

<br /><br />
<br /><br />
<section class="bg-gray-900 py-20">
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
</section>


        </>
    )
}

export default ItandAutomation;