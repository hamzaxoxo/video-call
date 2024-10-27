import { EllipsisVertical, MicOff, VideoIcon } from 'lucide-react';
import React from 'react';
import Webcam from 'react-webcam';

interface VideoProps {
    isAvailable: boolean;
    isAudioMuted: boolean;
}

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
};

const Video: React.FC<VideoProps> = ({ isAvailable, isAudioMuted }) => {
    return (
        <div className="relative bg-black w-full aspect-video rounded-lg overflow-hidden">
            {isAvailable ? (
                <>
                    {isAudioMuted && (
                        <MicOff className="absolute top-3 right-3 text-red-600 z-10" size={24} />
                    )}
                    <Webcam
                        audio={!isAudioMuted}
                        mirrored
                        videoConstraints={videoConstraints}
                        className="w-full h-full object-cover"
                        onUserMedia={() => console.log("Webcam started")}
                        onUserMediaError={(error) => console.error("Webcam error: ", error)}
                    />
                </>
            ) : (
                <div className="flex flex-col items-center justify-center h-full">
                    <EllipsisVertical className="absolute top-3 left-3 text-white" size={24} />
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                        alt="User Avatar"
                        className="w-20 h-20 rounded-full"
                    />
                    {isAudioMuted && (
                        <MicOff className="absolute top-3 right-3 text-red-600" size={24} />
                    )}
                    <VideoIcon className="absolute top-3 right-10 text-red-600" size={24} />
                </div>
            )}
        </div>
    );
};

export default Video;
