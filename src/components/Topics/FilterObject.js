import React, {useState} from 'react'

const FilterObject = () => {
    const [userInput, setUserInput] = useState('')
    const [filteredArray, setFilteredArray] = useState([])
    const [unFilteredArray, setUnFilteredArray] = useState([
        {name: "Ben", age: 27, hasPC: true}, 
        {name: "Rachel", age: 28, job: "tattoo artist"}, 
        {name: "Scott", age: 37, children: 1}
    ])

    const clickHandler = () => {
        let results = []
        unFilteredArray.map((person) => {
            person.hasOwnProperty(userInput) && results.push(person)
        })
        setFilteredArray(results)

    }

    return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">{JSON.stringify(unFilteredArray)}</span>
            <input className="inputLine" onChange={(e) => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={clickHandler}>Filter</button>
            <span className="resultsBox filterObjectRB">{JSON.stringify(filteredArray)}</span>
        </div>
  );
};

export default FilterObject;
