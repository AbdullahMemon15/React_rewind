# React_rewind
 REACT 
 react-dom (web)
 react-native (mobile app)

npm  =  node package manager // like in every language there are some installers  that allow use libraries

npx = node package executer

create react app is a utility (slower takes some time to install)
there is a better way to create

today vite or parcel is used 

web-vitals: performance of the application to track

start is development
build for production
test to test
eject when we are done with react and eject it

to run use the start script
-- inside the project you can use dir or ls
--to run the start script use run

npm run start

npm run build creates a build project

npm create vite@latest

jsx

how is react injected??

js needs to be injected to html to do anything

js need to be injected using script tags inside the html

dom is a tree structure

React and react dom two libraries to manipulate the dom

react is our core foundational lib (used for references)
react dom is the implementation of react on the web , just as react native is the implementation of react for the mobile.

react makes it virtual dom and compares it with the main dom and compares it with the main dom and only changes the elements that are different.

react makes it own dom and there is a method called create root
const root = ReactDom.createRoot(document.getElementById('root))

root.render(

)

jsx power . through js we can render our html elements

jsx is like element
custom tags we cerate through jsx

what is app??
app is a function and you can return html  inside the function and you can render that html

we render app and it render the html

benefit?? programming capabilities in html.

have you loaded the js in html ?? no ?

in package.json we have react-scripts (interesting)
responsible for loading the script in the index.html ..///  in page source for the react app we can see this 
// <script defer src="/static/js/bundle.js"></script></head>

this was fro 01basic

for viteReact
script(main.jsx) is loaded directly in index.html

for components we use jsx

in vite for components we have to name the files with .jsx
and  the components need to have names beginning with a capital letter

function App() {

  return (
    // <h1>chai aur react with vite | Abdullah</h1>
    <Chai/>
    <h1>dujhgnkjn</h1>
  )
}

gives us error

we can only export on element (rule of jsx)
easy fix make a div and include other components in it

common problem to wrap everything in html and react
it was decided that you can return  an empty <> </> which was called a fragment

function App() {

  return (
    <>
    // <h1>chai aur react with vite | Abdullah</h1>
    <Chai/>
    <h1>dujhgnkjn</h1>
    </>
  )
}

BEST PRACTICES
COMPONENTS need to be named with an uppercase letter Chai (capitalized name)

babel is transpiler

every react uses a bundler
bundler(does behind the scenes magic to improve syntax etc)
react does not like the html syntax that is why it is called jsx

actually the syntax should be like this and we can create tree
const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank",
    },
    children: "click me to visit google"
} 
normal html syntax is parsed into the one above.

babel might be converting myApp function and so we can directly use it as Myapp() inside render but we wont do it and we will be using the <MyApp/>
way

1.When we create a component in react by default babel(Transpiler) will inject a element React.createElement ()



{username}
this is called and expression 
evaluated expression meaning we write the final evaluated outcome (not the js)
we only write the evaluated outcome
{username} 
why can't we write js inside the username?? 

because at the end of the day we are converting it into n object (bc of parsing and object has a syntax so we can not use if statements for example)
.javascript syntax is to be followed

---hooks----

what are hooks?

ui update is controlled by react

useState from react , we use useState for hooks
//now we do not need to import react
//babel automatically injects react now

how to user hooks?

useState
//responsible for changing the state 
//this change is propagated in the ui or dom

//default value we want to give to the useState
// useState(15)

  const [counter,setCounter] = useState(15)

  //counter is a variable and setCounter is a function to update this variable

  //syncing of state and ui



  ------virtual dom, fibre and reconciliation

  virtual dom is now not used in react concepts have changed now

  what is virtual dom , what is reconciliation,  what are fibres

  createRoot method
  behind the scene it create a virtual dom and compares main dom and our dom and it updates only the things that are updated in the ui.
  browsers remove the entire dom and repaints the  entire dom again ( called page reload). repaint means web structure is being ready again

virtual dom can be traced in a tree like structure and updates only the things that are being changed

can it be made so that we don't have to immediately update and use algorithm to drop the old calls and drop the ui update and go for the latest update.

react now uses fibre (which is a core algorithm)
fibre is well implemented algorithm now
\
reconciliation is a recursive algorithm that reconsiders which thing to update
https://github.com/acdlite/react-fiber-architecture
browser tree and virtual dom tree

Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm described in the React docs will be largely the same. The key points are:

Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

