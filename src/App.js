import React, {Component} from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            comment: {},
            comments: [],
        };
    }

    async componentDidMount() {
        const response = await fetch("/comments/all");
        const comments = await response.json();

        this.setState(() => ({
            comments,
        }));
    }

    render() {
        return (
            <div>Hello world!</div>
        );
    }
}

export default App;