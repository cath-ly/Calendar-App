import dayjs from "dayjs"

export default function getCurrentDayClass(day){
    if (day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")){
        return "bg-blue-600 text-white rounded-full w-7"
    }
    return ""
}