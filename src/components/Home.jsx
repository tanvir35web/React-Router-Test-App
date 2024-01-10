import React, { useState } from "react";
import OffDay from "./OffDay";
import WorkDay from "./WorkDay";

export default function Home() {

  const [resultDay, setResultDay] = useState();

  function currentMessage() {
    const day = new Date().getDay();

    if (day >= 1 && day <= 5) {
      setResultDay (<OffDay />);
    }
    setResultDay (<WorkDay />);
  }

  return (
    <>
      <h1 className="main-heading"> Hello, This is React Home Page </h1>
      <button onClick = {currentMessage}> Check Message </button>
      {resultDay}
    </>
  );
}
