import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import WordForm from './WordForm'
import WordItem from './WordItem'
import Typography from "@material-ui/core/Typography"
import './Word.css'

const words_url = 'http://localhost:3000/words/'

class Word extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            length: 0
        }
        this.updateWordsList = this.updateWordsList.bind(this);
    }

    componentDidMount() {
        this.getAllWords();
    }

    getAllWords() {
        fetch(words_url)
            .then(response => response.json())
            .then(response_items => {
                this.setState({
                    items: response_items,
                    length: response_items.length
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    updateWordsList(words_response) {
        this.setState({
            items: words_response,
            length: words_response.length
        })
        console.log(words_response)
    }

    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <WordForm 
                        words_url = {words_url} 
                        updateWordsList={this.updateWordsList} />
                    <Typography variant="overline">Results: {this.state.length}</Typography>
                </Grid>
                <div className="word-item-container">
                    {this.state.items.map((item) => (
                        <WordItem key={item.id} item={item} />
                    ))}
                </div>  
                
            </Grid>
        )
    }
}

export default Word