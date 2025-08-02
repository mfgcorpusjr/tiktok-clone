import { useVideoPlayer, VideoView, VideoSource } from "expo-video";

type PreviewProps = {
  source: VideoSource;
};

export default function Preview({ source }: PreviewProps) {
  const player = useVideoPlayer(source, (player) => {
    player.play();
  });

  return (
    <VideoView
      style={{ flex: 1 }}
      player={player}
      contentFit="cover"
      allowsFullscreen
      nativeControls
    />
  );
}
