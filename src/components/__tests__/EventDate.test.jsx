import renderer from "react-test-renderer";

import EventDate from "@/components/events/EventCard/EventDate";

it("renders correctly", () => {
    const tree = renderer.create(<EventDate />).toJSON();
    expect(tree).toMatchSnapshot();
});
