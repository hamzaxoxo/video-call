import { Socket } from "socket.io";
import { v4 as uuid } from 'uuid';

const rooms: Record<string, string[]> = {};

interface Room {
    roomId: string;
    peerId: string;
}
export const roomHandler = (socket: Socket) => {

    const joinRoom = ({ roomId, peerId }: Room) => {
        if (rooms[roomId]) {
            console.log('User Joined the room', roomId, peerId);
            rooms[roomId].push(peerId)
            socket.join(roomId);
            socket.to(roomId).emit("user-joined", { peerId });
            socket.emit("get-users", {
                roomId,
                participents: rooms[roomId],
            })
        }

        socket.on("disconnect", () => {
            console.log("user left the room", peerId);
            leaveRoom({ roomId, peerId });
        });
    };

    const leaveRoom = ({ peerId, roomId }: Room) => {
        // rooms[roomId] = rooms[roomI  d]?.filter((id) => id !== peerId);
        socket.to(roomId).emit("user-disconnected", peerId);
    };

    const createRoom = () => {
        const roomId = uuid();
        rooms[roomId] = [];
        socket.emit('room-created', { roomId });
        console.log('User Creating room');
    }

    socket.on('create-room', createRoom);
    socket.on('join-room', joinRoom);
}