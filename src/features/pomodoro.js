import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: {
    name: "Sessions",
    value: 1500,
  },
  pause: {
    name: "Pauses",
    value: 300,
  },
  isPlaying: false,
  intervalID: undefined,

  timer: {
    work: true,
    value: 1500,
    cycles: 0,
  },
};

export const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    updateCounter: (state, action) => {
      const actionType = action.payload.type;
      // les compteurs pause et session ne peuvent pas descendre sous la minute
      if (state[actionType].value > 60) {
        state[actionType].value += action.payload.amount * 60;
        // La modification du compteur session modifie le timer si celui ci n'est pas démarré
        if (!state.isPlaying && actionType === "session") {
          state.timer.value += action.payload.amount * 60;
        }
      }
    },
    tick: (state, action) => {
      if (state.timer.value === 0) {
        console.log("changing !!!");
        if (state.timer.work) {
          state.timer.value = state.pause.value;
        } else {
          state.timer.value = state.session.value;
          state.timer.cycles++;
        }
        state.timer.work = !state.timer.work;
      } else {
        state.timer.value--;
      }
    },
    startTimer: (state, action) => {
      state.intervalID = action.payload;
      state.isPlaying = true;
    },
    resetTimer: (state, action) => {
      window.clearInterval(state.intervalID);
      state.isPlaying = false;
      state.timer.value = state.session.value;
    },
  },
});

// console.log(pomodoroSlice);

export function startChrono(action) {
  return function (dispatch, getState) {
    const intervalID = setInterval(() => {
      dispatch(tick());
    }, 1000);
    dispatch(startTimer(intervalID));
    // simulation decrementation du timer dès l'appui sur le start :
    dispatch(tick());
  };
}
export const { updateCounter, resetTimer, tick, startTimer } =
  pomodoroSlice.actions;
export default pomodoroSlice.reducer;
