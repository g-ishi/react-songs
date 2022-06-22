import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
    selectedSong: state.selectedSong,
  };
};

const SongList = ({ songs, selectedSong, selectSong }) => {
  console.log("selected song: ", selectedSong);
  const renderList = () => {
    return songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => {
                selectSong(song);
              }}
            >
              Select
            </button>
          </div>
          <div className="content"> {song.title}</div>
        </div>
      );
    });
  };

  return <div className="ui divided list">{renderList()}</div>;
};

export default connect(mapStateToProps, { selectSong })(SongList);
