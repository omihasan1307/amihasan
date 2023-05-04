import {
  faAngleRight,
  faEnvelope,
  faLocation,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4eetppq",
        "template_yvvio24",
        form.current,
        "user_zLDhXudZzPVJWbBTYCrkE"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="lg:px-32 mb-20" id="contact">
      <h1 className="text-5xl text-center font-bold pt-16">
        Frequently asked <br />{" "}
      </h1>
      <h1 className="special-color text-5xl text-center font-bold pt-3 mb-5">
        any questions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center mx-10 lg:ml-20 mt-10">
        <div
          className="grid-span-1 "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="mb-12 text-2xl">
            <p>
              Feel free to contact me. I am always open to discussing new
              projects, creative ideas, or opportunities to be a part of your
              vision
            </p>
            {/* <h1>Lets make something new</h1>
            <h1>different and more meaningful</h1>
            <h1>or make thing more visual</h1>
            <h1>
              or Conceptual ?
              <span className="text-purple-800 font-semibold">
                Just say HELLO!
              </span>{" "}
            </h1> */}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-purple-700 h-5 w-4"
              />{" "}
              <h1> 1420 Jalkuri bus stand, Siddhirganj, Narayanganj</h1>
            </div>
            <div className="flex items-center gap-3 my-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-purple-700 h-4 "
              />
              <h1> omihasan1307@gmail.com</h1>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhone} className="text-purple-700 h-4" />
              <h1> 01862404050</h1>
            </div>
          </div>
        </div>
        <div
          className="grid-span-1"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" w-full mt-8 lg:w-2/3 lg:ml-32 bg-bgblur rounded shadow-2xl px-10 py-16 "
          >
            <input
              type="text"
              name="name"
              className="w-full mx-auto my-2 py-2 border bg-bgblur border-t-0 border-x-0 
               border-b-purple-600 outline-none"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              className="w-full mx-auto my-2 py-2 bg-bgblur border border-t-0 border-x-0 
               border-b-purple-600 outline-none"
              placeholder="Mail Address"
              required
            />
            <input
              type="text"
              name="subject"
              className="w-full mx-auto my-2 py-2 bg-bgblur  border border-t-0 border-x-0 
              border-b-purple-600 outline-none "
              placeholder="Subject"
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              className="w-full mx-auto my-2 py-1 bg-bgblur  border border-t-0 border-x-0 
              border-b-purple-600 outline-none"
            ></textarea>

            <div className="flex justify-end mt-2">
              <button className="bg-btnColor  px-10 py-3 rounded text-white hover:scale-110 hover:bg-purple-600 duration-300 ">
                <input type="submit" value="Submit" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