interview question
why do we need keys? 
bc  in fibre algorithm Diffing of lists is performed using keys. 

jsx has object - tree
.render that objects is sent to the render environment.

The key points are:

In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

1.The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
2.But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by the React is called the React Fibre algo.
7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.
8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
9.In UI it is not necessary for every update to be applied immediately. 


-----07----tailwind and props in react-----------------

in jsx we have reserved keywords class and for

so for class we use className and for for we use HTMLFOR

props//
function Card(props)
    console.log(props); gives us object which is empty rn
    how to do fill this empty container
    whatever we pass here  in the app   <Card channel = "chai aur code"/>
    is the value of the props for the Card


function Card(props) {
    console.log("props", props.username);
}

sometimes we can directly destructure this like this: to avoid using props each time

function Card({username}){
      console.log("props", username);
}



      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-black">
       {btnText || "habibi click me"}
      </button>
      default value in pike if the user does not send a value to the prop


      also for visibility we can do this 
      function Card({username,btnText= "visit me"}) {}

-------------------counter interview question-------------
      useSates use to send things in batches so when we do this:
          setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)

    it is send it batches as 1 because this is the same update.

    what happens when we want to do this intentionally
we use prev counter  which is the last updated useState

          setCounter((prevCounter) => prevCounter +1)
          setCounter((prevCounter) => prevCounter +1)
          setCounter((prevCounter) => prevCounter +1)
          setCounter((prevCounter) => prevCounter +1)

          this is propagation and change of state. and how state is updated

                setCounter((prevCounter) => prevCounter +1)
      setCounter((prevCounter) => prevCounter +1)
      setCounter((prevCounter) => prevCounter +1)
      setCounter((prevCounter) => prevCounter +1)

      now this is not bunch of packages to be updated. we are using previous State 

-------------bgCHNAGER-------------

style={{backgroundColor: "#0000"}} Syntax for inline style css in react bc we already have double {}  we can directly inject the variable in here


          {/* <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Red"}}>Red</button> */}

          callback
          setColor is a method

          onClick has an issue it expects a function and what we are giving it is a reference here
          onClick={()=>setColor}
          it will take  a function but we can not pass a parameter because of the issue with the syntax, not the issue with react or js, it syntax

          if we pass it like this onClick={()=>setColor()} we are executing it directly then the return value of the function onCLick gets which it does not want bc onclick wants a  function

          here though we aare using a callback function which is calling another fucntion which is the setCOlor 
          onClick={()=>setColor("red")}

The on click method in React expects a function reference
You can't directly pass parameters inside the function, instead, you need to pass it as a reference or use arrow function syntax


-----10 useRef useCallBack project-------------------

https://react.dev/reference/react/useCallback

useCallback is a React Hook that lets you cache a function definition between re-renders.

cache means keep it in memory

useCallback(fn, dependencies)

we do not control when and what will be rendered is not controlled by us 
 it is controlled by setvalue or setState

 we use 

 https://react.dev/reference/react/useEffect
 https://react.dev/learn/synchronizing-with-effects

   useEffect(()=>{},[])

useEffect as two things one is the callback and other is the dependency array

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() *str.length +1)
      pass  += str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

// we can omit setPassword here,  memoization concept that we give it a method where values are being set.
we can give password here, but we get an infinite loop. if any dependencies change we are going to rerun this. bc usecallback changes, that is why we told it that if setpassword changes then change it but do not change it if password is changed

because this is  not only responsible for running it but it is responsible for memoization, to optimiw it or to keep it in cache

the dependency array of useCallback and use Effect are not to be confused 
in use callback we give dependencies that are that are dependencies and we want to optimize the method, we are giving the method to optimize it.

optimize it and keep it in memory or cache. (main goal of dependencies in useCallback)

in useEFFECT WE give dependencies that if anything changes with them we re run  the function.

