import React, { useEffect, useState, useCallback } from "react";
import SingleSelectBox from "../../components/singleSelectBox/SigleSelectBox";
import Input from "../../components/inputBox/Input";
import "./style.css";
import { JobCard } from "../../components/jobCards/JobCard";
import Spinner from "../../components/spinner/Spinner";
import NoJobFound from "../../components/noJobFound/NoJobFound";
import CustomModal from "../../components/modal/CustomModal";
import InfiniteScroll from "react-infinite-scroll-component";
import MultiSelectBox from "../../components/multiSelectBox/MultiSelectBox";
const Home = () => {
  const [searchName, setSearchName] = useState("");
  const [response, setResponse] = useState(404);
  const [jobData, setJobData] = useState([]);
  const [page, setPage] = useState(0);
  const [experience, setExperience] = useState(0);
  const [salary, setSalary] = useState("0L");
  const [totalCount, setTotalCount] = useState(0);
  const [role, setRole] = useState([
    { _id: 0, option: "Backend" },
    { _id: 1, option: "Frontend" },
    { _id: 2, option: "Fullstack" },
    { _id: 3, option: "IOS" },
    { _id: 4, option: "Flutter" },
    {
      _id: 5,
      option: "React Native",
    },
    {
      _id: 6,
      option: "Android",
    },
    {
      _id: 7,
      option: "Tech Lead",
    },
    {
      _id: 8,
      option: "Dev-Ops",
    },
    {
      _id: 9,
      option: "Data Engineer",
    },
    {
      _id: 10,
      option: "Data Science",
    },
    {
      _id: 11,
      option: "Computer-Vision",
    },
    {
      _id: 12,
      option: "Nlp",
    },
    {
      _id: 13,
      option: "Deep-Learning",
    },
    {
      _id: 14,
      option: "Test / QA",
    },
  ]);
  const [jobLocationType, setJobLocationType] = useState([
    {
      _id: 0,
      option: "Remote",
    },
    {
      _id: 1,
      option: "Hybrid",
    },
    {
      _id: 2,
      option: "In-Office",
    },
  ]);
  const [employeeSize, setEmployeeSize] = useState([
    { _id: 0, option: "1-10" },
    {
      _id: 1,
      option: "11-20",
    },
    {
      _id: 2,
      option: "21-50",
    },
    {
      _id: 3,
      option: "51-100",
    },
    {
      _id: 4,
      option: "101-200",
    },
    {
      _id: 5,
      option: "201-500",
    },
    {
      _id: 6,
      option: "500+",
    },
  ]);
  const Remote = [
    {
      _id: 0,
      option: "Remote",
    },
    {
      _id: 1,
      option: "Hybrid",
    },
    {
      _id: 2,
      option: "In-Office",
    },
  ];
  // console.log(salary);
  // console.log(experience);
  // console.log(role);
  // console.log(jobLocationType);
  // console.log(employeeSize);
  const Role = [
    { _id: 0, option: "Backend" },
    { _id: 1, option: "Frontend" },
    { _id: 2, option: "Fullstack" },
    { _id: 3, option: "IOS" },
    { _id: 4, option: "Flutter" },
    {
      _id: 5,
      option: "React Native",
    },
    {
      _id: 6,
      option: "Android",
    },
    {
      _id: 7,
      option: "Tech Lead",
    },
    {
      _id: 8,
      option: "Dev-Ops",
    },
    {
      _id: 9,
      option: "Data Engineer",
    },
    {
      _id: 10,
      option: "Data Science",
    },
    {
      _id: 11,
      option: "Computer-Vision",
    },
    {
      _id: 12,
      option: "Nlp",
    },
    {
      _id: 13,
      option: "Deep-Learning",
    },
    {
      _id: 14,
      option: "Test / QA",
    },
  ];
  const Salary = [
    {
      _id: 0,
      option: "0L",
    },
    {
      _id: 1,
      option: "10L",
    },
    {
      _id: 2,
      option: "20L",
    },
    {
      _id: 3,
      option: "30L",
    },
    {
      _id: 4,
      option: "40L",
    },
    {
      _id: 5,
      option: "50L",
    },
    {
      _id: 6,
      option: "60L",
    },
    {
      _id: 7,
      option: "70L",
    },
    {
      _id: 8,
      option: "80L",
    },
    {
      _id: 9,
      option: "90L",
    },
    {
      _id: 10,
      option: "100L",
    },
  ];
  const Experience = [
    { _id: 0, option: 1 },
    {
      _id: 1,
      option: 2,
    },
    {
      _id: 2,
      option: 3,
    },
    {
      _id: 3,
      option: 4,
    },
    {
      _id: 4,
      option: 5,
    },
    {
      _id: 5,
      option: 6,
    },
    {
      _id: 6,
      option: 7,
    },
    {
      _id: 7,
      option: 8,
    },
    {
      _id: 8,
      option: 9,
    },
    {
      _id: 9,
      option: 10,
    },
  ];
  const EmployeeSize = [
    { _id: 0, option: "1-10" },
    {
      _id: 1,
      option: "11-20",
    },
    {
      _id: 2,
      option: "21-50",
    },
    {
      _id: 3,
      option: "51-100",
    },
    {
      _id: 4,
      option: "101-200",
    },
    {
      _id: 5,
      option: "201-500",
    },
    {
      _id: 6,
      option: "500+",
    },
  ];

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const body = JSON.stringify({
    limit: 10,
    offset: `${10 + page - 1}`,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  const fetchData = () => {
    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          setPage(page + 1);
          setResponse(response);
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setTotalCount(result.totalCount);
        console.log(result.totalCount);
        setJobData([...jobData, ...result.jdList]); // Set totalJobData first
      })
      .catch((error) => console.error("Error fetching data:", error)); // Proper error handling
  };

  // Update only when totalJobData changes
  useEffect(() => {}, [searchName]);

  useEffect(() => {
    fetchData();
  }, []); // Fetch initial data only once

  const isRoleMatching = (job) => {
    let check = false;
    role.map((val) => {
      if (
        val["option"].toLocaleLowerCase() === job["jobRole"].toLocaleLowerCase()
      ) {
        check = true;
      }
    });
    return check;
  };
  const isJobLocationMatching = (job) => {
    role.map((val) => {
      // api data not giving any information about whether job is remote or on-site
    });

    return true;
  };

  const isEmployeeSizeMatching = (job) => {
    // this is also same not giving any information what is the size of the company
    return true;
  };

  return (
    <>
      <div className="job-search-main">
        <div className="filterHeaderStyle">
          <div>
            <MultiSelectBox
              label={"Role"}
              data={Role}
              stateFunction={setRole}
            />
          </div>
          <div>
            <MultiSelectBox
              label={"Number Of Employees"}
              data={EmployeeSize}
              stateFunction={setEmployeeSize}
            />
          </div>
          <div>
            <SingleSelectBox
              label={"Experience"}
              data={Experience}
              stateFunction={setExperience}
            />
          </div>
          <div>
            <MultiSelectBox
              label={"Remote"}
              data={Remote}
              stateFunction={setJobLocationType}
            />
          </div>
          <div>
            <SingleSelectBox
              label={"Minimum Base Pay Salary"}
              data={Salary}
              stateFunction={setSalary}
            />
          </div>
          <div>
            <input
              placeholder={"Search Company Name"}
              style={{
                minHeight: "50px",
                minWidth: "250px",
                borderRadius: "7px",
                paddingLeft: "10px",
                fontSize: "17px",
              }}
              onChange={(e) => {
                setSearchName(e.target.value);
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {response.status !== 200 ? (
            <div className="loading-spinner" style={{ marginTop: "100px" }}>
              <Spinner />
            </div>
          ) : jobData.length > 0 ? (
            <div className="main-body">
              <InfiniteScroll
                dataLength={jobData.length}
                next={fetchData}
                hasMore={totalCount !== jobData.length}
                loader={<Spinner />}
                endMessage={<p>No more items to load</p>}
              >
                {jobData.map((job) => {
                  const sal = salary.slice(0, salary.length - 1);
                  console.log(job["companyName"].includes(searchName));
                  if (
                    job["companyName"]
                      .toLocaleLowerCase()
                      .includes(searchName.toLocaleLowerCase()) &&
                    job["minExp"] >= experience &&
                    job["minJdSalary"] >= sal &&
                    isRoleMatching(job) === true &&
                    isJobLocationMatching(job) === true &&
                    isEmployeeSizeMatching(job) === true
                  ) {
                    return <JobCard jobData={job} />;
                  }
                })}
              </InfiniteScroll>
            </div>
          ) : (
            <NoJobFound />
          )}
        </div>
      </div>
      <CustomModal />
    </>
  );
};

export default Home;
