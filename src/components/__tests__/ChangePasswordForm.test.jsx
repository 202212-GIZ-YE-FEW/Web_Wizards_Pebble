import renderer from "react-test-renderer";

import ChangePasswordForm from "../editProfile/ChangePasswordForm";

it("renders correctly", () => {
    const tree = renderer
        .create(<ChangePasswordForm t={(str) => str} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
