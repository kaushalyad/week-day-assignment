import React, { useEffect, useState, useRef } from "react";
import "./style.css"; // Import your CSS file
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { PiLineVerticalThin } from "react-icons/pi";

const SingleSelectBox = ({ label, data, stateFunction }) => {
  const [searchName, setSearchName] = useState(" ");
  const [selectedData, setSelectedData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [inputData, setInputData] = useState(data);
  const selectBoxRef = useRef(null);

  const removeFromSelectedData = (data) => {
    setInputData((inputData) => [...inputData, data]);
    const val = inputData;
    val.sort((a, b) => a._id - b._id);
    setInputData(val);
    let updatedSelectedData = selectedData.filter((el) => el._id !== data._id);
    setSelectedData(updatedSelectedData);
  };

  const addSelectedData = (data) => {
    stateFunction(data.option);
    setSelectedData((selectedData) => [data]);
    let updatedInputData = inputData.filter((val) => val._id !== data._id);
    setInputData(updatedInputData);

    setVisible(false);
  };

  useEffect(() => {
    // Effect code
  }, [searchName]);

  useEffect(() => {
    // Add event listener to detect clicks outside of the select box
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
              onClick={() => {
                setSelectedData([]);
              }}
              style={{
                border: "none",
                width: "25px",
                backgroundColor: "white",
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
            {data.map((data) => (
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

export default SingleSelectBox;
