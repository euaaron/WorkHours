export function sumDateTime(start: Date, end: Date) {
  const _calc = new Date();
  _calc.setHours(start.getHours() + end.getHours());
  _calc.setMinutes(start.getMinutes() + end.getMinutes());
  _calc.setSeconds(0);
  return _calc;
}

export function parseDate(date: string) {
  const [hour, minute] = date.split(":");
  const _newDate = new Date();
  _newDate.setHours(Number(hour));
  _newDate.setMinutes(Number(minute));
  return _newDate;
}
