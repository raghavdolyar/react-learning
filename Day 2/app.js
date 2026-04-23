// This JSX to React code conversion is done by Babel
// Babel is a JS compiler

// React Element
// const element = (<>
//     <h2 id="title" className="first">Hello Coders</h2>
//     <p>We are integrating React with simple HTML docs</p>
// </>);

// the above written code is JSX

// React Component (JS function)
// function App(name) {
//     return (
//         <>
//             <h2>Welcome to my React Learning Course</h2>
//             <h3>My name is {name}</h3>
//         </>
//     );
// }

// let isLoggedIn = true;

// const element = (
//     <h2>Hello, You are {isLoggedIn ? <span>welcomed here</span> : <span>not allowed here</span>}</h2>
// );

const courses = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "React" }
];

// [<li>HTML</li>, <li>CSS</li>, <li>JavaScript</li>, <li>React</li>]

const element = (
    <ul>
        {
            courses.map(course => (<li key={course.id}>{course.name}</li>))
        }
    </ul>
);

function Task(props) {
    return (
        <>
            <h2
                id="title"
                className="element"
                style={{ backgroundColor: "orange", color: "black" }}
            >
                Hello, My name is {props.name} and age is {props.age}
            </h2>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(element);
root.render(App("Raghav Dolyar"));
// root.render(<App />);

root.render(element);

root.render(<Task name="Raghav Dolyar" age="19" />)


// --- Mini Project ---

function Header() {
    return (
        <h1>Welcome to the Election Commission of India, New Delhi</h1>
    );
}

function Main({ user }) {
    return (
        <>
            <h2>Hi {user.name}</h2>
            <h3>{user.age >= 18 ? "You are eligible for voting" : "You are not eligible yet!"}</h3>
            <h3>You belong to the village {user.village}</h3>
        </>
    );
}

function Footer() {
    return (
        <h3>Thanks for visiting our website</h3>
    );
}

function App() {
    return (
        <>
            <Header />
            <Main user={{ name: "Raghav", age: 19, village: "Alahar" }} />
            <Footer />
        </>
    );
}

root.render(<App />);
