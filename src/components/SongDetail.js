import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>select Song.</div>;
  }

  const { title, duration } = song;
  return (
    <div>
      {title}
      {duration}
    </div>
  );
};

const mapStateToProps = ({ selectedSong }) => {
  return {
    song: selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
