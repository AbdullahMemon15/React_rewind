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
it was decided that you can return  an empty <> </> which was called fragment

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