basically useCallback for memoization and optimization.
useEffect for ru-running the methods based on the given changes to these dependencies.

  useEffect(()=>{
    
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  --useRef hook
  for reference of anything
  we need to make it variable

  in react we can use the window object but it nextJs where there is server  side rendering we do no0t have  window object

      window.navigator.clipboard.writeText(password)

      --------------------------11 custom hooks in react------------

      hook is a function


                      {currencyOptions.map((currency)=>(
                    <option  value="usd">
                        usd
                    </option>
                ))}

                this causes performance issues in react

when we repeat valie like this .
to stop this we use a field called key ={}
what should be the key???????
imp:::::::::::::::::: remember the key in loops in react


                      {currencyOptions.map((currency)=>(
                    <option key={currency} value="usd">
                        usd
                    </option>
                ))}

we can also use id if we are using databases which is better

better approach to export amd import is make another file index.js inside components and import the components there 

https://react.dev/reference/react/useId

import React,{useID} from 'react'
   const amountInputId = useID()

warning : do not call useID to generate keys in a list



------react router number 23---

react router dom gives us link and navlink
import {Link,NavLink} from 'react-router-dom'

interview question should we use a tag in react?

Link is used instead <a></a> tag because when we use the a tag the page refreshes. we dont have the refresh concept in react. dom goes and values are injected that is why we dont use a tag we use link.

why use navlink
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
in link  instead of using href we use to attribute


                                <NavLink
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200  ${isActive ? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>

why is the classNmae having callback function and the styles are in backticks??
in navlink we change the classes many time . in this project home is highlighted and how does home know that user is at the home or /about. one of the best way is to do this and manipulate the classes.

when we use callback we have a direct access to the variable inside the callback called is active.
isActive can be used and we can manipulate the classes adn we can inject our variable like this  ${} to changes the styling and use is active ${isActive} like this


    <RouterProvider router={router}/>

    to create a router we use RouterProvider and give it an prop as router 


const router = createBrowserRouter(
  {path}
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

createBrowserRouter() is a method which has array.


import { Outlet } from 'react-router-dom'
to reuse the footer and header components in react inside Layout.jsc we use outlet.
outlet uses this as a base

    <Header/>
    <Outlet />
    <Footer/>

    keeps whatever at the top and bottom everything remains same. there is a syntax for outlet

                                    <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200  ${isActive ? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>

we need to in NavLink as well. this linking is done by react router in the background behind the scene

import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div>User: {userid}</div>
  )
}

export default User

useParams for id and getting parameters.
dynamic data here.

      <Route 
      path ='github' 
      element = {<Github/>}
      loader
      />
    </Route>

    loader allows you to make api calls directly when we want to fetch data from database or api
    optimization happens when cursor is on the link, fetching is done and it is kept in cache, 



    import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/AbdullahMemon15')
    //     .then(response => response.json())
    //     .then(data=> {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img  src={data.avatar_url} alt= "Git Picture" width={300} />

    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response =  await fetch('https://api.github.com/users/AbdullahMemon15')
    return response.json()
}

when doing this we loose access to data.followers and hence we need a hook to solve that issue. the hook is called useloaderData

    <Route path = '/' element = {<Layout />}>
      <Route path ='' element = {<Home />}/>
      <Route path ='about' element = {<About />}/>
          <Route path='hitesh'/>
          </Route>
      <Route path ='contact' element = {<Contact />}/>
      <Route path ='user/:userid' element = {<User/>}/>
      <Route 
      loader = {githubInfoLoader}
      path ='github' 
      element = {<Github/>}
      />
    </Route>

we have to extract the router just like this aswell, we have to extarct is like this and have to use a hook called useParams, hooks are functions

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}


    for making router we need a provider called router provider and it requires only a router. there are two ways to create router.

imp: if we have used outlet in our layout then only whatever is inside the  Route Layout (our home,about contact user etc) is rendered

we can also do nesting like this 

      <Route path ='about' element = {<About />}/>
          <Route path='hitesh'/>
      </Route>

          now path is /about/hitesh



################# #13 context api####################################

prop drilling

context API IS Associated with react
there is another one known as redux (state management of the data being passed)

react-redux
Redux-toolkit(RTK)
ZUSTAND

https://react.dev/reference/react/useContext

context comes with react no need to install anything

context can be injected later on as well
all of react projects require state management 

multiple context can be made in a context.js file

step 1
import React from "react";
const UserContext =  React.createContext()

export default UserContext

when we create a context we have to also create a provider.

why provider??  it provides data

UserContextProvider should be jsx file
fragments need to be put on top level that is why we made it a jsx

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () =>{},
    lightTheme: () =>{}
})

