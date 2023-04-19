import { useRouter } from "next/navigation";
import { I18nContext } from "next-i18next";
import renderer from "react-test-renderer";

import SignInForm from "@/components/signIn/SignInForm";

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
                <SignInForm t={i18n.t} />
            </I18nContext.Provider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
