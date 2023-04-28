import renderer from "react-test-renderer";

import EventsTitle from "../events/EventCard/EventsTitle";

it("renders correctly", () => {
    const tree = renderer.create(<EventsTitle />).toJSON();
    expect(tree).toMatchSnapshot();
});
