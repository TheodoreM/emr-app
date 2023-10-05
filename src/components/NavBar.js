// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import logo from './assets/logo';

// const Navbar = () => {
//     return (
//         <div>
//             <Navbar bg="primary" data-bs-theme="dark">
//                 <Navbar.Brand href="/">
//                     <img
//                         src={logo}
//                         width="30"
//                         height="30"
//                         className="d-inline-block align-center"
//                         alt="React Bootstrap logo"
//                     />
//                     <b><i>HealthHub</i></b>
//                 </Navbar.Brand>
//                 <Nav className="me-auto">
//                     <Nav.Link href="#home">Home</Nav.Link>
//                     <Nav.Link href="#features">SignUp</Nav.Link>
//                     <Nav.Link href="#pricing">Already have an account? <b>SignIn</b></Nav.Link>
//                     <Nav.Link href="#pricing"><b>SignOut</b></Nav.Link>
//                 </Nav>
//             </Navbar>
//         </div>
//     );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/patients">Patients</Link>
                </li>
                <li>
                    <Link to="/appointments">Appointments</Link>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;