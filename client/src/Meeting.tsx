import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RoomContext } from './context/RoomContext';

const Meeting: React.FC = () => {
    const { id } = useParams();
    const { ws, me, stream } = useContext(RoomContext);

    React.useEffect(() => {
        ws.emit('join-room', { roomId: id, peerId: me?.id });
    }, [id, ws, me]);

    const videoRef = React.useRef<HTMLVideoElement>(null);

    React.useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);
    return (
        <div>
            <h1>Meeting Room: {id}</h1>
            <video src={stream} ref={videoRef} autoPlay id="videoElement" muted />
        </div>
    );
};

export default Meeting;
