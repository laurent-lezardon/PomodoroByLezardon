import Pause from "./components/Pause";
import Session from "./components/Session";
import Timer from "./components/Timer";
import StartResetButton from "./components/StartResetButton";

function App() {
  return (
    <div className="flex flex-col items-center px-4 py-8 max-w-lg border border-orange-500 bg-zinc-900 rounded mx-auto mt-12">
      <h1 className="text-2xl mb-8 rounded px-4 py-1 border-b  border-r">
        Pomodoro{" "}
        <span className="text-sm" style={{ color: "orangered" }}>
          By Lezardon
        </span>
      </h1>
      <div className="flex mb-8  ">
        <Session type="session" />
        <Session type="pause" />
      </div>
      <Timer />
      <StartResetButton />
    </div>
  );
}

export default App;
