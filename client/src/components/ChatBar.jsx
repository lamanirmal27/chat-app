import React, { useState, useEffect } from "react";

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));

    // Cleanup to avoid memory leaks
    return () => socket.off("newUserResponse");
  }, [socket]);

  return (
    <div
      className="h-full bg-[#f9f5eb] flex-[0.2] p-5 border-r"
      style={{ borderRightColor: "#fdfdfd" }}
    >
      <h2>Open Chat</h2>
      <div>
        <h4 className="mt-8 mb-5">ACTIVE USERS</h4>
        <div className="mb-2 text-[#607eaa] text-sm">
          {users.map((user) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
