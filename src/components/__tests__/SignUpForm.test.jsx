import { useRouter } from "next/navigation";
import { I18nContext } from "next-i18next";
import renderer from "react-test-renderer";

import SignUpForm from "../SignUpForm";

// Mock the useRouter hook
jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));

it("renders correctly", () => {
    // Set up the mocked useRouter function
    useRouter.mockImplementation(() => ({
        push: () => "/",
    }));

    const i18n = {
        language: "en",
        t: (str) => str,
    };
    const tree = renderer
        .create(
            <I18nContext.Provider value={i18n}>
                <SignUpForm t={i18n.t} />
            </I18nContext.Provider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
