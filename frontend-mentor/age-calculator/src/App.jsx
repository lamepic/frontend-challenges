import { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [result, setResult] = useState({
    days: null,
    months: null,
    years: null,
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-off-white font-poppins">
      <div className="bg-white card">
        <Form setResult={setResult} />
        <div className="font-extrabold italic text-6xl space-y-2">
          <Result text="years" value={result.years} />
          <Result text="months" value={result.months} />
          <Result text="days" value={result.days} />
        </div>
      </div>
      <div className="attribution mt-5">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Richard Arthur</a>.
      </div>
    </div>
  );
}

export default App;
