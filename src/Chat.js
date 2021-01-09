import React, { useEffect, useState } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import { selectchannelId, selectChannelName } from "./features/appSlice";
import db from "./firebase";
import firebase from "firebase";
function Chat() {
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);
  const channelId = useSelector(selectchannelId);
  const channelName = useSelector(selectChannelName);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("channels")
      .doc(channelId)
      .collection("messages")
      .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(0),
        message: input,
        user: user,
      });
    setInput("");
  };
  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>

      <div className="chat__input">
        <AddCircleIcon />
        <form>
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={`Message #TESTCHANNEL`}
          />
          <button
            onClick={sendMessage}
            disabled={!channelId}
            className="chat__inputButton"
          >
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
