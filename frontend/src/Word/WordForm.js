import React, { Component } from "react"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from "@material-ui/core/Grid"


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
        this.handleFileUpload = this.handleFileUpload.bind(this);
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

    handleAddWord(event) {
        event.preventDefault();
        this.formSubmit(event.target);
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

    handleFileUpload(event) {
        let file = event.target.files[0];
        let formData = new FormData();
        
        formData.append('file', file);

        var uploadFileURL = this.state.words_url + 'upload_file';

        fetch(uploadFileURL, {
            method: "POST",
            mode: "cors",
            body: formData
        }).then(response => response.json())
        .then(response => this.props.updateWordsList(response))
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.handleAddWord}
                    id="words_form"
                    autoComplete="off">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField 
                                id="word-input"
                                label="Search or Add Word"
                                variant="outlined"
                                type="text"
                                name="word"
                                onChange={this.handleInputChange} fullWidth/>
                        </Grid>
                        
                        <Grid item xs={3}>
                            <Button 
                                variant="contained"
                                color="primary"
                                key="2"
                                type="submit"
                                id="add-word-submit"
                                value="submit2"
                                name="submit2" fullWidth>
                            Add
                            </Button>
                        </Grid>

                        <Grid item xs={3}>
                            <Button 
                                variant="contained"
                                color="primary"
                                type="button"
                                key="1"
                                id="search-word-submit"
                                value="submit1"
                                name="submit1"
                                onClick={this.handleSearchWord} fullWidth>
                            Search
                            </Button>
                        </Grid>

                        <Grid item xs={3}>
                            <Button 
                                variant="contained"
                                color="primary"
                                key="3"
                                type="button"
                                id="all-words-submit"
                                value="submit3"
                                name="submit3"
                                onClick={this.props.updateAllWordsList} fullWidth>
                            ALL
                            </Button>
                        </Grid>

                        <Grid item xs={3}>
                            <Button
                                variant="contained"
                                component="label"
                                color="primary"
                                key="4"
                                id="file-upload"
                                fullWidth>
                                Upload .TXT File
                                <input
                                    type="file"
                                    name="file"
                                    onChange={this.handleFileUpload}
                                    hidden
                                />
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <br />
                <hr />
            </div>
        )
    }
}

export default WordForm