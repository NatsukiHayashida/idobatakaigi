import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { List } from "@material-ui/core";

import MessageItem from "./MessageItem";
import { messagesRef } from "../firebase";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    overflow: "auto",
    width: "100%",
  },
});

// key: -MeH_pCA2fm83OiSjHmx, value: {name: "なつき", text: "こんんちは"}
// {key: -MeH_pCA2fm83OiSjHmx, value: name: "なつき", text: "こんんちは"}

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    messagesRef
      .orderByKey()
      .limitToLast(10)
      .on("value", (snapshot) => {
        const messages = snapshot.val();
        if (messages === null) return;

        const entries = Object.entries(messages);
        const newMessages = entries.map((entry) => {
          // const key = entry[0];
          // const nameAndText = entry[1];
          const [key, nameAndText] = entry;
          return { key, ...nameAndText };
        });
        setMessages(newMessages);
      });
  }, []);

  const length = messages.length;


  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text }, index) => {
        const isLastItem = length === index + 1;

        return <MessageItem key={key} name={name} text={text} isLastItem={isLastItem} />;
      })}
    </List>
  );
};

export default MessageList;
