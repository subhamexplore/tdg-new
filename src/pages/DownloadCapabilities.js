import React, {useState} from "react";
import "../assets/styles/DownloadCapabilities.css";
import file from "../assets/TDG Capability Statement v1.pdf";
import cu from "../assets/images/cu.webp";
import du from "../assets/images/du.webp";

const DownloadCapabilities = () => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.download = "TDG Capability Statement v1";

    link.href = file;

    link.click();
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://tdg-new-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (data.success) {
        alert("Form Successfully Submitted!");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      alert("Failed! Try again.");
    }
  };
  return (
    <div>
      <div className="contra-top industries">
        <div className="approach row" style={{ margin: "0" }}>
          <div
            className="approach-left col-lg-6 col-md-6"
            style={{
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={du}
              alt=""
            />
          </div>
          <div
            className="approach-right col-lg-6 col-md-6"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <h2
                className=""
                style={{ fontWeight: "700", fontSize: "2.3rem" }}
              >
                DOWNLOAD OUR
              </h2>
              <h2
                className=""
                style={{
                  fontWeight: "700",
                  fontSize: "2.3rem",
                  marginTop: "-12px",
                }}
              >
                CAPABILITY STATEMENT
              </h2>
              <button className="sl-inner-btn my-5" style={{fontSize:"1rem"}} onClick={handleClick}>Download</button>
            </div>
          </div>
        </div>
      </div>
      <div className="contra-line"></div>
      <div
        className="industries"
        style={{ backgroundColor: "", paddingBottom: "60px" }}
      >
        <div className="contact row" style={{ margin: "0" }}>
          <div className="left-cont col-lg-6 col-md-6">
            <h2 className="fw-bold">LET'S WORK TOGETHER</h2>
            <p className="" style={{ fontWeight: "" }}>
              Ready to optimize your programs and drive positive change? Contact
              us today to learn more about how our program governance and
              delivery services can help you achieve your goals.
            </p>
            <img
              className="mb-4"
              src={cu}
              alt=""
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </div>
          <form className="form col-lg-6 col-md-6" onSubmit={handleSubmit}>
            <label style={{ fontWeight: "600" }} htmlFor="">
              Name <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              className="in-text"
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <br />
            <label style={{ fontWeight: "600" }} htmlFor="">
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              className="in-text"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <br />
            <label style={{ fontWeight: "600" }} htmlFor="">
              Organization <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              className="in-text"
              type="text"
              placeholder=""
              name="organization"
              onChange={handleChange}
            />
            <br />
            <div style={{ fontWeight: "600", marginBottom: "-20px" }}>
              Area of interest
            </div>
            <br />
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <input type="radio" name="interest" onChange={handleChange} />
              <label htmlFor="" style={{ fontWeight: "500" }}>
                {" "}
                General Information
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <input type="radio" name="interest" onChange={handleChange} />
              <label htmlFor="" style={{ fontWeight: "500" }}>
                {" "}
                Partnership Opportunities
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <input type="radio" name="interest" onChange={handleChange} />
              <label htmlFor="" style={{ fontWeight: "500" }}>
                {" "}
                Careers
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <input type="radio" name="interest" onChange={handleChange} />
              <label htmlFor="" style={{ fontWeight: "500" }}>
                {" "}
                Others
              </label>
            </div>
            <label style={{ fontWeight: "600" }} htmlFor="">
              Message
            </label>
            <br />
            <textarea
              name="message"
              onChange={handleChange}
              placeholder="Message"
              id=""
              style={{ border: "1px solid #641097" }}
            ></textarea>
            <br />
            <button className="sl-inner-btn-form" id="bt-n">
              Submit
            </button>
          </form>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default DownloadCapabilities;
