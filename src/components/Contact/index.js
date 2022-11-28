import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-neutral-800 to-black w-full h-screen text-orange-200"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-orange-800">
            Contact
          </p>
          <p className="py-6">Submit the form and get in touch!</p>
        </div>
        <div>
          <form action="" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-orange-100 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              className="p-2 bg-transparent border-2 rounded-md text-orange-100 focus:outline-none my-4"
            />
            <textarea
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-orange-100 focus:outline-none"
            ></textarea>
            <button className="text-orange-100 bg-gradient-to-br from-slate-800 to-orange-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-500">
              Reach out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
