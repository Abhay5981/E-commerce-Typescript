import React, { useRef, useState } from 'react';

const Contact = () => {
  const userName = useRef<HTMLInputElement>(null);
  const [, setShow] = useState(false);

  const submitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const name = userName.current?.value;
    name === "" ? alert(`Please Fill Your Details Here`) : setShow(true);
  };

  return (
    <>
      <div className="contactContainer text-center mt-10 text-black px-4">
        <h2 className="mb-4 text-2xl font-bold">Feel Free to Contact Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7778.773215456857!2d77.62352509347119!3d12.882843858498306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14cc7694067d%3A0x825a1f41cb1e05d2!2sVishwapriya%20Layout!5e0!3m2!1sen!2sin!4v1723099090680!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-md"
        ></iframe>
        <div className="formContainer mt-8">
          <div className="contact-form mt-5">
            <form
              action="#"
              onSubmit={submitForm}
              method="POST"
              className="m-auto p-4 flex flex-col gap-4 w-full max-w-md"
            >
              <input
                ref={userName}
                className="border-2 border-gray-300 p-2 rounded-lg"
                type="text"
                name="username"
                placeholder="User Name"
                autoComplete="off"
                required
              />
              <input
                className="border-2 border-gray-300 p-2 rounded-lg"
                type="email"
                name="useremail"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <textarea
                className="border-2 border-gray-300 p-2 rounded-lg"
                name="message"
                cols={30}
                rows={6}
                placeholder="Your Message"
                autoComplete="off"
                required
              ></textarea>
              <input
                type="Submit"
                value="Send"
                className="border-2 rounded-lg p-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
