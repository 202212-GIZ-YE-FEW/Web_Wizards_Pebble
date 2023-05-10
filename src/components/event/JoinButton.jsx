import { useEffect, useState } from "react";

import { useAlertContext } from "@/context/AlertContext";
import { useAuthContext } from "@/context/AuthContext";
import useFirestore from "@/firebase/firestore";

const JoinButton = ({ eventId }) => {
    const { user } = useAuthContext();
    const [isJoining, setIsJoining] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);
    const [isJoined, setIsJoined] = useState(false);
    const [error, setError] = useState();
    const { setTheme, setShow, setMessage } = useAlertContext();
    const eventsHook = useFirestore("events");
    useEffect(() => {
        const checkIfJoined = async () => {
            const event = await eventsHook.getDocumentById(eventId);
            const attendees = event?.attendees || [];
            setIsJoined(attendees.includes(user?.displayName));
        };
        checkIfJoined();
    }, [eventId, user?.displayName, eventsHook]);

    const handleJoinClick = async () => {
        try {
            setIsJoining(true);
            const event = await eventsHook.getDocumentById(eventId);
            const attendees = event.attendees || [];

            if (!attendees.includes(user.displayName)) {
                const updatedAttendees = [...attendees, user.displayName];
                await eventsHook.updateDocumentById(eventId, {
                    attendees: updatedAttendees,
                });
                setIsJoined(true);
            }

            setIsJoining(false);
            setShow(true);
            setMessage(
                "Thanks for lending a hand! Your contribution to the event is invaluable and will make a real impact"
            );
        } catch (error) {
            setError(error);
            setShow(true);
            setIsJoining(false);
        }
    };

    const handleLeaveClick = async () => {
        try {
            setIsLeaving(true);
            const event = await eventsHook.getDocumentById(eventId);
            const attendees = event.attendees || [];

            const updatedAttendees = attendees.filter(
                (attendee) => attendee !== user.displayName
            );
            await eventsHook.updateDocumentById(eventId, {
                attendees: updatedAttendees,
            });
            setIsJoined(false);

            setIsLeaving(false);
            setShow(true);
            setMessage(
                "We are sorry to see you go, but we understand and appreciate your decision"
            );
        } catch (error) {
            setError(error);
            setShow(true);
            setIsLeaving(false);
        }
    };

    return (
        <>
            <div className='py-12 order-3 lg:order-none px-4'>
                <button
                    onClick={isJoined ? handleLeaveClick : handleJoinClick}
                    disabled={isJoining || isLeaving}
                    className='w-full bg-primary-200 focus:outline-none text-white font-semibold rounded-lg text-md px-32 py-3'
                >
                    {isJoined
                        ? isLeaving
                            ? "Leaving..."
                            : "Leave"
                        : isJoining
                        ? "Joining..."
                        : "Join"}
                </button>
            </div>
        </>
    );
};

export default JoinButton;
