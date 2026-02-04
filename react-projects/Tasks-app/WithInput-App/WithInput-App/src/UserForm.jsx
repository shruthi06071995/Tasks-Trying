// import { useContext } from "react"
// import { UserContext } from "./UserContext.jsx"

// const UserForm = () => {
//     const { user, setUser } = useContext(UserContext);

//     const handleChange = (e) => {
//         setUser({
//             ...user,
//             [e.target.name]: e.target.value
//         });
//     };

//     return (
//         <div>
//             <h3>USER FORM</h3>

//             <input style={{ width: "260px", height: "20px", padding: "5px" }}
//                 type="text" name="name" placeholder="Enter Name" value={user.name} onChange={handleChange} /> <br /><br />
//             <input style={{ width: "260px", height: "20px", padding: "5px" }}
//                 type="text" name="email" placeholder="Enter Email" value={user.email} onChange={handleChange} /> <br /><br />
//             <input style={{width: "260px", height: "20px", padding: "5px"}}
//                 type="text" name="phone" placeholder="Enter Phone Number" value={user.phone} onChange={handleChange} />
//         </div>
//     );
// }

// export default UserForm;