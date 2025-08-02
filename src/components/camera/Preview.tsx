import { useVideoPlayer, VideoView, VideoSource } from "expo-video";

type PreviewProps = {
  source: VideoSource;
  play?: boolean;
};

export default function Preview({ source, play }: PreviewProps) {
  const player = useVideoPlayer(source, (player) => {
    play && player.play();
  });

  return (
    <VideoView
      style={{ flex: 1 }}
      player={player}
      allowsFullscreen
      nativeControls
    />
  );
}
