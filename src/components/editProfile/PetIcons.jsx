import { useState } from "react";
import { ItemsGroup, Loading } from "react-flatifycss";

import { updateProfile } from "../../../lib/useAuth";

import { cat, checkMark, dog, rabbit } from "~/library/svgs";

export default function PetIcons(props) {
    const { hidden, user } = props;
    const [pet, setPet] = useState("cat");
    const [loading, setLoading] = useState(false);
    return (
        <>
            <ItemsGroup
                hidden={hidden}
                items={[
                    {
                        subtitle: "Super duper Pebble Cat!",
                        svg: cat,
                        title: "Pebble's Cat",
                        value: "cat",
                    },
                    {
                        subtitle: "Amazing R-r-r-rabit!",
                        svg: rabbit,
                        title: "Pebble's Rabbit",
                        value: "rabbit",
                    },
                    {
                        subtitle: "Woofy Dog!",
                        svg: dog,
                        title: "Pebble's Dog",
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
                        subtitle: "Pets made by Rachmat Budiaji",
                    },
                ]}
                onChange={async (_pet) => {
                    if (!_pet) return;
                    if (_pet === "confirm") {
                        setLoading(true);
                        await updateProfile(user, {
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
