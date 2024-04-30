import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ height: '200px', backgroundColor: 'lightyellow' }}>header</header>
      <main style={{ marginBottom: 'auto' }}>
        <Outlet />
      </main>
      <footer style={{ height: '200px', backgroundColor: 'lightyellow' }}>footer</footer>
    </div>
  );
};

export default Layout;