we can give the create context an initial value already fed in to when it is created

we can give variables here as well as theme

export default function useTheme() {
        return useContext(ThemeContext)
}

custom hook which is a function. this is a syntax that can also be used

  darkMode: "class",
  add thi in tailwind so the change in the theme can work and we can use it.

remember to change config in tailwind
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}




################# #14 context api with local storage####################################

everytime we use useContext we have to pass it a context(reference to what we are talking about).

context api is not made for very big project for those we use redux or zust

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo:"Todo msg",
            completed:false,

        },

    ],
    // theme:dark
    addTodo: (todo) => {}
    
})

here we do not give functionality of the methods, we write the functionality in the app.jsx file.

  const addTodo = (todo) =>{
    setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev])
  }

  revise this @28 mins js basic

  https://www.w3schools.com/jsref/prop_win_localstorage.asp

  for window sometime we have to convert from string to json and we have to give values in string as well

  in new syntax if field name and value names are same like todo:todo we can just write it as todo

  relearn context..... by re watching use context


#15---------------------redux-toolkit-----------

React 

React-dom (browser)
React-native(app)

Redux (independent state management library)
react-Redux 

Flux 
data Flow

store
reducers
useSelector
useDispatch

how to create a store???

1. configure store 
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({})
2. slicer/reducer 
 import { createSlice,nanoid } from "@reduxjs/toolkit";
 nanoid generates unique ids


3.
we exprt two parts

export const {addTodo,removeTodo} = todoSlice.actions
//individual functionality is exported because it will be helpful in components.

addTodo,removeTodo these are our reducers.


store need awareness of all the reducer so that is why we do this. todoSlice is the name of our slice where we used cerateSlice
export default todoSlice.reducer


 createSlice({

}) is a method with objects

export const todoSlice  = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo: (state,action) => {},
        removeTodo: () => {},
    }
})


slices have names
when we use redux toolkit extension we need to know

reducers syntax is that we get state and action

state gives us the values inside the initial/current state
actions: values for ex id, we get form action

 action.payload 
 payload is an object, we can extract more from it
                 state.todos.push(todo)

                 update the state

state we get the current State whatever the state maybe
action: whatever the data is being passed

delete and update reducer is hw

import {useDispatch} from 'react-redux'
   const dispatch = useDispatch()

   dispatch uses a reducer to changes values in the store

        dispatch(addTodo(input))
        we pass it a reducer which is expecting a action.payload but now no need to write action .payload we can directly write todo

                setInput('')
                to clean the user Input

for delete we need to take an action for that we need dispatch

             onClick={() => dispatch(removeTodo(todo.id))}
onClick={dispatch} // we can not use parenthesis here because it will immediately execute.. and we want to give reference that someone clicks on that it then it works

onClick={() => dispatch(removeTodo(todo.id))}
correct way is this to call dispatch

whenever we want to pass callback or parameters we use call back

near mutate your state

every application has a single store called single source of truth

react is different , redux react is different
in redux toolkit some of the things are already done.
near mutate your state this is already done in redux react

we start by making a store (usually only one store) called single source of truth

we have to tell the store about the reducers that is why we went into feature in todo slice

we call features slice(which is a syntax)
3 things need need for slice
1- name
2- initial state ( by default how it should be like useState, some value in variable whether its an array or an object)
3= lists of reducer


reducers is a object we can give me how ever many key value pairs, key function pair 
we get access of two things state and action
in action we get the action.payload
we made id using nanoid

in context api state is not preserved here it is preserved

update functionality hw at 1:05:00

in export we need individual functionality
we have to export all of them because we don't know in which component which reducer is being used.

we need the export of the main source because we want to use this in out state

for sending vALUE WE have to use dispatch ---- courier dispatch

    const dispatch = useDispatch()
  dispatch is a method, we have to import whatever our reducer is and send the reducer  

          dispatch(addTodo(input))

to take values.
to select values we need the access to state

    const todos = useSelector(state => state.todos)
    then its pure js, maps , loops

    remove todo is we have to take action (give values dispatch)

-----------re watch redux toolkit------------------





--------------app write chai aur react------------
.env variables are system variables 

