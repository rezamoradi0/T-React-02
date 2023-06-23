import React, { Component } from 'react';
class HeaderSubject extends Component {
    constructor(props){
        super(props);
        this.state={
            tabIndex:props.index,
            text:props.name,
           
        
        }
    }
    onClickHandler = (theIndex) => {
        
          this.props.handler(theIndex);
       
        };

        
    render() { 
        const classNames="header-name";
        const classNamesSelected="header-name selected";
        return (
        <h3 className={this.props.selected===this.state.tabIndex?classNamesSelected:classNames} onClick={()=>{this.onClickHandler(this.state.tabIndex)}}>{this.state.text}  </h3>
        );
    }
}
 
export default HeaderSubject;