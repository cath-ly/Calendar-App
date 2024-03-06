import dayjs from "dayjs";

export default function getSmallCalendarDay(day, selectedDay) {
  const format = "DD-MM-YY";
  const presentDayJS = dayjs().format(format);
  const currentDay = day.format(format);
  const selectDay = selectedDay && selectedDay.format(format);
  if (presentDayJS === currentDay) {
    return "bg-blue-500 text-white rounded-full";
  } else if (selectDay === currentDay) {
    return "bg-blue-100 rounded-full text-blue-500 font-bold";
  }
  return "";
}
