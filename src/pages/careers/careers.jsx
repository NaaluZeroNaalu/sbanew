import Header from "../header/header";

function Carrers(){


    return(

        <>
        <br /><br />
<section class="bg-dark py-20">
  <div class="container mx-auto text-center">
    <h2 class="text-4xl font-semibold text-white mb-6">Join Our Team</h2>
    <p class="text-lg text-white mb-12">We are always looking for passionate individuals to help us grow. Check out our available job opportunities!</p>

  
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
        <div class="bg-dark p-8 rounded-xl shadow-lg">
          <h3 class="text-2xl font-semibold text-white mb-4">Frontend Developer</h3>
          <p class="text-gray-300 mb-4">We are looking for a skilled frontend developer to join our team and build responsive, user-friendly websites and applications.</p>
          <p class="text-gray-500 mb-4"><strong>Location:</strong> Remote</p>
          <p class="text-gray-500 mb-4"><strong>Salary:</strong> Competitive</p>
        </div>
      
        <div class="bg-dark p-8 rounded-xl shadow-lg">
          <h3 class="text-2xl font-semibold text-white mb-4">Backend Developer</h3>
          <p class="text-gray-300 mb-4">We are seeking an experienced backend developer to work on server-side logic, APIs, and databases.</p>
          <p class="text-gray-500 mb-4"><strong>Location:</strong> Remote</p>
          <p class="text-gray-500 mb-4"><strong>Salary:</strong> Competitive</p>
        </div>
    
        <div class="bg-dark p-8 rounded-xl shadow-lg">
          <h3 class="text-2xl font-semibold text-white mb-4">UX/UI Designer</h3>
          <p class="text-gray-300 mb-4">Join our team to help design intuitive and visually appealing user interfaces for our apps and websites.</p>
          <p class="text-gray-500 mb-4"><strong>Location:</strong> Remote</p>
          <p class="text-gray-500 mb-4"><strong>Salary:</strong> Competitive</p>
        </div>
      </div>
    </div>

    <div style={{boxShadow:"1px 1px 10px red"}} class="bg-dark mt-16 p-12 rounded-xl" >
      <h3 class="text-3xl font-semibold text-white mb-6 text-center">Ready to Apply?</h3>
      <p class="text-lg text-gray-300 mb-8 text-center">Send your resume and cover letter to the email below. We look forward to hearing from you!</p>
      
      <div class="text-center">
        <p class="text-gray-300 mb-4">Email us at:</p>
        <a href="mailto:hr@company.com" class="text-gray-300 hover:text-white underline">hr@company.com</a>
      </div>
    </div>
  </div>
</section>

{/* SECTION ONE END */}
        </>
    )
}

export default Carrers