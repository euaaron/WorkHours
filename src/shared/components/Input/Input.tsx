import { TimePicker } from "../TimePicker/TimePicker";

import { InputContainer } from "./Input.style";

interface InputProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  type?: "time" | "text";
  onChange: (e: string) => void;
}

export function Input({
  id,
  label,
  value,
  onChange
}: InputProps) {
  return (
    <InputContainer>
      <label htmlFor={`input_${id}`}>
        <small>{label}</small>
        <TimePicker
          id={id}
          h={Number.parseInt(value.split(":")[0])}
          d={Number.parseInt(value.split(":")[1])}
          onChange={onChange}
        />
      </label>
    </InputContainer>
  );
}
