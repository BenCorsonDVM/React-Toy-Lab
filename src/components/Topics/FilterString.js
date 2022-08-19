import React, { useState } from "react";

const FilterString = () => {
  const [userInput, setUserInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);
  const [unfilteredArray, setUnfilteredArray] = useState([
    "Brady",
    "Andrew",
    "Cameron",
    "Katie",
    "Michelle",
    "Jessica",
    "Athena",
    "Chalon",
  ]);

  const clickHandler = () => {
    let results = [];
    unfilteredArray.map((person) => {
      person.includes(userInput) && results.push(person);
    });
    setFilteredArray(results);
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <span className="puzzleText">
        Names: {JSON.stringify(unfilteredArray)}
      </span>
      <input
        className="inputLine"
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
      <button className="confirmationButton" onClick={clickHandler}>
        Filter
      </button>
      <span className="resultsBox filterStringRB">
        {JSON.stringify(filteredArray)}
      </span>
    </div>
  );
};

export default FilterString;
