import renderer from "react-test-renderer";

import EventsImages from "@/components/events/EventCard/EventsImage";

it("renders correctly", () => {
    const tree = renderer.create(<EventsImages />).toJSON();
    expect(tree).toMatchSnapshot();
});
