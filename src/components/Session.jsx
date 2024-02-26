import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCounter } from "../features/pomodoro";

export default function Session({ type }) {
  const sessionStore = useSelector((store) => store.pomodoro[type]);
  console.log(type);
  // console.log("sessionStore", sessionStore);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center px-4 grow">
      <p className="text-center mb-2">{sessionStore.name}</p>
      <div className="flex justify-center rounded w-full border border-red-950">
        <button
          onClick={() => {
            dispatch(updateCounter({ type: type, amount: 1 }));
          }}
          className="flex items-center justify-center font-semibold bg-zinc-500 w-9 h-9 rounded-l  hover:bg-zinc-600 border-r border-orange-900"
        >
          +
        </button>
        <p className="flex items-center font-bold mx-0 text-orange-900 bg-orange-100  h-9 px-3 ">
          {sessionStore.value / 60}
        </p>
        <button
          onClick={() => {
            dispatch(updateCounter({ type: type, amount: -1 }));
          }}
          className="flex items-center justify-center font-semibold bg-zinc-500 w-9 h-9 rounded-r  hover:bg-zinc-600 border-l border-orange-900"
        >
          -
        </button>
      </div>
    </div>
  );
}
