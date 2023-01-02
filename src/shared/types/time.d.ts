type D1 = 0|1;
type D3 = D1|2|3;
type D5 = D3|4|5;
type D9 = D5|6|7|8|9;

export type Hours = `${D9}` | `${D1}${D9}` | `2${D3}`;
export type Minutes = `${D5}${D9}`;
export type Time = `${Hours}:${Minutes}`;
