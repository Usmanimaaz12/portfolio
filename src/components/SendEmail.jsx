import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SendEmail = () => {
  console.log(
    import.meta.env.VITE_PUBLIC_SERVICE_ID,
    import.meta.env.VITE_PUBLIC_TEMPLATE_ID,
    import.meta.env.VITE_PUBLIC_USER_KEY
  );
  const form = useRef();
  const [btnDisable, setBtnDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    if (
      form.current.user_name.value === "" ||
      form.current.user_email.value === "" ||
      form.current.message.value === ""
    ) {
      toast.warning("Please input fields first!");
      setLoading(false);
      return;
    }
    setBtnDisable(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_PUBLIC_SERVICE_ID,
        import.meta.env.VITE_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_USER_KEY,
        }
      )
      .then(
        () => {
          toast.success("Email sent successfully!", {
            position: "bottom-center",
          });
          form.current.reset();
          setTimeout(() => {
            setBtnDisable(false);
          }, 1000);
        },
        (error) => {
          toast.error("Failed to send email.", {
            position: "bottom-center",
          });
          console.log("FAILED...", error.text);
        }
      );
    setLoading(false);
  };

  return (
    <div>
      <ToastContainer
        theme="dark"
        position="bottom-left"
        className={"z-50"}
        autoClose={3000}
        style={{ fontSize: "0.8rem" }}
        // transition="slide"
        hideProgressBar
      />
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" flex flex-col md:w-full gap-1 text-[0.8rem]  rounded-md"
      >
        <label className="font-medium text-[0.7rem] text-gray-600">
          Your name
        </label>
        <input
          className="border p-2 bg-transparent border-gray-400 placeholder-gray-600 rounded-md focus:border-blue-300 cursor-pointer outline-none mb-2"
          type="text"
          name="user_name"
          placeholder="Ex. John Doe"
          required
        />
        <label className="font-medium text-[0.7rem] text-gray-600">Email</label>
        <input
          className="border p-2 bg-transparent border-gray-400 rounded-md placeholder-gray-600 focus:border-blue-300 cursor-pointer outline-none mb-2"
          type="email"
          name="user_email"
          placeholder="Ex. john.doe@gmail.com"
          required
        />
        <label className="font-medium text-[0.7rem] text-gray-600">
          Message
        </label>
        <textarea
          rows={4}
          className="border p-2 bg-transparent border-gray-400 rounded-md placeholder-gray-600 focus:border-blue-300 cursor-pointer outline-none mb-2"
          name="message"
          placeholder="Enter message here"
          required
          draggable="false"
          maxLength={500}
        />
        <button
          className={
            `border rounded-md p-2 bg-blue-600 text-white ` +
            `${btnDisable && "cursor-not-allowed !bg-blue-400"}`
          }
          type="submit"
          disabled={btnDisable}
          loading={loading}
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default SendEmail;
