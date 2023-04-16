import renderer from "react-test-renderer";

import SingleAttendees from "@/components/event/SingleAttendees";

it("renders correctly", () => {
    const tree = renderer.create(<SingleAttendees />).toJSON();
    expect(tree).toMatchSnapshot();
});
