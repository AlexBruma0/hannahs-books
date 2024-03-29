import Sidebar from "../components/SideBar";
import { fetchUsers } from "../redux/slices/UsersSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { themes } from "../themes";
import { useContext } from "react";

const UsersPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const { theme } = useContext(ThemeContext);
  const currentThemeColors = themes[theme];

  useEffect(() => {
    if (userId) {
      dispatch(fetchUsers());
    }
  }, [userId, dispatch]);

  const users = useSelector((state) => state.users.users);

  const handleVisitUser = (viewId) => {
    localStorage.setItem("viewingId", viewId);
    navigate("/home");
  };

  return (
    <div className="flex flex-wrap  p-4 gap-2 bg-white">
      {users.map((user) => (
        <div
          key={user._id}
          className="w-48 border border-gray-300 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-shadow duration-300 hover:shadow-xl"
        >
          <img
            className="w-full h-44"
            src={
              user.profilePicture
                ? user.profilePicture
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
            alt={user.userName}
          />
          <div className="p-4 text-center">
            <div className="font-bold">{user.userName}</div>
            <button
              style={
                currentThemeColors
                  ? {
                      backgroundColor: currentThemeColors.accent,
                    }
                  : null
              }
              className=" font-bold text-xs py-2 px-4 rounded mt-3"
              onClick={() => handleVisitUser(user._id)}
            >
              View Books
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
