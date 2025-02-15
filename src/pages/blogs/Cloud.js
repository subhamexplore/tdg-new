import React, { useState } from "react";
import "./Devops.css";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  MailruShareButton,
} from "react-share";

const Cloud = () => {
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
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Failed! Try again.");
    }
  };
  const shareUrl = window.location.href;
  return (
    <div className="industries">
      <div
        className="blog-top"
        style={{
          backgroundImage: `url("https://i0.wp.com/www.thediallogroupllc.com/wp-content/uploads/2024/12/untitled-92.png?resize=1024%2C683")`,
        }}
      >
        <div className="blog-top-text">
          Cloud Computing: A Lifeline for Federal Public Health in Disaster
          Recovery
        </div>
      </div>
      <div className="main-text row" style={{ margin: "0" }}>
        <div className="left-text col-lg-8 col-md-7">
          <p>
            In today’s world of frequent natural disasters and global health
            emergencies, federal public health agencies face unprecedented
            challenges. Cloud computing offers a robust solution to bolster
            their resilience. By harnessing the power of the cloud, these
            agencies can safeguard vital data, maintain uninterrupted
            operations, and expedite response efforts during crises.
          </p>
          <h5 className="fw-bold mb-3">
            Why Cloud Computing Matters for Federal Public Health
          </h5>
          <ol className="custom-list">
            <li className="custom-list-in">
              Enhanced Data Security and Disaster Recovery:
              <ul>
                <li>
                  <span className="fw-bold">Data Redundancy and Backup:</span>{" "}
                  Cloud platforms offer robust data redundancy and backup
                  capabilities, minimizing the risk of data loss due to natural
                  disasters or cyberattacks.
                </li>
                <li>
                  <span className="fw-bold">Rapid Data Recovery:</span> In the
                  event of a disaster, cloud-based systems enable swift data
                  recovery, allowing agencies to resume operations and
                  decision-making processes without significant disruptions.
                </li>
              </ul>
            </li>
            <br />
            <li className="custom-list-in">
              Scalability and Flexibility:
              <ul>
                <li>
                  <span className="fw-bold">
                    Adapting to Fluctuating Demands:
                  </span>{" "}
                  Cloud computing empowers public health agencies to scale their
                  infrastructure up or down as needed, accommodating sudden
                  spikes in workload during emergencies.
                </li>
                <li>
                  <span className="fw-bold">Agile Response:</span> By rapidly
                  deploying additional resources, agencies can quickly respond
                  to evolving situations, such as disease outbreaks or natural
                  disasters.
                </li>
              </ul>
            </li>
            <br />
            <li className="custom-list-in">
              Improved Collaboration and Information Sharing:
              <ul>
                <li>
                  <span className="fw-bold">Real-time Collaboration:</span>{" "}
                  Cloud-based collaboration tools facilitate seamless
                  communication and information sharing among diverse teams,
                  even in remote locations.
                </li>
                <li>
                  <span className="fw-bold">Data-Driven Decision Making:</span>{" "}
                  By consolidating data from various sources, agencies can gain
                  valuable insights and make informed decisions to mitigate
                  health risks.
                </li>
              </ul>
            </li>
            <br />
            <li className="custom-list-in">
              Cost-Effective Solutions:
              <ul>
                <li>
                  <span className="fw-bold">
                    Optimized Resource Utilization:
                  </span>{" "}
                  Cloud-based solutions eliminate the need for significant
                  upfront investments in hardware and infrastructure, reducing
                  costs.
                </li>
                <li>
                  <span className="fw-bold">Pay-as-You-Go Model:</span> The
                  pay-as-you-go model allows agencies to only pay for the
                  resources they consume, optimizing budget allocation.
                </li>
              </ul>
            </li>
            <br />
          </ol>
          <h5 className="fw-bold mb-3">Real-World Applications</h5>
          <ul className="custom-list">
            <li className="">
              <span className="fw-bold">Cultural Transformation:</span>{" "}
              Cloud-based systems can enable rapid deployment of emergency
              response teams, facilitate the distribution of essential supplies,
              and track the spread of infectious diseases.
            </li>
            <br />
            <li className="">
              <span className="fw-bold">Health Information Exchange:</span>{" "}
              Secure cloud platforms can enable the seamless exchange of patient
              health information among healthcare providers, improving care
              coordination and patient outcomes.
            </li>
            <br />
            <li className="">
              <span className="fw-bold">Public Health Surveillance:</span>{" "}
              Cloud-based analytics tools can help identify emerging health
              threats, monitor disease trends, and predict potential outbreaks.
            </li>
            <br />
          </ul>
          <h5 className="fw-bold mb-3">Conclusion</h5>
          <p>
            By embracing cloud computing, federal public health agencies can
            significantly enhance their resilience and effectiveness in the face
            of disasters. By leveraging the power of the cloud, these agencies
            can safeguard critical data, accelerate response times, and
            ultimately protect public health.
          </p>
          <p>
            Interested in learning more about how our cloud computing solutions
            can help with your disaster recovery efforts? Contact us today.
          </p>
        </div>
        <div className="right-text col-lg-4 col-md-5">
          <div className="scoop-bottom sticky">
            <div
              className="scoop-form"
              style={{ padding: "30px 30px 50px 30px", textAlign: "start" }}
            >
              <h4 style={{ fontWeight: "600" }}>Send Us A Message</h4>
              <p style={{ marginTop: "0", fontSize: "0.8rem" }}>
                Let us know what you think
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  style={{ padding: "10px 15px", fontSize: "0.75rem" }}
                />
                <br />
                <input
                  className="my-3"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  style={{ padding: "10px 15px", fontSize: "0.75rem" }}
                />
                <br />
                <textarea
                  name="message"
                  placeholder="Message"
                  id=""
                  onChange={handleChange}
                  style={{ padding: "10px 15px", fontSize: "0.75rem" }}
                ></textarea>
                <button>Send</button>
              </form>
            </div>
            <div>
              <p
                className="mt-5 mb-4"
                style={{ color: "grey", fontSize: "0.85rem" }}
              >
                Share this post
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div className="logo-cir">
                  <FacebookShareButton url={shareUrl}>
                    <FaFacebook />
                  </FacebookShareButton>
                </div>
                <div className="logo-cir">
                  <LinkedinShareButton url={shareUrl}>
                    <IoLogoLinkedin />
                  </LinkedinShareButton>
                </div>
                <div className="logo-cir">
                  <TwitterShareButton url={shareUrl}>
                    <FaXTwitter />
                  </TwitterShareButton>
                </div>
                <a href="" className="logo-cir">
                  <IoMdMail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
