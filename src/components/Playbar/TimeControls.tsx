//чтобы не ререндерить каждую секунду весь плейбар целиком

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Slider } from "@mui/material";

import { RootState } from "../../redux/store";
import secondsToMMSS from "../../utils/secondsToMMSS";
import { setAudioTime } from "../../redux/audioSlice";

//здесь только слайдер и время
const TimeControls = () => {
  const dispatch = useDispatch();
  const { audio, currentTrack } = useSelector(
    (state: RootState) => state.audio
  );

  const [currentTime, setCurrentTime] = useState(0);

  const formattedCurrentTime = secondsToMMSS(currentTime);
  const { duration } = currentTrack;

  const sliderCurrentTime = Math.round((currentTime / duration) * 100);

  //перемотка по слайдеру
  //вместо event пропуск, он не нужен
  const handleChangeCurrentTime = (_: Event, value: number | number[]) => {
    const time = Array.isArray(value) ? value[0] : value;
    const newTime = Math.round((time / 100) * duration);
    setCurrentTime(newTime);
    dispatch(setAudioTime(newTime));
  };

  //каждую секунду меняет текущее время
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(audio.currentTime);
    }, 1000);
    //удаляем таймер, чтобы не дублировались
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <>
      <p>{formattedCurrentTime}</p>
      <Slider
        step={1}
        min={0}
        max={100}
        value={sliderCurrentTime}
        onChange={handleChangeCurrentTime}
      />
    </>
  );
};

export default TimeControls;
