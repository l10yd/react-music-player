import { ChangeEvent, useState } from "react";
import { Input } from "@mui/material";

import style from "./mainPage.module.scss";
import Track from "../components/Track/Track";
import trackList from "../assets/trackList";

//поиск треков по совпадению с введенным значением
const runSearch = (query: string) => {
  if (!query) {
    return trackList;
  }

  const lowerCaseQuery = query.toLowerCase();
  //по артисту или названию трека
  return trackList.filter(
    (track) =>
      track.title.toLowerCase().includes(lowerCaseQuery) ||
      track.artists.toLowerCase().includes(lowerCaseQuery)
  );
};

const MainPage = () => {
  const [tracks, setTracks] = useState(trackList);

  //обычный controlled input
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const foundTracks = runSearch(event.target.value);
    setTracks(foundTracks);
  };

  return (
    <div className={style.search}>
      <Input
        className={style.input}
        placeholder="Поиск треков"
        onChange={handleChange}
      />
      <div className={style.list}></div>

      {tracks.map((track) => (
        <Track key={track.id} {...track} />
      ))}
    </div>
  );
};
export default MainPage;
