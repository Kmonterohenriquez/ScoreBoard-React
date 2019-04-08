import React, { Component } from 'react';

class AddPlayerForm extends Component{

    state={
        value:''
        };
    
    handleValueChange  =(e)=> {
        this.setState({ value: e.target.value});
    }

    handleSubmit =(e)=>{
        //this is used to prevent that the browser reload itself
       // (I do this to prevent losing the current data on the scoreboard)
        e.preventDefault();
        this.props.AddPlayer(this.state.value);
        this.setState({value:''});
    }

    render(){
        console.log(this.state.value)
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter a player's name"
                />

                <input 
                    type='submit'
                    value='Add Player'
                />
            </form>
        );
    }
}

export default AddPlayerForm;