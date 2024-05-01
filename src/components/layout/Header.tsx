import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center h-[200px] bg-lime-100 text-2xl">
      <Link className="ml-20 p-4 bg-blue-100" to="/">
        Home
      </Link>
      <nav className="absolute right-20">
        <Link className="p-4 bg-blue-100" to="/real">
          Real API
        </Link>
        <Link className="ml-10 p-4 bg-blue-100" to="/fake">
          Fake API
        </Link>
      </nav>
    </header>
  );
};

export default Header;
