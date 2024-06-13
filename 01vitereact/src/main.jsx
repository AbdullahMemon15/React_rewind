import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-dev-runtime.js"
import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>customApp</h1>
//     </div>
//   )
// }

// const reactElement = {
//   type: 'a',
//   props: {
//       href: "https://www.google.com",
//       target: "_blank",
//   },
//   children: "click me to visit google"
// }

// const anotherElement = (
//   <a href="http://google.com "target ="_blank" >Visit google</a>
// )

const anotherUser = "chai aur react"


const reactElement = React.createElement(
  //react.createelement is injected by babel (transpiler)
  //predefined synatx for react , tag then object {}
  'a',
  {href: 'http://google.com', target:"_blank"},
   'click me to visit google',
   //evaluated expression where variables can be injected
   anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(


  // anotherElement
  reactElement
)
