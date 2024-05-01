import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
