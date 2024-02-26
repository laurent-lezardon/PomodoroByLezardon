import { useSelector } from "react-redux";
import getPomodoroFormatedTime from "../utils/getFormatedHour";

export default function Timer() {
  const timerStore = useSelector((store) => store.pomodoro.timer);
  console.log("timerStore", timerStore);
  return (
    <div className="flex flex-col items-center mb-8">
      <p
        className={`mb-2 text-2xl font-bold ${
          timerStore.work ? "text-[#FF4500]" : "text-[#0F0]"
        }`}
      >
        {timerStore.work ? "Work Time" : "Rest Time"}
      </p>
      <div className="text-4xl mb-1 text-orange-900 bg-orange-100 rounded border border-orange-900 px-16 py-3 ">
        {getPomodoroFormatedTime(timerStore.value)}
      </div>
      <p className="text-sm">Passed cycle(s) : {timerStore.cycles}</p>
    </div>
  );
}
