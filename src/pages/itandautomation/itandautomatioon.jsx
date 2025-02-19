import section1 from "./ss.gif"

function ItandAutomation(){

    return(
        <>
{/* SECTION ONE START */}
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold text-danger mb-4">
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
{/* SECTION ONE END */}

{/* SECTION THREE START */}

<div className="section2 bg-black text-white">
  <h2 className="text-4xl font-bold text-center text-white mb-12">Why Choose SBA for Your IT & Automation Solutions?</h2>
  <div className="flex flex-wrap justify-center gap-4 p-4">
    {/* Box 1 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
      <i className="fas fa-cogs text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Increased Efficiency</h6>
      <p className="text-center">Streamline tasks and processes with automation, boosting productivity across your organization and allowing your team to focus on more strategic activities.</p>
    </div>

    {/* Box 2 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
      <i className="fas fa-dollar-sign text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Cost Reduction</h6>
      <p className="text-center">Reduce labor costs and minimize errors through automation, saving both time and money while optimizing business operations.</p>
    </div>

    {/* Box 3 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
      <i className="fas fa-check-circle text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Improved Accuracy</h6>
      <p className="text-center">Automation ensures fewer human errors, resulting in better data integrity and more accurate outcomes for your business decisions.</p>
    </div>

    {/* Box 4 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
      <i className="fas fa-fast-forward text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Faster Response</h6>
      <p className="text-center">Quickly resolve issues with automation, improving your service levels and ensuring that customer concerns are addressed in a timely manner.</p>
    </div>

    {/* Box 5 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
      <i className="fas fa-clipboard-check text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Enhanced Compliance</h6>
      <p className="text-center">Ensure your business adheres to policy guidelines and regulations with automated solutions that maintain consistency and compliance across operations.</p>
    </div>

    {/* Box 6 */}
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-50 bg-gray-800 p-6 rounded-lg shadow-md">
      <i className="fas fa-search-plus text-4xl text-white mb-4"></i> {/* Icon */}
      <h6 className="text-xl font-semibold text-center mb-4 text-white">Proactive Resolution</h6>
      <p className="text-center">Identify and resolve issues proactively with automated systems, preventing potential problems from escalating and minimizing downtime.</p>
    </div>
  </div>
</div>


{/* SECTION THREE END */}
        </>
    )
}

export default ItandAutomation;