import { useEffect, useState } from "react";
import { Remember, TimePickerContainer, TimePickerInput } from "./TimePicker.style";

interface TimePickerProps {
  id: string;
  h: number;
  d: number;
  onChange: (e: string) => void;
}

export function TimePicker({ id, h, d, onChange }: TimePickerProps) {
  const [remember, setRemember] = useState(false);
  const [hour, setHour] = useState(h);
  const [minute, setMinute] = useState(d);

  useEffect(() => {
    setHour(h);
    setMinute(d);
  }, [h, d]);

  useEffect(() => {
    onChange(`${hour || 0}:${minute || 0}`);
  }, [hour, minute]);

  useEffect(() => {
    const _remember = localStorage.getItem(id);
    if (_remember) {
      setRemember(true);
    }
  }, [id, remember]);

  useEffect(() => {
    if (remember) {
      localStorage.setItem(id, `${hour || "00"}:${minute || "00"}`);
    }
  }, [hour, minute]);

  function toggleRemember(check: boolean) {
    setRemember(check);
    if (check) {
      localStorage.setItem(id, `${hour || "00"}:${minute || "00"}`);
    } else {
      localStorage.removeItem(id);
    }
  }

  function setValidValue(
    event: any,
    maxValue: number,
    update: (val: any) => void
  ) {
    let value = event.target.value;

    if (value as number > maxValue) value = maxValue;
    if (value as number < 0) value = "00";

    update(value);
  }

  return (
    <TimePickerContainer>
      <Remember htmlFor={`check_${id}`}>
        <input
          id={`check_${id}`}
          name={`check_${id}`}
          checked={remember}
          type="checkbox"
          title="Save for later"
          onChange={() => toggleRemember(!remember)}
        />
      </Remember>
      <TimePickerInput>
        <input
          id={`${id}_h`}
          title="Hour"
          type="number"          
          min={0}
          max={23}
          maxLength={2}
          value={hour}
          onChange={(e) => setValidValue(e, 23, setHour)}
        />
        <span>{hour > 1 ? "hours" : "hour"}</span>
        <input
          id={`${id}_m`}
          title="Minutes"
          type="number"
          min={0}
          max={59}
          maxLength={2}
          value={minute}
          onChange={(e) => setValidValue(e, 59, setMinute)}
        />
        <span>{hour > 1 ? "minutes" : "minute"}</span>
      </TimePickerInput>      
    </TimePickerContainer>
  );
}
