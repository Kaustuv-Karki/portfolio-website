import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles.css";

const Contact = () => {
  const form = useRef();
  const [statusClass, setStatusClass] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ns7s5qi", "template_2wy8cl6", form.current, {
        //service_sm6otgi service id
        publicKey: "ECI5pmU2z8rSE_Faq",
      })
      .then(
        () => {
          //   console.log("SUCCESS!");
          setStatusClass("Sent");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatusClass("Failed");
        }
      );
  };
  return (
    <div className="main__container">
      <form className="main__form" ref={form} onSubmit={sendEmail}>
        <div className="input__field">
          <label>Name</label>
          <input type="text" name="user_name" />
        </div>
        <div className="input__field">
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>
        <div className="input__field">
          <label>Message</label>
          <textarea name="message" rows={3} />
        </div>
        <input
          type="submit"
          disabled={statusClass ? true : false}
          className={`button ${statusClass ? statusClass : ""}`}
          value={statusClass ? statusClass : "Send"}
        />
      </form>
    </div>
  );
};

export default Contact;
