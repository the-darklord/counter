import React, { Component } from "react";

class Counter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <h1>
                        <span className={this.getBadgeClasses()}>
                            {this.formatCount()}
                        </span>
                    </h1>
                </div>
                <div className="col-6">
                    <button
                        onClick={() =>
                            this.props.onIncrement(this.props.counter)
                        }
                        className="btn btn-info btn-lg"
                    >
                        +
                    </button>
                    <button
                        onClick={() =>
                            this.props.onDecrement(this.props.counter)
                        }
                        className="btn btn-info btn-lg m-4"
                        disabled={
                            this.props.counter.value === 0 ? "disabled" : ""
                        }
                    >
                        -
                    </button>
                    <button
                        onClick={() => this.props.onDelete(this.props.counter)}
                        className="btn btn-danger btn-lg"
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-4 text-bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
