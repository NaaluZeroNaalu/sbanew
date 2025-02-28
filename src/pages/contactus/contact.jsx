import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if formRef is correctly set
    if (formRef.current) {
      emailjs
        .sendForm(
          'service_hawq1hh', // Replace with your service ID
          'template_w5qm929',  // Replace with your template ID
          formRef.current,    // Reference to your form
          'dPrR_5SSgkN4Npz6M' // Replace with your user ID
        )
        .then(
          (result) => {
            console.log('Email sent successfully!', result.text);
            alert('Request submitted successfully');
            window.location.href = '/Industries'; // Redirect after successful submission
            e.target.reset(); // Reset form after submission
          },
          (error) => {
            console.error('Error sending email:', error.text);
            alert('Failed to send message. Please try again later.');
          }
        );
    } else {
      console.error('Form reference is not set.');
    }
  };

  return (
    <>
      <section className="bg-dark py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white mb-6">Contact Us</h2>
          <p className="text-lg text-white mb-8">
            We'd love to hear from you! Get in touch with us for any inquiries or feedback.
          </p>

          <div className="max-w-4xl bg-gray-800 mx-auto p-8 rounded-xl shadow-xl">
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name" // Ensure the 'name' attribute is set
                    placeholder="Your Name"
                    className="w-full p-4 rounded-lg border-2 border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-white transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-gray-300">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email" // Ensure the 'name' attribute is set
                    placeholder="Your Email"
                    className="w-full p-4 rounded-lg border-2 border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-white transition-all"
                  />
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="message" className="text-gray-300">Your Message</label>
                <textarea
                  id="message"
                  name="message" // Ensure the 'name' attribute is set
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-4 rounded-lg border-2 border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-white transition-all"
                ></textarea>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-500 focus:outline-none transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center w-full mt-12 border-t border-gray-700 md:flex-row md:justify-between"></div>
        </div>
      </section>
    </>
  );
}

export default Contact;
