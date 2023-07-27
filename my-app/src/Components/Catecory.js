import React, { Component } from 'react';
class Catecory extends Component {
    constructor(props){
        super(props);

    }
    render() { 
        return (
            <div 
            onClick={() => {
              this.props.SelectCatecory( this.props.Item);
              
              
            }}
            key={ this.props.Item}
            className={this.props.SelectdCatecory.toString().trim()==this.props.Item.toString().trim()?"catecory-item selected":"catecory-item"}
          >
            { this.props.Item}{" "}
            {this.props.name}
          </div>

        );
    }
}
 
export default Catecory;