import InputForm from "@/components/shared/InputForm";

import SecondaryTitle from "./SecondaryTitle";
const EditProfileForm = ({ t, name, location }) => {
    return (
        <div className='mt-24 w-3/4'>
            <div>
                <SecondaryTitle text={t("nameRequired")} />
                <InputForm
                    name='name'
                    placeholder={name}
                    type='text'
                    width='4/5'
                />
            </div>
            <div className='mt-2 lg:mt-8'>
                <SecondaryTitle text={t("yourLocation")} />
                <InputForm
                    name='location'
                    placeholder={location || t("placeholderLocation")}
                    type='text'
                    width='4/5'
                />
            </div>
        </div>
    );
};

export default EditProfileForm;
