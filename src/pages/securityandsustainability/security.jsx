import security from "./section1.gif"
import bg from "./bg.png"


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


{/* SECTION TWO START */}

<div className="section2">
  <div className="container">
    {/* Add details about why clients should choose SBA */}
    <p className="text-white text-center">
    SBA empowers enterprises to Safeguard data, reduce environmental impact, and optimize operations with IBM LinuxONE.</p>
  </div>
</div>
{/* SECTION TWO END */}

{/* SECTION THREE START*/}


<div className="section2 bg-black text-white">
  <h2 className="text-4xl font-bold text-center text-white mb-12">Why Choose SBA for Your Security & Sustainability Solutions?</h2>
  <div className="flex flex-wrap justify-center gap-4 p-4">
    {/* Box 1 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
      <i className="fas fa-shield-alt text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Advanced Encryption & Secure Partitioning</h6>
      <p className="text-center">Our security solutions employ advanced encryption methods and secure partitioning to ensure your sensitive data is always protected from unauthorized access.</p>
    </div>

    {/* Box 2 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
      <i className="fas fa-tachometer-alt text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Performance Optimization</h6>
      <p className="text-center">Our solutions handle large workloads efficiently, enabling your business to perform seamlessly even in the most demanding industries.</p>
    </div>

    {/* Box 3 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
      <i className="fas fa-expand text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Scalability</h6>
      <p className="text-center">Easily scale your resources to meet growing demands, all while maintaining high performance and avoiding any service disruptions.</p>
    </div>

    {/* Box 4 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
      <i className="fas fa-check-circle text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Reliability</h6>
      <p className="text-center">Our solutions ensure continuous availability with minimal downtime, offering reliable protection and service for your critical business operations.</p>
    </div>

    {/* Box 5 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
      <i className="fas fa-dollar-sign text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Cost Efficiency</h6>
      <p className="text-center">By consolidating resources and optimizing energy use, we help you reduce operational costs while maximizing your return on investment.</p>
    </div>

    {/* Box 6 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
      <i className="fas fa-leaf text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Sustainability</h6>
      <p className="text-center">We prioritize eco-friendly solutions that lower CO2 emissions and promote sustainable practices, making your business greener and more resource-efficient.</p>
    </div>
  </div>
</div>

{/* SECTION THREE END */}
        </>
    )
}

export default SecurityandSustainability;