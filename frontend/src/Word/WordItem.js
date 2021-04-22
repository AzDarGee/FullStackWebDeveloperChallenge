import React from "react";
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/Styles"


const useStyles = makeStyles({
    root: {
        padding: "1em",
        margin: "1em",
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }
})

export default function WordItem(props) {
    const classes = useStyles();
    return(
        <div className="word-list-container">
            <Paper elevation={10} className={classes.root} key={props.item.id} id="word-list-item">
                <Typography variant="overline" key={ Math.random().toString(36).substr(2, 9) } id="word-item">{props.item.word}</Typography> 
            </Paper>
        </div>
    )
}

