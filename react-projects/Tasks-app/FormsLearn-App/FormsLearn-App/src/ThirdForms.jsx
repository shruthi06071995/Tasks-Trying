import { useForm } from "react-hook-form";

const ThirdForms = () => {
    const { register, handleSubmit } = useForm();
    const handleRegistration = (data) => console.log(data);

    const registerOptions = {
        name: { required: "Name is required" },
        email: { required: "Email is required"},
        password: { 
            required: "Password is Required",
            pattern: {
                keys: "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/",
                message: "Password must have at least 8 characters"
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(handleRegistration)}>
            <div>
                <label>Name</label>
                <input type="text" name="name" {...register('name', registerOptions.name) } />
                {/* <small className="text-danger"></small> */}
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" {...register('email', registerOptions.email) } />
                {/* <small className="text-danger"></small> */}
            </div>
            <div>
                <label>Password</label>
                <input type="passowrd" name="password" {...register('password', registerOptions.password) } />
                {/* <small className="text-danger"></small> */}
            </div>
            <button>Submit</button>
        </form>
    );
}

export default ThirdForms;