import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "No scrubs-A",
      duration: "4:05",
    },
    {
      title: "No scrubs-B",
      duration: "4:06",
    },
    {
      title: "No scrubs-C",
      duration: "4:07",
    },
    {
      title: "No scrubs-D",
      duration: "4:08",
    },
  ];
};

// 対象のアクションタイプのみ処理する。初回呼び出し時に備えて、stateにはデフォルト値を設定しておく。
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

// ここのキー名がstore内のデータの名前になる。
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
