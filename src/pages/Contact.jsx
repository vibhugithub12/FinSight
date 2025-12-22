import emailjs from "@emailjs/browser";
import { useEffect, useRef } from "react";

const Contact = () => {
  const form = useRef();
  const timerRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail_service", "contact_template", form.current, {
        publicKey: "lA5DQluUn5XgBOdN",
      },
          document.getElementById("sendEmail").textContent = "Sending..."
    )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          document.getElementById("sendEmail").textContent = "Sent ✅";
          document.getElementById("sendEmail").style.backgroundColor =
            "#54C567";
            if(timerRef.current){
              clearTimeout(timerRef.current);
            }
          timerRef.current = setTimeout(() => {
            document.getElementById("sendEmail").textContent = "Send";
            document.getElementById("sendEmail").style.backgroundColor =
              "var(--color-primary)";
          }, 1500);
        },
        (error) => {
          console.log("FAILED...", error.text);
          document.getElementById("sendEmail").textContent = "Server Error, try later!";
          document.getElementById("sendEmail").style.backgroundColor =
            "#AE130D";
             if(timerRef.current){
              clearTimeout(timerRef.current);
            }
          timerRef.current = setTimeout(() => {
            document.getElementById("sendEmail").textContent = "Send";
            document.getElementById("sendEmail").style.backgroundColor =
              "var(--color-primary)";
          }, 1500);
        }
      );
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  },[]);
  return (
    <div className="flex flex-col gap-8 p-4 bg-background-light flex-1">
      <h2 className="text-xl text-center md:text-3xl text-primary font-semibold">
        Facing any issues or have any suggestions?
      </h2>
      <form
        className="flex flex-col rounded-sm self-center items-end px-4 md:px-8 py-6 md:py-12 gap-4 bg-primary-light text-gray-500"
        ref={form}
        onSubmit={sendEmail}
      >
        <h2 className="self-center text-xl md:text-2xl font-semibold text-black/50">
          Contact Us
        </h2>
        <div className="flex md:gap-x-8 md:items-end justify-between w-full">
          <label className="text-lg" htmlFor="user_name">Name</label>
          <input
            className="outline text-black md:text-base px-2 py-1  w-2/3"
            maxLength={30}
            type="text"
            name="user_name"
            id="user_name"
          />
        </div>

        <div className="flex gap-x-8 md:items-end justify-between w-full">
          <label className="text-lg" htmlFor="user_email">Email</label>
          <input
            className="outline text-sm text-black md:text-base font-thin px-2 py-1 w-2/3"
            maxLength={50}
            type="email"
            name="user_email"
            id="user_email"
          />
        </div>

        <div className="flex gap-x-8 md:items-end justify-between w-full">
          <label className="text-lg" htmlFor="title">Title</label>
          <input
            className="outline text-sm text-black md:text-base px-2 py-1 w-2/3"
            maxLength={40}
            type="text"
            name="title"
            id="title"
          />
        </div>

        <div className="flex gap-x-8 md:items-end justify-around w-full ">
          <label className="text-lg" htmlFor="message">Message</label>
          <textarea
            className="outline overflow-y-scroll text-sm text-black md:text-xs px-2 py-1 md:w-52"
            maxLength={200}
            name="message"
            id="message"
          />
        </div>

        <button
          id="sendEmail"
          className="bg-primary self-center text-white text-lg md:text-lg px-3 py-1 md:px-3 md:py-1 active:bg-black active:scale-95 hover:cursor-pointer hover:scale-110 hover:rounded-2xl transition-all duration-500 ease-in-out "
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
