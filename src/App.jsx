import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { BsMoon } from 'react-icons/bs'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  
  return (
    <div className="app">
      <div className="sidebar">
        <div className="tokens">100 tokens</div>
        <h2>Conversations</h2>
        <button className="new-conversation">New Conversation</button>
      </div>
      
      <div className="main">
        <header>
          <div className="header-left">
            <button className="back-button">
              <BiArrowBack />
            </button>
            <h1>Chat with Pydantic AI Expert</h1>
          </div>
          <button className="theme-toggle">
            <BsMoon />
          </button>
          <button className="back-to-agents">Back to Agents</button>
        </header>
        
        <div className="chat-container">
          <div className="message assistant">
            <p>I am an expert at Pydantic AI with the entire documentation at my disposal. Ask me anything about this awesome Python AI agent framework!</p>
            <span className="timestamp">less than a minute ago</span>
          </div>
          
          <div className="suggested-questions">
            <button>What are the supported models?</button>
            <button>Give me the weather agent example from the docs.</button>
            <button>How do I define a tool for my agent?</button>
          </div>
        </div>
        
        <div className="input-container">
          <input 
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="send-button">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
        
        <footer>
          <p>Hosted by oTTomator | Made by Cole Medin</p>
        </footer>
      </div>
    </div>
  )
}

export default App
