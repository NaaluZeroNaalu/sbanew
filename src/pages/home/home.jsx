import ibm from "../..//assets/partners/ibm.png"
import redhat from "../..//assets/partners/redhat.png"


function Home(){

    return(

        <>

        {/* SECTION ONE START */}
        <br /><br />
<div className="section1">
  <h1 className="text-white text-center display-4">Automate The Mundane</h1>
  <h3 className="text-white text-center mb-4">Elevate The Human Potential</h3>
  <br />
  <div className="text-center">
    <button className="btn btn-outline-light btn-lg"><b>GET IN TOUCH</b></button>
  </div>
</div>
{/* SECTION ONE END */}

<br /><br />

{/* SECTION TWO START */}
<div className="section2">
<div className="flex flex-wrap justify-center gap-4 p-4">
      {/* Box 1 */}
      <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-30 bg-gray-300 p-6 rounded-lg shadow-md transparent-box">
        <h2 className="text-xl font-semibold text-center mb-4 text-danger">MISSSION</h2>
        <p className="text-center text-white">To be the transformative force that shapes an agile, purposeful future of work on a global scale</p>
      </div>

      {/* Box 2 */}
      <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-30 bg-gray-300 p-6 rounded-lg shadow-md transparent-box">
        <h2 className="text-xl font-semibold text-center mb-4 text-danger">VISION</h2>
        <p className="text-center text-white">To become a global leader in creating agile and seure work environments that boost productivity and promote sustainable growth, contributing to a more resilent and equitable global economy</p>
      </div>

      {/* Box 3 */}
      <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-30 bg-gray-300 p-6 rounded-lg shadow-md transparent-box">
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
<div className="section3">
  <h1 className="text-white text-center mb-4">Trusted By Talent Leaders At</h1>

  <div className="container">
    <div className="scrolling-companies">
      <div className="d-flex justify-content-around align-items-center">
        {/* You can replace these with actual logos of companies */}
        <div className="company-logo">Logo 1</div>
        <div className="company-logo">Logo 2</div>
        <div className="company-logo">Logo 3</div>
        <div className="company-logo">Logo 4</div>
        <div className="company-logo">Logo 5</div>
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
      <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-30 bg-gray-300 p-6 rounded-lg shadow-md transparent-box">
        <img src={ibm} alt="" />
      </div>

      {/* Box 2 */}
      <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 bg-opacity-30 bg-gray-300 p-6 rounded-lg shadow-md transparent-box">
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
            <div className="transparent-box pt-5 pb-5">
                <h1 className="text-white">300+</h1>
                <p className="text-white">customers</p>
            </div>
        </div>
        <div className="col-md-3 text-center">
            <div className="transparent-box pt-5 pb-5">
                <h1 className="text-white">30+</h1>
                <p className="text-white">Years in market</p>
            </div>
        </div>
        <div className="col-md-3 text-center">
            <div className="transparent-box pt-5 pb-5">
                <h1 className="text-white">Best</h1>
                <p className="text-white">predictive support</p>
            </div>
        </div>
        <div className="col-md-3 text-center">
            <div className="transparent-box pt-5 pb-5">
                <h1 className="text-white">ISO</h1>
                <p className="text-white">process rigor & certifications</p>
            </div>
        </div>

    </div>
  </div>
</div>
{/* SECTION FIVE END */}

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