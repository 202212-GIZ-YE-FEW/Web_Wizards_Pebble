import renderer from "react-test-renderer";

import EventDescription from "../event/EventDescription";

it("renders correctly", () => {
    const eventData = {
        title: "Meeting Brainstorm Energy CIeccan lzmir",
        location: "Izmir, Turkey",
        date: "ahhallsei 26 Augest Kapisi",
        organizer: "Sufyan",
        attendees: ["Sufyan", "Adeeb", "Abdullah", "Azzam", "Hamad"],
    };
    const tree = renderer
        .create(<EventDescription eventData={eventData} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
