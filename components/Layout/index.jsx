import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="layout bg-background-light">
      <Sidebar />

      <div className="main flex relative items-start justify-center">
        <div className="content flex flex-col">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
