export default function AuthErrorBox(props) {
    const { errors, t } = props;

    return (
        <ul className='bg-warning-600 p-7 mb-4 rounded-lg text-white font-medium'>
            <li>{t(errors)}</li>
        </ul>
    );
}
