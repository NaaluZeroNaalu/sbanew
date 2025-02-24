function Solutions(){

    return(
        <>
        <br /><br />
        <div id="solutions" className="container">
  <div className="row">
    {/* Data and AI */}
    <div className="col-sm-3 mb-4 sm:mb-0">
      <div className="bg-dark">
      <h1 className="text-3xl text-white" style={{textDecoration:"none"}}>Data and AI</h1>
      <p className="text-white">Leverage data and artificial intelligence to optimize your business operations.</p>
      <button className="btn btn-danger">Go</button>
      </div>
    </div>

    {/* IT and Business Automation */}
    <div className="col-sm-3 mb-4 sm:mb-0">
        <div className="bg-dark">
        <h1 className="text-3xl text-white" style={{textDecoration:"none"}}>IT and Business Automation</h1>
        <p className="text-white">Automate repetitive tasks to improve efficiency and productivity across your business.</p>
        </div>
    </div>

    {/* Open Hybrid Cloud */}
    <div className="col-sm-3 mb-4 sm:mb-0">
        <div className="bg-dark">
        <h1 className="text-3xl text-white" style={{textDecoration:"none"}}>Open Hybrid Cloud</h1>
        <p className="text-white">Build flexible, scalable cloud solutions that can seamlessly integrate with existing infrastructures.</p>
        </div>
    </div>

    {/* Security and Sustainability */}
    <div className="col-sm-3">
        <div className="bg-dark">
        <h1 className="text-3xl text-white" style={{textDecoration:"none"}}>Security and Sustainability</h1>
        <p className="text-white">Ensure the security of your systems while promoting sustainability and ethical practices.</p>
        </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Solutions