import React, { Component } from 'react';
//export default class Counter extends Component
class Counter extends Component{

    styles = {
        flex : true,
        fontSize : 10,
        fontWeight : "bold"
    }
    render() {
        // console.log("prop",this.props);
        return (
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter.id)} className="btn btn-primary btn-sm m-2">Increment</button>
                <button onClick={() => this.props.onDecrement(this.props.counter.id)} className="btn btn-warning btn-sm m-2">Decrement</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                
            </div>
            
        )
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        if (this.props.counter.value === 0) {
            classes += "warning";
        }
        else {
            classes += "info";
        }
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        if(this.props.counter.value === 0){
            return "Zero";
        }
        else{
            return value;
        }
    }
}

export default Counter;