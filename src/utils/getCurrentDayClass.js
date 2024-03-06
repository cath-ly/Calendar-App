import dayjs from "dayjs";

export default function getCurrentDayClass(day) {
  const format = "DD-MM-YY";
  const presentDayJS = dayjs().format(format);
  const currentDay = day.format(format);
  if (presentDayJS === currentDay) {
    return "bg-blue-600 text-white rounded-full w-7";
  }
  return "";
}
