import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { trackType } from "../types/track";
import trackList from "../assets/trackList";

interface AudioState {
  currentTrack: trackType;
  isPlaying: boolean;
  audio: HTMLAudioElement;
}

const initialState: AudioState = {
  currentTrack: trackList[0],
  isPlaying: false,
  //так нельзя делать, ну да ладно
  audio: new Audio(),
};

export const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<trackType>) => {
      state.currentTrack = action.payload;
    },
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    handleToggleAudio: (state, action: PayloadAction<trackType>) => {
      const track = action.payload;
      //если включаем новый трек
      if (state.currentTrack.id !== track.id) {
        state.audio.src = track.src;
        state.audio.currentTime = 0;
        state.audio.play();
        state.isPlaying = true;
        state.currentTrack = track;
      } else {
        //если жмем play/pause на текущем треке
        if (state.isPlaying) {
          state.audio.pause();
          state.isPlaying = false;
        } else {
          state.audio.play();
          state.isPlaying = true;
        }
      }
    },
    setAudioTime: (state, action: PayloadAction<number>) => {
      state.audio.currentTime = action.payload;
    },
  },
});

export const { setCurrentTrack, setPlaying, handleToggleAudio, setAudioTime } =
  audioSlice.actions;

export default audioSlice.reducer;
