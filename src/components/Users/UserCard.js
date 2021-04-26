import React from "react";
import { deleteUser } from "../../actions/userAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const PostCard = ({ postItem }) => {
  const dispatch = useDispatch();
  return (
    <tr>
    <td>
          {postItem.name}
        </td>
    <td>
          {postItem.address.city} 
        </td>
    <td>
          {postItem.email} 
        </td>
    <td>
      {postItem.username}
    </td>
    <td>
      {postItem.website}
    </td>
<td>
<Link
 to={`/updateUser/${postItem.id}`}
 className="btn-edit"
>
 <span class="material-icons" style={{color:"black"}}>edit</span>
</Link>
  </td> 
  <td>
  <button
 style={{border:"none"}}
 onClick={() => dispatch(deleteUser(postItem.id))}
>
 <span class="material-icons" style={{color:"black"}}>delete_outline</span>
</button>
  </td>

    </tr>
  );
};

export default PostCard;
