import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';;
import StyledNavbar from './StyledNavbar'
const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default SharedLayout;