import renderer from "react-test-renderer";

import EditProfileButton from "@/components/EditProfileButton";

it("renders correctly", () => {
    const tree = renderer.create(<EditProfileButton />).toJSON();
    expect(tree).toMatchSnapshot();
});
