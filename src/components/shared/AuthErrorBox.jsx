import { Alert, AlertCloseButton } from "react-flatifycss";

export default function AuthErrorBox(props) {
    const { errors, t } = props;
    const theme = "orange-light";

    return (
        <Alert show theme={theme}>
            <AlertCloseButton theme={theme} label='Close the error alert.' />
            {t(errors)}
        </Alert>
    );
}
