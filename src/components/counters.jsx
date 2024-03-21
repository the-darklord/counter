import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        return (
            <div className="row m-4">
                <div className="col-12 m-4">
                    <label for="value" className="col-4">
                        {" "}
                        Value :{" "}
                    </label>
                    <input
                        type="number"
                        id="value"
                        className="col-4"
                        placeholder="Enter a value to add a new counter"
                        min="0"
                    />
                    <br />
                    <br />
                    <button
                        onClick={this.props.onCreate}
                        className="btn btn-success btn-sm col-3"
                    >
                        Create New Counter
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                        onClick={this.props.onReset}
                        className="btn btn-primary btn-sm col-3"
                    >
                        Reset
                    </button>
                </div>
                <div className="col-12 m-4">
                    {this.props.counters.map((counter) => (
                        <Counter
                            key={counter.id}
                            onDelete={this.props.onDelete}
                            onIncrement={this.props.onIncrement}
                            onDecrement={this.props.onDecrement}
                            counter={counter}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Counters;
