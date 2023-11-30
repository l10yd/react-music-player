//вместо контекста используется redux

/*import { createContext, useState } from "react";
import trackList from "../assets/trackList";
import { trackType } from "../types/track";

const audio = new Audio();

export const AudioContext = createContext({});

const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(trackList[0]);
  const [isPlaying, setPlaying] = useState(false);

  //воспроизведение или пауза трека
  const handleToggleAudio = (track: trackType) => {
    //если выбран другой трек, запускаем его с 0
    if (currentTrack.id !== track.id) {
      setCurrentTrack(track);
      setPlaying(true);
      audio.src = track.src;
      audio.currentTime = 0;
      audio.play();
      return;
    }

    //если выбран тот же трек
    if (isPlaying) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  const value = { currentTrack, isPlaying, handleToggleAudio };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};

export default AudioProvider;*/
