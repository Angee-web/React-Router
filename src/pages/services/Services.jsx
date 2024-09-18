//The Outlet component serves as a placeholder for nested routes defined in your application's routing structure. It allows the parent route to render child routes within its layout.
import { Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      <Outlet />
      {/*When a nested route matches the current URL, the corresponding component will be rendered inside this Outlet.  */}
    </div>
  );
};

export default Services;
