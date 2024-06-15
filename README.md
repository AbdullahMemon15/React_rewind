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




