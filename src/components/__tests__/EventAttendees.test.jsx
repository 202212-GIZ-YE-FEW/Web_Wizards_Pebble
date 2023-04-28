import { I18nContext } from "next-i18next";
import renderer from "react-test-renderer";

import EventAttendees from "@/components/events/EventCard/EventAttendees";

it("renders correctly", () => {
    const i18n = {
        language: "en",
        t: (str) => str,
    };
    const tree = renderer
        .create(
            <I18nContext.Provider value={i18n}>
                <EventAttendees t={i18n.t} />
            </I18nContext.Provider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
