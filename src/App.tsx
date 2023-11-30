import style from "./global.module.scss";

import MainPage from "./pages/MainPage";
import Playbar from "./components/Playbar/Playbar";

const App = () => {
  return (
    <>
      <div className={style.wrapper}>
        <MainPage />
        <Playbar />
      </div>
    </>
  );
};

export default App;
