import { Video } from 'lucide-react';
import { useContext, useState } from 'react';
import { RoomContext } from '../context/RoomContext';

export default function Home() {
    const { ws } = useContext(RoomContext);

    const joinRoom = () => {
        ws.emit('create-room');
    }

    const [meetingCode, setMeetingCode] = useState('');


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="max-w-xl p-8 bg-white shadow-md rounded-md">
                <h1 className="text-3xl tracking-wider font-extrabold text-center">
                    Welcome to VideoMeet 🚀
                </h1>
                <p className="text-sm py-4">
                    VideoMeet is a free, open-source video conferencing platform that allows you
                    to create and join video meetings with your friends, family, and colleagues.
                </p>

                <div className="flex sm:flex-row flex-col justify-between gap-2">
                    {/* Create Meeting Button */}
                    <button
                        className="flex justify-center gap-2 py-3 px-6 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                        onClick={() => {
                            joinRoom();
                        }}
                    >
                        <Video /> New meeting
                    </button>

                    <div className="flex flex-1 space-x-2">
                        <input
                            type="text"
                            value={meetingCode}
                            onChange={(e) => setMeetingCode(e.target.value)}
                            placeholder="Enter a code or link"
                            className="flex-1 py-3 px-4 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            className={`py-3 px-4 font-semibold ${meetingCode.trim()
                                ? 'text-blue-600'
                                : 'bg-transparent text-gray-500 cursor-not-allowed'
                                }`}
                            disabled={!meetingCode.trim()}
                        >
                            Join
                        </button>
                    </div>
                </div>

                <p className="text-left text-sm text-gray-500 mt-4 border-t">
                    <a href="#" className="text-blue-500 hover:underline">
                        Learn more
                    </a>{' '}
                    about this.
                </p>
            </div>
        </div>
    );
}
