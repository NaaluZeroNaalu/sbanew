import section1 from "./section1.gif"
import bg from "./bg.png"

function OpendhybridCloud(){

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

        {/* SECTION THREE START */}

        <div className="section2 bg-black text-white">
  <h2 className="text-4xl font-bold text-center text-white mb-12">Why Choose SBA for Your Open Hybrid Cloud Solutions?</h2>
  <div className="flex flex-wrap justify-center gap-4 p-4">
    {/* Box 1 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
      <i className="fas fa-cloud text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Flexibility</h6>
      <p className="text-center">Select the optimal environment for each workload, ensuring that your applications run in the best possible setup, whether on-premise, public cloud, or hybrid cloud.</p>
    </div>

    {/* Box 2 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
      <i className="fas fa-expand text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Scalability</h6>
      <p className="text-center">Easily adjust applications and infrastructure according to demand, scaling up or down to meet the ever-changing needs of your business.</p>
    </div>

    {/* Box 3 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
      <i className="fas fa-cogs text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Simplified Management</h6>
      <p className="text-center">Manage your environments with ease across multiple clouds and on-premise infrastructures, giving you a unified and efficient operational model.</p>
    </div>

    {/* Box 4 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
      <i className="fas fa-shield-alt text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Enhanced Security</h6>
      <p className="text-center">Leverage best practices in security to protect your applications and data, ensuring a safe environment across all hybrid cloud models.</p>
    </div>

    {/* Box 5 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
      <i className="fas fa-lightbulb text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Innovation</h6>
      <p className="text-center">Drive innovation by leveraging the optimal technologies for every workload, creating an ecosystem that enhances agility and future-proofing your business.</p>
    </div>

    {/* Box 6 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
      <i className="fas fa-sync-alt text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Increased Efficiency</h6>
      <p className="text-center">Automate deployments and streamline operations to increase efficiency, reducing manual intervention and accelerating the time to market for new services.</p>
    </div>
  </div>
</div>


        {/* SECTION THREE END */}
        </>
    )
}

export default OpendhybridCloud;