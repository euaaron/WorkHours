import { useEffect, useState } from "react";

import { Time } from "@/shared/types/time";
import { parseDate, sumDateTime } from "@/shared/utils/TimeUtils";
import { Input } from "@/shared/components/Input/Input";

import PackageJson from "../../package.json";

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
    const hasTotal = totalWorkHours
      ? totalWorkHours.match(/([01]?[0-9]{1}|2[0-3]{1}):[0-5]{1}[0-9]{1}/)
      : false;
    const hasLunch = lunchTime
      ? lunchTime.match(/([01]?[0-9]{1}|2[0-3]{1}):[0-5]{1}[0-9]{1}/)
      : false;
    const start = parseDate(checkInTime ? checkInTime as Time : ("0:00"));
    const total = parseDate(hasTotal ? totalWorkHours as Time : "0:00");
    const lunch = parseDate(hasLunch ? lunchTime as Time : "0:00");

    setCheckoutTime(sumDateTime(start, sumDateTime(total, lunch)));
  }

  return (
    <div className="app">
      <small>Work Hours v{PackageJson.version}</small>
      <header className="header">
        <h1>Work Hours Calculator</h1>
        <p>Discover when your work day ends.</p>
      </header>
      <section>
        <form>          
          <Input
            id="totalWorkHours"
            type="text"
            label="Total work hours"
            placeholder="08:00"
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
            placeholder="01:00"
            type="text"
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
