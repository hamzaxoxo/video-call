import { EllipsisVertical, MicOff, VideoIcon } from 'lucide-react';
import React from 'react';

interface VideoProps {
    src: string;
    isAvailable: boolean;
    isAudioMuted: boolean;
}

const Video: React.FC<VideoProps> = ({ src, isAvailable, isAudioMuted }) => {
    return (
        <div className="relative rounded-2xl w-[35rem] h-96 bg-black overflow-hidden">
            {isAvailable ? (
                <>
                    {isAudioMuted && (
                        <MicOff className="absolute top-5 right-5 text-white" size={20} />
                    )}
                    <video className="w-full h-full object-cover" autoPlay muted>
                        <source src={src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                </>
            ) : (
                <div className="flex flex-col items-center justify-center h-full">
                    <EllipsisVertical className='absolute top-5 left-3 text-white' size={20} />
                    <img
                        src="https://w7.pngwing.com/pngs/490/157/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png"
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full mb-2"
                    />
                    {isAudioMuted && (
                        <MicOff className="absolute top-5 right-5 text-white" size={20} />
                    )}
                    {!isAvailable && (
                        <VideoIcon className="absolute top-5 right-12 text-white" size={20} />
                    )}
                </div>
            )}
        </div>
    );
};

export default Video;
