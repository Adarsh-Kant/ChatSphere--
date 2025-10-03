import React, { StrictMode } from 'react'
import ReactDOM,{ createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import {SocketProvider} from './context/SocketContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <SocketProvider>
      <App />
     </SocketProvider>
    </AuthProvider>
  </BrowserRouter>
)


// Understanding the Project & Your Role
// "Can you explain your project in brief?": (Focus on the overall goal and impact) 
// "What was your specific role in this project?": (Highlight your responsibilities and contributions) 
// "Why did you choose this project?": (Show your interest and motivation) 
// "What were the primary objectives and goals of the project?": (Demonstrate your understanding of its purpose) 
// Technical Aspects & Skills
// "What technical skills did you use to complete this project?": (Connect your skills to the project's requirements) 
// "What tools or technologies were most important in your project?": (Show your technical proficiency) 
// "How did you approach the technical challenges you encountered?": (Demonstrate your problem-solving approach) 
// "Were there any new skills or technologies you had to learn for this project?": (Show your ability to learn and adapt) 
// Challenges & Learning
// "What was the most challenging aspect of this project, and how did you overcome it?": (Use the STAR method to detail the situation, your task, the actions you took, and the positive results) 
// "Describe a time when you encountered a failure in this project. What did you learn from it?": (Show your resilience and ability to learn from mistakes) 
// "How did you deal with criticism or feedback regarding your project work?": (Show you can accept feedback and improve) 
// Impact & Future Scope
// "What do you think is the future scope of this project?": (Show you can think strategically and see the bigger picture) 
// "Who do you think will benefit most from this project?": (Show your understanding of user needs and market impact) 
// "How do you think your experience on this project relates to the requirements of this role?": (Directly connect your project experience to the job you're applying for) 
// Teamwork & Collaboration
// "Describe how you collaborated with other team members on the project.": (Highlight your teamwork and communication skills) 
// "How did you handle disagreements or conflicts within your project team?": (Show your conflict resolution skills) 