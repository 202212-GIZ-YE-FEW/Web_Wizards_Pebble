import SecondaryTitle from "./SecondaryTitle";
import InputForm from "@/components/shared/InputForm";
const EditProfileForm = ({ t }) => {
    return (
        <div className='mt-24 w-3/4'>
            <div>
                <SecondaryTitle text={t("nameRequired")} />
                <InputForm
                    name='Name'
                    placeholder={t("placeholderName")}
                    type='text'
                    width='4/5'
                />
            </div>
            <div className='mt-2 lg:mt-8'>
                <SecondaryTitle text={t("yourLocation")} />
                <InputForm
                    name='Location'
                    placeholder={t("placeholderLocation")}
                    type='text'
                    width='4/5'
                />
            </div>
        </div>
    );
};

export default EditProfileForm;
// import InputForm from "../../components/InputForm";

// const EditProfileForm = (props) => {
//   return (
//     <div className='mt-24'>
//     <div>
//       <label>{props.label}</label>
//       <InputForm name={name} placeholder={props.placeholder} type={props.type} width="4/5"/>
//     </div>
//   </div>
//   );
// }

// export default EditProfileForm;
