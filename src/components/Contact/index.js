import React, { useState } from "react";
import { validateEmail, validateName } from "../../utils/helpers";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");
  function handleChange(e) {
    if (e.target.name === "name") {
      const isValid = validateName(e.target.value);
      if (!isValid) {
        setErrorMessage("Please enter a valid name");
      }
    } else if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Please enter a valid email.");
      } else {
        setErrorMessage("");
      }
    } else if (e.target.name === "message") {
      if (!e.target.value) {
        setErrorMessage("Message is required.");
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
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
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-orange-100 focus:outline-none"
              required
            />
            <input
              type="text"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
              placeholder="Enter your Email"
              className="p-2 bg-transparent border-2 rounded-md text-orange-100 focus:outline-none my-4"
              required
            />
            <textarea
              type="text"
              name="message"
              defaultValue={message}
              onBlur={handleChange}
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-orange-100 focus:outline-none"
              required
            />
            {errorMessage && (
              <div className="pb-6">
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button className="text-orange-100 bg-gradient-to-bl from-slate-800 to-orange-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-700">
              Reach out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
