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
        
        this.searchWords = this.searchWords.bind(this);
        this.addWord = this.addWord.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    searchWords(event) {
        event.preventDefault();
        this.formSubmit(event.target);
    }

    addWord(event) {
        event.preventDefault();
        this.formSubmit(event.target);
    }

    async formSubmit(formData) {
        var data = new FormData(formData);

        var finalURL = this.state.words_url + "find_words";


        await fetch(finalURL, {
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
                    onSubmit={this.addWord}
                    id="words_form"
                    autoComplete="off">
                   
                    <TextField 
                        id="restaurant-search-input"
                        label="Search"
                        variant="outlined"
                        type="text"
                        name="search"
                        onChange={this.handleInputChange} />
                        
                    <Button 
                        variant="contained"
                        color="primary"
                        type="submit"
                        id="add-word-submit">
                    Add
                    </Button>

                    <Button 
                        variant="contained"
                        color="primary"
                        type="button"
                        id="search-word-submit" 
                        onClick={this.searchWords}>
                    Search
                    </Button>
                </form>
                <hr />
            </div>
        )
    }
}

export default WordForm