import { useEffect, useState } from "react";

import { Input } from "./components/Input/Input";
import { parseDate, sumDateTime } from "./utils/TimeUtils";

import "./App.css";

function App() {
  const [totalWorkHours, setTotalWorkHours] = useState<string>("");
  const [checkInTime, setCheckInTime] = useState<string>("");
  const [lunchTime, setLunchTime] = useState<string>("");
  const [checkoutTime, setCheckoutTime] = useState<Date>();

  useEffect(() => {
    const _totalWorkHours = localStorage.getItem("totalWorkHours");
    if (_totalWorkHours) {
      setTotalWorkHours(_totalWorkHours);
    }
  }, [totalWorkHours]);

  useEffect(() => {
    const _checkInTime = localStorage.getItem("checkInTime");
    if (_checkInTime) {
      setCheckInTime(_checkInTime);
    }
  }, [checkInTime]);

  useEffect(() => {
    const _lunchTime = localStorage.getItem("lunchTime");
    if (_lunchTime) {
      setLunchTime(_lunchTime);
    }
  }, [lunchTime]);

  function calculateTotalWorkHours(e: any) {
    e.preventDefault();
    const start = parseDate(checkInTime ? checkInTime : "00:00");
    const lunch = parseDate(lunchTime ? lunchTime : "00:00");
    const total = parseDate(totalWorkHours ? totalWorkHours : "00:00");

    setCheckoutTime(
      sumDateTime(start, lunch ? sumDateTime(total, lunch) : total)
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Work Hours Calculator</h1>        
        <p>Discover when your work day ends.</p>
      </header>
      <section>
        <form>
          <Input
            id="totalWorkHours"
            label="Total work hours"
            value={totalWorkHours}
            onChange={setTotalWorkHours}
          />
          <Input
            id="checkInTime"
            label="When have you started?"
            value={checkInTime}
            onChange={setCheckInTime}
          />
          <Input
            id="lunchTime"
            label="How long was your lunch / break?"
            value={lunchTime}
            onChange={setLunchTime}
          />

          <button type="submit" onClick={(e) => calculateTotalWorkHours(e)}>
            Calculate
          </button>
        </form>
        {checkoutTime && (
          <p>
            You may leave at{" "}
            <b>
              {checkoutTime.getHours()} hours and {checkoutTime.getMinutes()}{" "}
              minutes
            </b>
            .
          </p>
        )}
      </section>
      <footer>
        <p>
          Made by{" "}
          <a href="https://github.com/euaaron" target="_blank" rel="noopener">
            Aaron Carneiro
          </a>{" "}
          using React and TypeScript.
        </p>
      </footer>
    </div>
  );
}

export default App;
