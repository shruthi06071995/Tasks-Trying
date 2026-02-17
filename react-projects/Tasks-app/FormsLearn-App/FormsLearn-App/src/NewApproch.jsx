// function NewApproch() {
//     const submitContact = async (prevState, formData) => {
//         const name = formData.get('name');
//         const email = formData.get('email');

//         // Process form data (e.g., send to API)
//         // No need to preventDefault or reset form - React handles it
//         return { success: true, message: `Thanks ${name}!` };
//     };

//     const [state, formAction] = useActionState(submitContact, {});

//     return (
//         <form action={formAction}>
//             <input type="text" name="name" />
//             <input type="email" name="email" />
//             <SubmitButton />
//             {state.success && <p>{state.message}</p>}
//         </form>
//     );
// }

// function SubmitButton() {
//     const { pending } = useFormStatus();
//     return (
//         <button disabled={pending}>
//             {pending ? 'Submitting...' : 'Submit'}
//         </button>
//     );
// }

// export default NewApproch;