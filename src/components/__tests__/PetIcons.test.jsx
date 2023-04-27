import renderer from "react-test-renderer";

import PetIcons from "@/components/editProfile/PetIcons";

it("renders correctly", () => {
    const tree = renderer
        .create(
            <PetIcons
                t={(str) => str}
                user={{ displayName: "", photoURL: "" }}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
