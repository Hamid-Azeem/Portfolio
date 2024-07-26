import { useState } from 'react';
import emailjs from 'emailjs-com';
import Wicon from "../Assets/WhatsappIcon.png";
import pngContact from "../Assets/Contact us.gif";
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );
    e.target.reset();
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+923105242022';
    const message = 'Hello Hamid, I would like to get in touch with you.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id='contact' className='py-16 md:mt-5 px-8'>
      <h1 className="text-4xl md:text-5xl text-center text-[#353535] font-bold mb-8">Let's Work Together</h1>
      <div className=" md:px-8 flex flex-col lg:flex-row justify-around items-center" >
        <div className="w-full lg:w-1/2">

          <form onSubmit={sendEmail} className="flex flex-col space-y-4">
            <div className='flex flex-col gap-5'>
              <input
                type="text"
                placeholder='Name'
                name="user_name"
                className="mt-1 text-[#6c757d] font-semibold hover:border-[#dc143c] block w-full p-2 border border-gray-300 focus:border-[#dc143c] focus:outline-none rounded-md shadow-sm placeholder-custom"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder='Email'
                className="mt-1 text-[#6c757d] font-semibold hover:border-[#dc143c] focus:border-[#dc143c] focus:outline-none block w-full px-2 py-3 border border-gray-300 rounded-md shadow-sm placeholder-custom"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder='Your message'
                rows={5}
                className="mt-2 text-[#6c757d] font-semibold hover:border-[#dc143c] focus:border-[#dc143c] focus:outline-none block w-full p-2 border border-gray-300 rounded-md shadow-sm placeholder-custom"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center text-white py-2 px-4 mt-3 bg-[#dc143c] hover:text-[#dc143c] hover:bg-transparent font-bold rounded-md border-2 border-[#dc143c] transition-all duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              <div>
                <button
                  id="whatsappButton"
                  onClick={handleWhatsAppClick}
                  className="flex mt-5 items-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                >
                  <img className='w-6 h-6 mr-2' src={Wicon} alt="WhatsApp Icon" />
                  Contact on WhatsApp
                </button>
              </div>
            </div>
            {stateMessage && <p className="text-center text-sm mt-4">{stateMessage}</p>}
          </form>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <img src={pngContact} alt="contact_us" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
