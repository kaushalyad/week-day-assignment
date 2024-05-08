import React from "react";
import "./style.css";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { SiTicktick } from "react-icons/si";
import CustomModal from "../modal/CustomModal";
export const JobCard = ({ jobData }) => {
  return (
    <div className="job-card">
      <div>
        <div className="job-posted-date">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <GiSandsOfTime size="1.2rem" />
            <p style={{ marginLeft: "10px" }}>Posted 12 days ago</p>
          </div>
        </div>
      </div>
      <div className="job-type-location" style={{ marginTop: "30px" }}>
        <div className="company-logo-detail">
          <div className="company-logo">
            <img className="logo" src={jobData.logoUrl} alt="hi" />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <div>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "#4d4d4d",
                }}
              >
                {jobData.companyName
                  ? jobData.companyName
                  : "Company name not mentioned "}
              </p>
            </div>
            <div>
              <p style={{ fontSize: "20px" }}>{jobData.jobRole}</p>
            </div>
            <div>
              <p>{jobData.location ? jobData.location : "Not mentioned"}</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>{`Estimated Salary: ₹${
              jobData.minJdSalary ? jobData.minJdSalary : "Na"
            }- ${jobData.maxJdSalary ? jobData.maxJdSalary : "Na"} LPA`}</p>
            <div style={{ marginLeft: "14px" }}>
              <SiTicktick color="green" size="1.1rem" />
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div>
          <p style={{ fontSize: "20px", fontWeight: "500", marginTop: "13px" }}>
            About Company:
          </p>
        </div>
        <div>
          <p
            style={{ marginTop: "3px", fontSize: "16px", fontWeight: "bolder" }}
          >
            About us
          </p>
          <p style={{ color: "#595959" }}>{jobData.jobDetailsFromCompany}</p>
          <p style={{ fontSize: "17px", fontWeight: "700", marginTop: "10px" }}>
            Founder/Recruiter profiles:
          </p>
          <p style={{ color: "blue", marginTop: "5px" }}>Chirag Singh Toor</p>
          <div
            style={{
              minHeight: "100px",
              position: "absolute",
              width: "350px",
              marginTop: "-100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                opacity: 2,
              }}
              className="button-blur"
            >
              <button
                style={{
                  color: "blue",
                  border: "none",
                  backgroundColor: "aqua",
                  cursor: "pointer",
                  fontSize: "15px",
                  position: "absolute",
                }}
              >
                <CustomModal buttonName={"View job"}></CustomModal>
              </button>
            </div>
          </div>
          <div>
            <p
              style={{ fontSize: "20px", marginTop: "10px", color: "#808080" }}
            >
              Minimum Experience
            </p>
            <p style={{ marginTop: "5px" }}>{`${jobData.minExp} Years`}</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            className="easy-apply-button"
            style={{ textAlign: "center", width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
              }}
            >
              <AiFillThunderbolt style={{ color: "yellow" }} size={"1.3rem"} />
              <div
                style={{
                  fontSize: "19px",
                  marginLeft: "10px",
                  cursor: "pointer",
                  fontWeight: "550",
                }}
              >
                Easy Apply
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
