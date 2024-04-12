


// import { BsFillTelephoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
//   const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(form.current);
    // const toastId = toast.loading("Progress...", { duration: 10000 });

    emailjs
      .sendForm(
        "service_pmy9t5h",
        "template_gzz9xwj",
        form.current,
        "uJvCKRPwawDBtMqV0"
      )
      .then(
        (result) => {
            console.log(result);
           
                toast.success("Message Sent Successfully.")
                console.log(result);
                // setLoading(false)
                form.current.reset();
            }, (error) => {
                toast.error("Something went wrong!")
                console.log(error);
                // setLoading(false)
            });
  };


  return (
    <div id="contact" className="py-20 bg-gray-900 text-white">
        
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto">
      <Toaster />
        <h3 className="text-4xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-sky-400">
          Contact Me
        </h3>
        <p className="text-center text-lg mt-5">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <div className="flex flex-col lg:flex-row lg:items-center gap-16 py-20 lg:px-0">
          <div
            className=" space-y-10 ml-16 md:ml-48 md:text-xl lg:mx-12 xl:mx-10"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="flex items-center gap-6 ">
              <MdEmail className="w-10 h-10 text-sky-400" />
              <div className="font-clashDisplay">
                <h3 className="font-medium"> Email Address</h3>
                <h5>rika_cse_1819@istt.edu.bd</h5><a href="mailto:rika_cse_1819@istt.edu.bd" target="_blank" rel="noopener noreferrer" className="text-sky-400 font-bold hover:text-primary">Send a message</a>
              
              </div>
            </div>
            <div className="flex items-center gap-6 ">
              <BsMessenger className="w-8 h-8 text-sky-400" />
              <div className="font-clashDisplay">
                <h3 className="font-medium">Messenger</h3>
                <h5>Sharmin Rika </h5><a href="https://m.me/sharmin.sadia.3701" target="_blank" rel="noopener noreferrer" className="text-sky-400 font-bold hover:text-primary">Send a message</a>
              </div>
            </div>
            <div className="flex items-center gap-6 ">
              <BsWhatsapp className="w-8 h-8 text-sky-400" />
              <div className="font-clashDisplay">
                <h3 className="font-medium">Whatsapp</h3>
                <h5>+8801798409071</h5><a href="https://web.whatsapp.com/send?phone+8801798409071" target="_blank" rel="noopener noreferrer" className="text-sky-400 font-bold hover:text-primary">Send a message</a>
              </div>
            </div>
          </div>

          {/* form part */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-[5] font-clashDisplay "
          >
            <div className="flex flex-col lg:flex-row gap-5 ">
              <div className="flex-1">
                <label className="font-medium" htmlFor="">
                  Name
                </label>
                <input
                  className="w-full mt-2 px-4 py-2 text-black bg-white font-redHatDisplay font-medium border border-transparent outline-none focus:border-primary rounded"
                  placeholder="Enter name..."
                  type="text"
                  name="from_name"
                  id=""
                  required
                />
              </div>

              <div className="flex-1">
                <label className="font-medium" htmlFor="">
                  Email
                </label>
                <input
                  className="w-full mt-2 px-4 py-2 text-black bg-white font-redHatDisplay font-medium border border-transparent outline-none focus:border-primary rounded"
                  placeholder="Enter email..."
                  type="email"
                  name="from_email"
                  id=""
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-full mt-5">
              <label className="font-medium" htmlFor="textAria">
                Message
              </label>
              <textarea
                name="message"
                id="textAria"
                cols="30"
                rows="6"
                className="w-full mt-2 px-3 py-2 text-black bg-white font-redHatDisplay font-medium border border-transparent outline-none focus:border-primary rounded cursor-text"
                placeholder="Enter message..."
                required
              ></textarea>
            </div>
            <div
              className="text-center mt-8"
              data-aos="flip-up"
              data-aos-duration="500"
            >
              <input
                className="btn btn-sm lg:h-10 px-10 bg-sky-400 hover:bg-primary text-white border-none rounded font-medium lg:text-lg"
                type="submit"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
