import React from "react";
import { useNavigate } from "react-router-dom";

const ChatBody = ({ messages, lastMessegeRef, typingStatus }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <header className="w-full h-[10vh] flex items-center justify-between p-5 bg-[#f9f5eb] ">
        <p>Hangout with Colleagues</p>
        <button
          className="p-3 w-40 border-none outline-none bg-[#d1512d] cursor-pointer text-[#eae3d2] "
          onClick={handleLeaveChat}
        >
          LEAVE CHAT
        </button>
      </header>

      {/*This shows messages sent from you*/}
      <div className="w-full h-[80vh] bg-[#fff] p-5 overflow-y-scroll ">
        {messages.map((message) =>
          message.name === localStorage.getItem("userName") ? (
            <div className="text-sm" key={message.id}>
              <p className="text-right">You</p>
              <div className=" bg-[rgb(194,243,194)] max-w-[300px] p-3 rounded-xl ml-auto text-sm">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="text-sm" key={message.id}>
              <p>{message.name}</p>
              <div className="bg-[#f5ccc2] w-80 p-2 rounded-xl text-sm ">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}
        <div className="fixed text-sm italic bottom-12">
          <p>{typingStatus}</p>
        </div>

        <div ref={lastMessegeRef} />
      </div>
    </>
  );
};

export default ChatBody;
