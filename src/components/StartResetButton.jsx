import startIcon from "../assets/play-button.svg";
import resetIcon from "../assets/reset.svg";
import { useSelector, useDispatch } from "react-redux";
import { startChrono, resetTimer } from "../features/pomodoro";

export default function StartResetButton() {
  const startButtonStore = useSelector((store) => store.pomodoro);
  const dispatch = useDispatch();
  // console.log("startButtonStore", startButtonStore);
  function toggleTimer() {
    if (!startButtonStore.isPlaying) {
      dispatch(startChrono());
    } else {
      dispatch(resetTimer());
    }
  }
  return (
    <button
      onClick={toggleTimer}
      className=" flex items-center justify-center font-semibold bg-zinc-800 h-14  min-w-[140px] rounded-2xl border border-orange-900 hover:bg-zinc-950 gap-6"
    >
      <span className="block">
        {startButtonStore.isPlaying ? "Reset" : "Start"}
      </span>
      {startButtonStore.isPlaying ? (
        <img className=" h-5 w-5 " src={resetIcon} alt="" />
      ) : (
        <img className=" h-5 w-5 " src={startIcon} alt="" />
      )}
    </button>
  );
}
