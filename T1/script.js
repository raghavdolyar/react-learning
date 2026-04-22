function createElement(tag, attributes, content) {

    const element = document.createElement(tag);

    element.textContent = content;

    for (const key in attributes) {

        if (key === "style") {
            Object.assign(element.style, attributes.style);
        } else {
            element[key] = attributes[key];
        }

    }

    return element;

}

const element1 = createElement('h2', { className: "element", id: "first", style: { fontSize: "30px", color: "red" } }, "Hello Coders");
const element2 = createElement('h3', { className: "element", id: "second", style: { fontSize: "24px", color: "green" } }, "Welcome to this react course");

const root = document.getElementById("root");

root.append(element1);
root.append(element2);
