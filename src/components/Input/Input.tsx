import { useEffect, useState } from "react";

import style from "./Input.module.css";

interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: string) => void;
}

export function Input({ id, label, value, onChange }: InputProps) {
  const [remember, setRemember] = useState(false);
  
  useEffect(() => {
    const _remember = localStorage.getItem(id);
    if (_remember) {
      setRemember(true);
    }
  }, [id, remember]);

  useEffect(() => {
    if (remember) {
      localStorage.setItem(id, value);
    }    
  }, [value]);

  function toggleRemember(check: boolean) {
    setRemember(check);
    if (check) {
      localStorage.setItem(id, value);
    } else {
      localStorage.removeItem(id);
    }
  }

  return (
    <span className={style.container}>
      <label className={style.label} htmlFor={`input_${id}`}>
        <small>{label}</small>
        <input
          type="time"
          id={`input_${id}`}
          name={`input_${id}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
      <label className={style.check} htmlFor={`check_${id}`}>
        <small>Remember?</small>
        <input
          type="checkbox"
          name={`check_${id}`}
          id={`check_${id}`}
          checked={remember}          
          onChange={() => toggleRemember(!remember)}
        />
      </label>
    </span>
  );
}
