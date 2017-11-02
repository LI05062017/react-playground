import React from 'react'

const chatStyle = {
  container: {
    backgroundColor: 'gray'
  },
  mainText: {
    color: 'red'
  },
  backupText: {
    color: 'blue'
  }
}

const ChatBox = ({username, message, avatar}) => {
  return (
    <div style={chatStyle.container}>
      <h3 style={
        username.length > 10
          ? chatStyle.mainText
          : chatStyle.backupText
      }
      >
        {username}</h3>
      <p>{message}</p>
      <img src={avatar} />
    </div>
  )
}

export default ChatBox
