import React, { useContext } from "react";
import { UserContext } from "../../context/User.context";

const ProfilePage = () => {
  const user = useContext(UserContext);
  const logout = () => {
    if (localStorage.getItem("user")) localStorage.removeItem("user");
    if (localStorage.getItem("token")) localStorage.removeItem("token");
    navigator("/login");
  };

  return (
    <div className="text-center max-w-lg mx-auto">
      User {user?.name}
      <br />
      <button onClick={logout} className="primary max-w-sm mt-2">
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
