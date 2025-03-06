import UserList from "./UserList"; // UserList 컴포넌트를 import 합니다.

const UserListBox = ({ users }) => {
  return (
    <div className="user-list-box">
      {users.map((user, index) => (
        <UserList
          key={index}
          profileImage={user.profileImage}
          nickname={user.nickname}
        />
      ))}
      <div className="more-button">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default UserListBox;
