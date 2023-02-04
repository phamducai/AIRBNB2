import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginAction } from "redux/actions/AuthAction";
import { getAllCommentsAction } from "redux/actions/CommentsAction";
import AdminTemplate from "templates/AdminTemplate/AdminTemplate";
import AddUser from "component/Admin/Dashboard/AddUser";
import Dashboard from "component/Admin/Dashboard/Dashboard";
import GetUser from "component/Admin/Dashboard/GetUser";
import UpdateUser from "component/Admin/Dashboard/UpdateUser";

import Location from "component/Admin/Location/Location";
import UpdateLocation from "component/Admin/Location/UpdateLocation";
import AddLocation from "component/Admin/Location/AddLocation";
import GetLocation from "component/Admin/Location/GetLocation";
import Test from "Test";
import Room from "component/Admin/Room/Room";
import UpdateRoom from "component/Admin/Room/UpdateRoom";
import GetRoom from "component/Admin/Room/GetRoom";
import AddRoom from "component/Admin/Room/AddRoom";

function App() {
  const data = {
    email: "ai.phamphamducaiadsaf@gmail.com",
    password: "123123",
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCommentsAction());
    dispatch(LoginAction(data));
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="test" element={<Test />} />
        <Route path="admin" element={<AdminTemplate />}>
          <Route index path="" element={<Dashboard />} />
          <Route path="updateUser/:id" element={<UpdateUser />} />
          <Route path="GetUser/:id" element={<GetUser />} />
          <Route path="addUser" element={<AddUser />} />

          <Route path="location" element={<Location />} />
          <Route path="location/update/:id" element={<UpdateLocation />} />
          <Route path="location/getbyid/:id" element={<GetLocation />} />
          <Route path="location/addlocation" element={<AddLocation />} />

          <Route path="rooms" element={<Room />} />
          <Route path="rooms/update/:id" element={<UpdateRoom />} />
          <Route path="rooms/getbyid/:id" element={<GetRoom />} />
          <Route path="rooms/addroom" element={<AddRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
