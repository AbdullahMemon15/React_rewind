function customRender (reactElement , container){
    
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute("href", reactElement.props.href)
    // domElement.setAttribute("target",reactElement.props.target)
    // container.appendChild(domElement)

    //another way which is more modular
     const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue; // we can ignore this line
        domElement.setAttribute(prop,reactElement.props[prop])

    }
    container.appendChild(domElement)
}





// given by react since we are not using react we create it
const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank",
    },
    children: "click me to visit google",
}
//react tries to make everything as a tree

const mainContainer = document.getElementById("root");
// document.querySelector("#root")

customRender(reactElement,mainContainer)
