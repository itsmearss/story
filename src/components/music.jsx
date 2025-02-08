import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!hasStarted) {
      setHasStarted(true); // Menyembunyikan overlay setelah pertama kali play
    }
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
      <audio ref={audioRef} src="/musics/lagunikah.mp3" loop />

      {/* Overlay Play Button (Hanya muncul sebelum pertama kali dimainkan) */}
      {!hasStarted && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <button
            onClick={togglePlay}
            className="px-6 py-3 text-lg font-bold text-black bg-yellow-400 border-4 border-black shadow-[6px_6px_0px_black] rounded-lg hover:scale-110 transition-all"
          >
            🎵 Putar Musik
          </button>
        </div>
      )}

      {/* Floating Button Play/Pause */}
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
