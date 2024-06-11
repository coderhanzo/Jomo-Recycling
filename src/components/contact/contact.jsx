import React from "react";
import "./contact.css";
import message from "../../assets/message.svg";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone-light.svg";
import location from "../../assets/location.svg";
import sub_arrow from "../../assets/arrow-right-solid.svg";
import ig from "../../assets/instagram.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5bba4d0f-23ec-4038-9e87-40bfec3582fb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        {/* <p></p> */}
        <h3>
          Send us a message
          <img src={message} alt="" />
        </h3>

        <p>
          For Further enquiries, please contact us using the channels provided.
        </p>
        <ul>
          <li>
            <img src={mail} alt="" />
            info@jomorecycle.com
          </li>
          <li>
            <a
              href="https://www.instagram.com/jomorecycle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <img src={ig} alt="" />
              @jomorecycle
            </a>
          </li>
          <li>
            <img src={phone} alt="" />
            +234 813 182 1768
          </li>
          <li>
            <img src={location} alt="" />
            No 26 Eyindi Street Odoragunshin Eredo Epe LCDA Lagos Nigeria{" "}
          </li>
        </ul>
      </div>
      <div className="contact-col">
        {/* <h3>
          Want to make an Enquire?
          <img src={message} alt="" />
        </h3> */}
        <form onSubmit={onSubmit}>
          <label>Your full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Email</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Email"
            required
          />
          <label>Write Your Message Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn" id="submit">
            Submit <img src={sub_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
