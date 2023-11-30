import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";

import { RootState } from "../../redux/store";
import { handleToggleAudio } from "../../redux/audioSlice";
import secondsToMMSS from "../../utils/secondsToMMSS";

import style from "./playbar.module.scss";
import TimeControls from "./TimeControls";

const Playbar = () => {
  const dispatch = useDispatch();
  const { currentTrack, isPlaying } = useSelector(
    (state: RootState) => state.audio
  );

  const { title, artists, preview, duration } = currentTrack;

  const formattedDuration = secondsToMMSS(duration);

  return (
    <div className={style.playbar}>
      <img className={style.preview} src={preview} alt="" />
      <IconButton onClick={() => dispatch(handleToggleAudio(currentTrack))}>
        {isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>
      <div className={style.credits}>
        <h4>{title}</h4>
        <p>{artists}</p>
      </div>
      <div className={style.slider}>
        <TimeControls />
        <p>{formattedDuration}</p>
      </div>
    </div>
  );
};

export default Playbar;
