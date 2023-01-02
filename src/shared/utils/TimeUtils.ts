import { Time } from "../types/time";

export function sumDateTime(start: Date, end: Date) {
  const _calc = new Date();
  _calc.setHours(start.getHours() + end.getHours());
  _calc.setMinutes(start.getMinutes() + end.getMinutes());
  _calc.setSeconds(0);
  return _calc;
}

export function parseDate(time: Time) {
  const [hour, minute] = time.split(":");
  const _newDate = new Date();
  _newDate.setHours(Number(hour));
  _newDate.setMinutes(Number(minute));
  return _newDate;
}
