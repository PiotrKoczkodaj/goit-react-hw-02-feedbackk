import React, { Component } from "react";

export class Statistics extends Component{

    render() {
    
       const { good,neutral,bad,total,positivePercentage } = this.props
        
        return (

            <div>
                <h3>Statistics</h3>
 <ul>
                <li>good:{good}</li>
                <li>neutral:{neutral}</li>
                <li>bad:{bad}</li>
                <li>Total:{total}</li>
                <li>bad:{positivePercentage}</li>
            </ul>

            </div>
           
            
        )
    }
}