import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import React, { Component } from "react";

class App extends Component {
    state = {
        counters: [],
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const idx = counters.indexOf(counter);
        counters[idx] = { ...counter };
        counters[idx].value++;
        this.setState({ counters });
    };

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const idx = counters.indexOf(counter);
        counters[idx] = { ...counter };
        counters[idx].value--;
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    handleDelete = (counter) => {
        const counters = this.state.counters.filter((c) => c.id !== counter.id);
        this.setState({ counters });
    };

    handleCreate = (create) => {
        const value = document.getElementById("value").value;
        if (value !== "") {
            const counters = this.state.counters;
            const newCounter = {
                id: counters.length + 1,
                value: parseInt(value),
            };
            counters.push(newCounter);
            this.setState({ counters });
            document.getElementById("value").value = "";
        }
    };

    render() {
        return (
            <React.Fragment className="container-fluid d-flex flex-column ms-5 justify-content-center align-items-center">
                <NavBar
                    className="container m-5"
                    totalCounters={
                        this.state.counters.filter((c) => c.value > 0).length
                    }
                />
                <main className="container m-5">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onCreate={this.handleCreate}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
