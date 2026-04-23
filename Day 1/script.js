// Loose implementation of React and other JS libraries

const React = {
    createElement: function (type, props, children) {

        return {
            type: type,
            props: {
                ...props,
                children: children
            }
        }

    }
}

// example of a typical react element
// also called Virtual DOM

// const reactElement = {
//     type: "h1",
//     props: {
//         className: "element",
//         id: "first",
//         style: {
//             fontSize: "30px",
//             color: "red"
//         },
//         children: "Hello Coders"
//     }
// }

const ReactDOM = {
    render: function (reactElement, root) {

        root.innerHTML = '';

        const element = document.createElement(reactElement.type);
        const { props } = reactElement;

        for (const key in props) {
            if (key === "style") {
                Object.assign(element.style, props.style);
            } else if (key === "children") {
                element.textContent = props[key];
            } else {
                element[key] = props[key];
            }
        }

        root.append(element);

    }
}

const element1 = React.createElement('h2', { className: "element", id: "first", style: { fontSize: "30px", color: "red" } }, "Hello Coders");
const element2 = React.createElement('h3', { className: "element", id: "second", style: { fontSize: "24px", color: "green" } }, "Welcome to this react course");

const root = document.getElementById("root");

ReactDOM.render(element1, root);
ReactDOM.render(element2, root);

// React elements are plain JS objects
// but React itself is a reconciliation + rendering engine
// that manages virtual DOM diffing and efficient updates
