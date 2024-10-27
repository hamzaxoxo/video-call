import { Mic, MicOff } from 'lucide-react';
import { FaVideo, FaVideoSlash } from 'react-icons/fa';
import { MdCallEnd } from 'react-icons/md';
import Video from '../Video';
import { useState } from 'react';

export default function VideoCall() {
    const [isAudioMuted, setIsAudioMuted] = useState(false);
    const [isVideoOff, setIsVideoOff] = useState(false);

    const toggleAudio = () => setIsAudioMuted(!isAudioMuted);
    const toggleVideo = () => setIsVideoOff(!isVideoOff);
    return (
        <div className="relative h-screen bg-[#273037] flex flex-col justify-center">
            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-5">
                {[...Array(2)].map((_, index) => (
                    <Video
                        key={index}
                        isAvailable={!isVideoOff}
                        isAudioMuted={isAudioMuted}
                    />
                ))}
            </main>

            {/* Floating Control Bar */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 p-3 rounded-full flex gap-5">
                <button
                    className={`p-3 rounded-full shadow-md transition focus:outline-none ${isAudioMuted
                        ? 'bg-red-500 hover:bg-red-700 text-white'
                        : 'bg-gray-300 hover:bg-gray-400 text-black'
                        }`}
                    onClick={toggleAudio}
                >
                    {isAudioMuted ? <MicOff className="text-xl" /> : <Mic className="text-xl" />}
                </button>

                <button
                    className={`p-3 rounded-full shadow-md transition focus:outline-none ${isVideoOff
                        ? 'bg-red-500 hover:bg-red-700 text-white'
                        : 'bg-gray-300 hover:bg-gray-400 text-black'
                        }`}
                    onClick={toggleVideo}
                >
                    {isVideoOff ? <FaVideoSlash className="text-xl" /> : <FaVideo className="text-xl" />}
                </button>

                <button className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md transition transform hover:scale-105 focus:outline-none">
                    <MdCallEnd className="text-xl" />
                </button>
            </div>
        </div>
    )
}
