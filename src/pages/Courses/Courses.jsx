import { Outlet } from "react-router-dom";

function Courses() {
  return (
    <div>
      <div>Courses</div>
      <Outlet />
    </div>
  );
}

export default Courses;
