import { useState, useRef } from "react";
import { Play, Pause, Music } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} src="/music/song.mp3" />

      {/* Floating Button */}
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 p-6 bg-yellow-400 border-4 border-black shadow-[6px_6px_0px_black] rounded-full flex items-center justify-center transition-all hover:scale-110"
      >
        {isPlaying ? (
          <Pause size={32} className="text-black" />
        ) : (
          <Play size={32} className="text-black" />
        )}
      </button>
    </>
  );
}
