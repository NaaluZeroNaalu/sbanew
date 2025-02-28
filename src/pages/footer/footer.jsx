

function Footer(){

    return(
        <>

<footer class="relative w-full  bg-dark text-white">
  <br />
  <div class="w-full px-8 mx-auto max-w-7xl">
    <div class="grid justify-between grid-cols-1 gap-4 md:grid-cols-2">
      <h5 class="mb-6 text-xl font-semibold text-white md:text-center">
        {/* SBA Info Solutions */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.988767516827!2d80.21310177454757!3d13.03638681345565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e1fecbc9db%3A0x792c9b430ee8bd4a!2sSBA%20Info%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1740721056601!5m2!1sen!2sin" width="100%" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </h5>
      <div class="grid justify-between grid-cols-3 gap-4">
        <ul>
          <h5 class="block mb-1 text-base font-semibold text-white" >
            Who we are
          </h5>
          <li>
            <a href="/Aboutus" class="block text-light py-1 hover:text-gray-100   focus:text-white text-sm" style={{textDecoration:"none"}}>
              About Us
            </a>
          </li>
          <li>
            <a href="/Leadership" class="block text-light py-1 hover:text-white focus:text-white text-sm" style={{textDecoration:"none"}}>
              Our Leadership
            </a>
          </li>
        </ul>
        <ul>
          <h5 class="block mb-1 text-base font-semibold text-white">
            Solutions
          </h5>
          <li>
            <a href="/Data-and-Ai" class="block text-light py-1 hover:text-white focus:text-white text-sm" style={{textDecoration:"none"}}>
              Data and AI
            </a>
          </li>
          <li>
            <a href="/IT-And-Automation" class="block text-light py-1 hover:text-white focus:text-white text-sm" style={{textDecoration:"none"}}>
              IT and Business Automation
            </a>
          </li>
          <li>
            <a href="/Open-Hybrid-Cloud" class="block text-light py-1 hover:text-white focus:text-white text-sm" style={{textDecoration:"none"}}>
              Open Hybrid Cloud
            </a>
          </li>
          <li>
            <a href="/Security-And-Sustainability" class="block text-light py-1 hover:text-white focus:text-white text-sm" style={{textDecoration:"none"}}>
              Security and Sustainability
            </a>
          </li>
        </ul>
        <ul>
          <h5 class="block mb-1 text-base font-semibold text-white">
            Resources
          </h5>
          <li>
            <a href="#" class="block text-light py-1 hover:text-white focus:text-white text-sm" style={{textDecoration:"none"}}>
              Blog
            </a>
          </li>
          <li>
            <a href="/Contact-us" class="block text-light py-1 hover:text-white focus:text-white text-sm" style={{textDecoration:"none"}}>
              Help Center
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-gray-700 md:flex-row md:justify-between">
      <p class="block mb-4 text-sm text-center text-gray-400 md:mb-0">
        Copyright © 2025 All Rights Reserved.
      </p>
      <div class="flex gap-4 text-gray-400 sm:justify-center">
        <a class="block transition-opacity text-inherit hover:opacity-80" style={{textDecoration:"none"}}>
          <p className="text-light">Connect With Us</p>
        </a>
        <a href="https://www.linkedin.com/company/sba-info-solutions/" target="_blank" class="block text-light transition-opacity text-inherit hover:opacity-80">
        <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/@venkatesh_watsonx" target="_blank" class="block text-light transition-opacity text-inherit hover:opacity-80">
        <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
  </div>
</footer>


        </>
    )
}

export default Footer;