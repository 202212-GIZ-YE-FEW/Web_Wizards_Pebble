import renderer from "react-test-renderer";

import EventsDescription from "../events/EventCard/EventsDescription";

it("renders correctly", () => {
    const tree = renderer.create(<EventsDescription />).toJSON();
    expect(tree).toMatchSnapshot();
});
