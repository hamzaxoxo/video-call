import React, { useState } from 'react';
import { AiOutlineAudio, AiOutlineAudioMuted } from 'react-icons/ai';
import { FaVideo, FaVideoSlash } from 'react-icons/fa';
import { MdCallEnd } from 'react-icons/md';
import Video from './Video';
import { Mic, MicOff } from 'lucide-react';

const VideoCall: React.FC = () => {
    const [isAudioMuted, setIsAudioMuted] = useState(false);
    const [isVideoOff, setIsVideoOff] = useState(false);

    const toggleAudio = () => {
        setIsAudioMuted(!isAudioMuted);
    };

    const toggleVideo = () => {
        setIsVideoOff(!isVideoOff);
    };

    return (
        <div className="flex flex-col h-screen bg-gradient-to-r from-gray-200 to-gray-300">
            <main className="flex flex-col gap-5 items-center justify-center p-4">
                <div className="flex justify-center gap-20 items-center p-5">
                    <Video
                        src="https://docs.material-tailwind.com/demo.mp4"
                        isAvailable={!isVideoOff}
                        isAudioMuted={isAudioMuted}
                    />
                </div>
                <div className="flex justify-around items-center p-2 gap-5">
                    <button
                        className={`flex items-center p-3 rounded-full shadow-md transition duration-200 transform focus:outline-none focus:ring ${isAudioMuted ? 'bg-red-500 hover:bg-red-700 text-white' : 'bg-gray-300 text-black'}`}
                        onClick={toggleAudio}
                    >
                        {isAudioMuted ? (
                            <MicOff className="text-xl" />
                        ) : (
                            <Mic className="text-xl" />
                        )}
                    </button>

                    <button
                        className={`flex items-center p-3 rounded-full shadow-md transition duration-200 transform focus:outline-none focus:ring ${isVideoOff ? 'bg-red-500 hover:bg-red-700 text-white' : 'bg-gray-300 text-black'}`}
                        onClick={toggleVideo}
                    >
                        {isVideoOff ? (
                            <FaVideoSlash className="text-xl" />
                        ) : (
                            <FaVideo className="text-xl" />
                        )}
                    </button>

                    <button className="flex items-center bg-red-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-red-600 transition duration-200 transform hover:scale-105 focus:outline-none focus:ring focus:ring-yellow-300">
                        <MdCallEnd className="text-xl" />
                    </button>
                </div>
            </main>
        </div>
    );
};

export default VideoCall;
