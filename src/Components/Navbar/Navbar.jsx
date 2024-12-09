import logo from '../../assets/img/logo.png'
import { BsCoin } from "react-icons/bs";

const Navbar = ({coin}) => {
    return (
        <div className='sticky top-0 z-10 backdrop-blur-lg'>
                <div className="navbar bg-base-300 p-5">
  <div className="flex-1">
    <a><img src={logo} alt=""/></a>
  </div>
  <div className="flex-none hidden md:block">
    <ul className="menu menu-horizontal px-1 md:text-lg md:gap-8">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
    </ul>
  </div>
  <div>
  <a><button className='btn text-xl'>{coin} coin <span className='text-2xl text-yellow-600'><BsCoin /></span> </button></a>
  </div>
</div>
        </div>
    );
};

export default Navbar;