

function Footer(){

    return(
        <>

<footer className="bg-black text-white py-6">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start">

    <div className="flex flex-col md:flex-row items-center md:items-start mb-4 md:mb-0">
      <div className="text-xl font-semibold text-white">SBA Solutions</div>
    </div>

    <div className="flex flex-col md:flex-row gap-6 mb-4 md:mb-0 items-center md:items-start">
      <a href="#services" className="text-white hover:text-white transition duration-300" style={{ textDecoration: "none" }}>Who we are</a>
      <a href="#about" className="text-white hover:text-white transition duration-300" style={{ textDecoration: "none" }}>Solutions</a>
      <a href="#contact" className="text-white hover:text-white transition duration-300" style={{ textDecoration: "none" }}>Careers</a>
      <a href="#privacy" className="text-white hover:text-white transition duration-300" style={{ textDecoration: "none" }}>About Us</a>
    </div>

    <div className="flex gap-6 mt-4 md:mt-0">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin text-2xl text-gray-400 hover:text-blue-600 transition duration-300"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube text-2xl text-gray-400 hover:text-red-600 transition duration-300"></i>
      </a>
    </div>
  </div>

  <p className="text-center text-gray-400 text-sm mt-2 md:ml-4 md:mt-0">© {new Date().getFullYear()} SBA Solutions. All rights reserved.</p>
</footer>

        </>
    )
}

export default Footer;