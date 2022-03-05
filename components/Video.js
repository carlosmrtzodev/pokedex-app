const Video = () => {
  return (
    <video
      autoPlay
      muted
      loop
      className="fixed object-cover w-screen h-screen -z-50"
    >
      <source
        src="https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/sword-shield/pokemon-in-the-wild.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default Video;
