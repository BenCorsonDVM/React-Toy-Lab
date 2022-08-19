import React, { useState } from "react";

function Palindrome() {
  const [userInput, setUserInput] = useState("");
  const [palindrome, setPalindrome] = useState("");

  const handleChange = (value) => setUserInput(value);

  const isPalindrome = () => {
    let forwards = userInput;
    let backwards = userInput;
    backwards = backwards.split("");
    backwards = backwards.reverse();
    backwards = backwards.join("");
    if (forwards === backwards) {
      setPalindrome("True");
    } else {
      setPalindrome("False");
    }
  };

  return (
    <div className="puzzleBox palindromePB">
      <h4>Palindrome</h4>
      <input
        className="inputLine"
        onChange={(e) => handleChange(e.target.value)}
      ></input>
      <button className="confirmationButton" onClick={() => isPalindrome(userInput)}>Check</button>
      <span className="resultsBox"> Palindrome: {palindrome} </span>
    </div>
  );
}

export default Palindrome;
