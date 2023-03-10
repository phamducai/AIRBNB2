import React from "react";
import { Button, Table, Input } from "antd";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteRentalRoomAction,
  getAllRentalRoomAction,
} from "redux/actions/RetalRoomAction";
import { Fragment } from "react";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
const { Search } = Input;
function Room() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRentalRoomAction());
    dispatch({ type: "DELETE_ROOM" });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const room = useSelector((state) => state.RoomReducers.getAllRenderRoom);
  console.log(room);
  const columns = [
    {
      title: "RoomID",
      dataIndex: "id",
      width: "5%",
    },
    {
      title: "LocaitonID",
      width: "5%",
      dataIndex: "maViTri",
    },
    {
      title: "Name",
      dataIndex: "tenPhong",
      width: "25%",
    },
    {
      title: "Image",
      dataIndex: "hinhAnh",
      width: "10%",
      render: (text) => {
        return (
          <Fragment>
            <img
              src={text}
              alt={text}
              width={70}
              height={70}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/70/70`;
              }}
            />
          </Fragment>
        );
      },
    },
    {
      title: "Description",
      width: "30%",
      dataIndex: "moTa",
      render: (text) => {
        return (
          <Fragment>
            {text.length > 65 ? text.substr(0, 65) + " ..." : text}
          </Fragment>
        );
      },
    },
    {
      title: "Price",
      width: "5%",
      dataIndex: "giaTien",
      render: (text, a) => {
        return <Fragment>{text} $</Fragment>;
      },
    },

    {
      title: "Action",

      fixed: "right",
      width: "30%",
      render: (text, room) => {
        return (
          <>
            <NavLink
              key="11"
              className=" mr-2  text-2xl"
              to={`/admin/rooms/${room.id}`}
            >
              <EyeOutlined />
            </NavLink>
            <NavLink
              key="10"
              className=" mr-1 text-2xl"
              to={`/admin/rooms/update/${room.id}`}
            >
              <EditOutlined style={{ color: "blue" }} />{" "}
            </NavLink>
            <span style={{ cursor: "pointer" }} key="9" className="text-2xl">
              <DeleteOutlined
                style={{ color: "red" }}
                onClick={async () => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete" + room.id + "?"
                    )
                  ) {
                    dispatch(deleteRentalRoomAction(room.id));
                    dispatch(getAllRentalRoomAction());
                  }
                }}
              />{" "}
            </span>
          </>
        );
      },
    },
  ];
  const data = Array.isArray(room) ? room : [room];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const onsearch = async (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      {" "}
      <h1 className="text-3xl mb-5">Room Management</h1>
      <Link to="/admin/rooms/addroom">
        <Button className="mb-5">Add Room</Button>
      </Link>
      <Search
        placeholder="
  User Search By Name"
        enterButton="Search"
        size="large"
        name="search"
        onChange={onsearch}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"id"}
      />
    </div>
  );
}

export default Room;
