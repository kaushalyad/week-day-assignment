import React, { useState, useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { PiLineVerticalThin } from "react-icons/pi";

const MultiSelectBox = ({ label, data, stateFunction }) => {
  const [searchName, setSearchName] = useState("");
  const [selectedData, setSelectedData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [inputData, setInputData] = useState(data);
  const selectBoxRef = useRef(null);
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

  const removeFromSelectedData = (data) => {
    const updatedSelectedData = selectedData.filter(
      (item) => item._id !== data._id
    );
    setSelectedData(updatedSelectedData);
    setInputData((prevInputData) => [...prevInputData, data]);
    updatedSelectedData.length
      ? stateFunction(updatedSelectedData)
      : stateFunction(Role);
  };

  const addSelectedData = (data) => {
    const updatedInputData = inputData.filter((item) => item._id !== data._id);
    setInputData(updatedInputData);
    setSelectedData((prevSelectedData) => [...prevSelectedData, data]);
    stateFunction([...selectedData, data]);
    setVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectBoxRef.current &&
        !selectBoxRef.current.contains(event.target)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOptionsVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="select-box-container" ref={selectBoxRef}>
      <div className="select-box" onClick={toggleOptionsVisibility}>
        {/* Selected items */}
        <div className="selected-items">
          {selectedData.map((data) => (
            <div className="selected-item" key={data._id}>
              <div className="selected-item-info">
                <p className="selected-item-name">{data.option}</p>
                <button
                  className="remove-button"
                  onClick={() => removeFromSelectedData(data)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Search input */}
        <input
          className="search-input"
          placeholder={label}
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {selectedData.length ? (
            <button
              style={{
                border: "none",
                width: "25px",
                backgroundColor: "white",
              }}
              onClick={() => {
                setSelectedData([]);
                setInputData(data);
              }}
            >
              <RxCross1 />
            </button>
          ) : (
            ""
          )}
          <PiLineVerticalThin />
          {visible ? (
            <RiArrowDropDownLine size={"2.5rem"} />
          ) : (
            <RiArrowDropDownLine size={"2.5rem"} color="#666666" />
          )}
        </div>
      </div>
      {/* Selectable items */}
      <div style={{ minWidth: "100%", minHeight: "20px" }}>
        <div
          className="selectable-items"
          style={{ display: visible ? "block" : "none" }}
        >
          <div style={{ width: "100%" }}>
            {inputData.map((data) => (
              <div
                className="selectable-item"
                key={data._id}
                onClick={() => addSelectedData(data)}
              >
                <div className="selectable-item-info">
                  <p className="selectable-item-name">{data.option}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiSelectBox;
