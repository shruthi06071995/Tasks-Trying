// import { FormProvider, useForm, useFormContext } from "react-hook-form"

// export const ConnectForm = ({ childern }) => {
//     const methods = useFormContext();
//     return childern({ ...methods });
// };

// export const DeepNest = () => {
//     <ConnectForm>
//         {({ register }) => <input {...register("hobbies")} /> }
//     </ConnectForm>
// };

// export const App = () => {
//     const methods = useForm();

//     return (
//         <FormProvider {...methods}>
//             <form>
//                 <DeepNest />
//             </form>
//         </FormProvider>
//     );
// };

// export default ConnectForm;