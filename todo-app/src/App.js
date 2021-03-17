import React from "react";
// import logo from "./logo.svg";
import Dashboard from "./Components/dashboard";
import "./App.css";

class App extends React.Component {
    state = { count: 0, dashboards: [] };

    addBoard = () => {
        this.setState({
            count: this.state.count + 1,
            dashboards: [
                ...this.state.dashboards,
                <Dashboard key={this.state.count} />,
            ],
        });
    };

    render() {
        return (
            <div className="Main">
                <div className="Todoapp">
                    <input type="text" placeholder="Our To Do App" />
                </div>
                <div className="App">
                    <Dashboard />
                    {this.state.dashboards}
                    <div className="plus">
                        <button type="submit" onClick={(e) => {
                            e.preventDefault();
                            this.addBoard();
                        }}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
