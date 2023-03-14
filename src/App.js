import Adresse from './Component/Profile/Adresse';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
function App() {
  return (
    <div >
      <Navbar bg="info" variant="dark">
      <Navbar.Brand>
      logo
      

      </Navbar.Brand>
      </Navbar>
      <ProfilePhoto/>
      <Adresse/>
<FullName/>
    </div>
  );
}

export default App;
