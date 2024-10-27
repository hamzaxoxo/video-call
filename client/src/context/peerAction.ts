export const ADD_PEER = "ADD_PEER" as const;
export const REMOVE_PEER = "REMOVE_PEER" as const;

export const addPeerAction = (peer: string, stream: MediaStream) => ({
    type: ADD_PEER,
    payload: { peer, stream },
});

export const removedPeerAction = (peer: string, stream: MediaStream) => ({
    type: REMOVE_PEER,
    payload: { peer, stream },
});
