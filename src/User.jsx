import React from "react";
import { useParams, useLocation , useNavigate} from "react-router-dom";
// const User = ({match}) => {

//     return (
//         <>
//             <h1>Hello, i am an {match.params.name} page.....</h1>
//         </>
//     );
// };
const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    const navigator = useNavigate();
    console.log(navigator);
    return (
        <>
            <h1>Hello, i am an {fname} {lname} page.....</h1>
            <p>My current location is {location.pathname}</p>
            {location.pathname === `/user/herry/potter` ?
                <button onClick={()=>navigator(-1)}>Click me</button> : null}
        </>
    );
};
export default User;
