import React, { useState } from "react";
import OffDay from "./OffDay";
import WorkDay from "./WorkDay";

export default function Home() {
  const [resultDay, setResultDay] = useState();

  function currentMessage() {
    const day = new Date().getDay();

    console.log(day);

    if (day >= 1 && day <= 5) {
      setResultDay(<WorkDay />);
    } else {
      setResultDay(<OffDay />);
    }
  }

  return (
    <div>
      <h1 className="main-heading"> Hello, This is React Home Page </h1>
      <button onClick={currentMessage}> Check Message </button>
      {resultDay}
    </div>
  );
}
