import React from 'react';
import './home.css';


class Search extends React.Component{

    state = { category :""};

    onFormSubmit =(event)=>{
        event.preventDefault();
        //console.log(this.state.category);
        this.props.onSubmit(this.state.category)
    }


    render(){
        return(
            <>
                    <div className="ui segment">
                            <form className="ui form" onSubmit={this.onFormSubmit}>
                                <div className="field">
                                    <label>Search Category</label>
                                        <input 
                                        className="searchbar-style"
                                        placeholder="Category"
                                        onChange={(e) => this.setState({category : e.target.value})}
                                         value={this.state.category}
                                        />
                                </div>
                            </form>
                    </div>
            </>
        )
    }

}

export default Search