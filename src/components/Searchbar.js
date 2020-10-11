import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    inputValue: "",
  };

  inputHandler = e =>{
      this.setState({inputValue: e.target.value})
  }

  onSubmitHandler = e =>{
      e.preventDefault();
      const {onSearch}= this.props;
      onSearch(this.state.inputValue);
      this.setState({inputValue:''});
  }

  render() {
    const { inputValue } = this.state;
    return (<header className="Searchbar">
      <form className="SearchForm" onSubmit={this.onSubmitHandler}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
        onChange={this.inputHandler}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          value={inputValue}
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>)
  }
}

export default Searchbar;
