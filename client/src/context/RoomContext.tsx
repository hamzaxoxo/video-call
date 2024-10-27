import Peer from "peerjs";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";
import { v4 as uuidV4 } from "uuid";
const WS = "http://localhost:3000";

export const RoomContext = createContext<null | any>(null);
const ws = socketIOClient(WS);

export const RoomProvider = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const [me, setMe] = useState<Peer>();
    const [stream, setStream] = useState<MediaStream>();
    const enterRoom = ({ roomId }: { roomId: string }) => {
        console.log({ roomId });
        navigate(`/meeting/${roomId}`);
    };

    const getUsers = ({ participents }: { participents: string[] }) => {
        console.log({ participents });
    }

    useEffect(() => {
        const meId = uuidV4();

        const peer = new Peer(meId);
        setMe(peer);

        try {
            navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
                setStream(stream);
            });
        } catch (err) {
            console.log(err);
        }

        ws.on("room-created", enterRoom)

        ws.on("get-users", getUsers)

        return () => {
            ws.off("room-created");
            ws.off("get-users");
            ws.off("user-disconnected");
            me?.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!me) return;
        if (!stream) return;

        ws.on("user-joined", ({ peerId }: { peerId: string }) => {
            const call = me.call(peerId, stream);
            // call.on("stream", (remoteStream) => {
            //     console.log({ remoteStream });
            // });
        });

        me.on("call", (call) => {
            call.answer(stream);
            // call.on("stream", (remoteStream) => {
            //     console.log({ remoteStream });
            // });
        });
    }, [me, stream]);

    return (
        <RoomContext.Provider value={{ ws, me, stream }}>
            {children}
        </RoomContext.Provider>
    );
};