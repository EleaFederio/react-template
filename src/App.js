const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h4", {}, props.animal),
        React.createElement("h4", {}, props.breed)
    ])
}

// App creating Object
const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {id: "brand"}, "Adopt Me!"),
        React.createElement(Pet, {
            key: 1,
            name: "Miming",
            animal: "Cat",
            breed: "Domestic"
        }),
        React.createElement(Pet, {
            key: 2,
            name: "Didoy",
            animal: "Dog",
            breed: "Domestic"
        }),
        React.createElement(Pet, {
            key: 3,
            name: "Miming",
            animal: "Cat",
            breed: "Domestic"
        })
    );
};

// App creating instance of the object
ReactDOM.render(React.createElement(App), document.getElementById("root"));