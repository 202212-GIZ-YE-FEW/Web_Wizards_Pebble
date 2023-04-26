import { useState } from "react";
import { Alert, AlertCloseButton } from "react-flatifycss";

export default function AuthErrorBox(props) {
    const { errors, t } = props;
    const theme = "orange-light";
    const [close, setClosed] = useState(true);

    return (
        <Alert show={close} theme={theme}>
            <AlertCloseButton
                theme={theme}
                label='Close the error alert.'
                onClick={() => setClosed(true)}
            />
            {t(errors)}
        </Alert>
    );
}
