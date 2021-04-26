import React, { useEffect } from "react";
import UserCard from "./UserCard";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../actions/userAction";

const Users = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
      <table id="userTbl">
        <th>
          name
        </th>
        <th>
          address
</th>
        <th>
          email
</th>
        <th>
          username
</th>
        <th>
          website
</th>
        <th>
          Edit
</th>
        <th>
          Delete
</th>

        {user.map((postItem) => (
          <UserCard key={postItem.id} postItem={postItem} />
        ))}
      </table>
  );
};

export default Users;
