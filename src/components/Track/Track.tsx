import { IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";

import style from "./track.module.scss";

import { trackType } from "../../types/track";
import secondsToMMSS from "../../utils/secondsToMMSS";

import { handleToggleAudio } from "../../redux/audioSlice";
import { RootState } from "../../redux/store";

const Track = (track: trackType) => {
  const dispatch = useDispatch();
  const { preview, title, artists, duration } = track;

  const { currentTrack, isPlaying } = useSelector(
    (state: RootState) => state.audio
  );

  const isCurrentTrack = currentTrack.id === track.id;

  const formattedDuration = secondsToMMSS(duration);

  return (
    <div className={cn(style.track, isCurrentTrack && style.playing)}>
      <IconButton onClick={() => dispatch(handleToggleAudio(track))}>
        {isCurrentTrack && isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img className={style.preview} src={preview} alt="" />
      <div className={style.credits}>
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p>{formattedDuration}</p>
    </div>
  );
};

export default Track;
