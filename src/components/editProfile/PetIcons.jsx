import { useState } from "react";
import { ItemsGroup, Loading } from "react-flatifycss";

import { useAuthContext } from "@/context/AuthContext";

import { cat, checkMark, dog, rabbit } from "~/library/svgs";

export default function PetIcons(props) {
    const { hidden, t } = props;
    const { updateUser } = useAuthContext();
    const [pet, setPet] = useState("cat");
    const [loading, setLoading] = useState(false);
    return (
        <>
            <ItemsGroup
                hidden={hidden}
                items={[
                    {
                        subtitle: t("catSubtitle"),
                        svg: cat,
                        title: t("catTitle"),
                        value: "cat",
                    },
                    {
                        subtitle: t("rabbitSubtitle"),
                        svg: rabbit,
                        title: t("rabbitTitle"),
                        value: "rabbit",
                    },
                    {
                        subtitle: t("dogSubtitle"),
                        svg: dog,
                        title: t("dogTitle"),
                        value: "dog",
                    },
                    {
                        value: "confirm",
                        title: loading ? (
                            <Loading
                                spinner
                                size='sm'
                                theme='orange'
                                hidden={!loading}
                            />
                        ) : (
                            checkMark
                        ),
                    },
                    {
                        subtitle: t("petsCredit"),
                    },
                ]}
                onChange={async (_pet) => {
                    if (!_pet) return;
                    if (_pet === "confirm") {
                        setLoading(true);
                        await updateUser({
                            photoURL: `/library/${pet}.jpg`,
                        });
                        setLoading(false);
                        return;
                    }
                    setPet(_pet);
                }}
                value={pet}
            />
        </>
    );
}
