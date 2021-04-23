import React, { Component } from "react"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'



class WordForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            words_url: props.words_url,
            inputValue: ""
        }
        
        this.handleAddWord = this.handleAddWord.bind(this);
        this.handleSearchWord = this.handleSearchWord.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleAddWord(event) {
        event.preventDefault();
        this.formSubmit(event.target);
    }

    async handleSearchWord(event) {
        event.preventDefault();
        var searchURL = this.state.words_url + this.state.inputValue;

        await fetch(searchURL, {
            method: "GET",
            mode: "cors"
        }).then(response => response.json())
        .then(response => this.props.updateSearchWordsList(response))
        .catch(error => console.log(error))
    }

    async formSubmit(formData) {
        var data = new FormData(formData);
        var addURL = this.state.words_url

        await fetch(addURL, {
            method: "POST",
            mode: "cors",
            body: data
        }).then(response => response.json())
        .then(response => this.props.updateWordsList(response))
        .catch(error => console.log(error))
    }

    handleInputChange(event) {
        this.setState({ inputValue: event.target.value })
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.handleAddWord}
                    id="words_form"
                    autoComplete="off">
                   
                    <TextField 
                        id="word-input"
                        label="Search"
                        variant="outlined"
                        type="text"
                        name="word"
                        onChange={this.handleInputChange} />
                    
                    <Button 
                        variant="contained"
                        color="primary"
                        type="button"
                        key="1"
                        id="search-word-submit"
                        value="submit1"
                        name="submit1"
                        onClick={this.handleSearchWord}>
                    Search
                    </Button>

                    <Button 
                        variant="contained"
                        color="primary"
                        key="2"
                        type="submit"
                        id="add-word-submit"
                        value="submit2"
                        name="submit2">
                    Add
                    </Button>

                    <Button 
                        variant="contained"
                        color="primary"
                        key="3"
                        type="button"
                        id="all-words-submit"
                        value="submit3"
                        name="submit3"
                        onClick={this.props.updateAllWordsList}>
                    ALL
                    </Button>

                </form>
                <hr />
            </div>
        )
    }
}

export default WordForm