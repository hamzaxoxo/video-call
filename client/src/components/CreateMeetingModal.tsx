import React from 'react'

export default function CreateMeetingModal({ modalOpen, setModalOpen, meetingTitle, setMeetingTitle, handleCreateMeeting }: {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
    meetingTitle: string;
    setMeetingTitle: (title: string) => void;
    handleCreateMeeting: () => void;
}) {
    return (
        <>
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
                        <h2 className="text-xl font-semibold mb-4">Create a New Meeting</h2>
                        <input
                            type="text"
                            value={meetingTitle}
                            onChange={(e) => setMeetingTitle(e.target.value)}
                            placeholder="Enter meeting title"
                            className="w-full py-2 px-3 border focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        />
                        <div className="flex justify-between">
                            <button
                                className="py-2 px-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                                onClick={handleCreateMeeting}
                            >
                                Create
                            </button>
                            <button
                                className="py-2 px-4 text-gray-600"
                                onClick={() => setModalOpen(false)} // Close the modal
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
