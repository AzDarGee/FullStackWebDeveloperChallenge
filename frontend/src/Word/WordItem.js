import React from "react";
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/Styles"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from "@material-ui/icons/HighlightOff"


const useStyles = makeStyles({
    root: {
        padding: "0.2em",
        margin: "0.2em",
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }
})

export default function WordItem(props) {
    const classes = useStyles();

    function handleDelete() {
        props.deleteWord(props.item)
    }

    return(
        <div className="word-list-container">
            <Paper elevation={10} className={classes.root} key={props.item.id} id="word-list-item">
                <Typography variant="overline" key={ Math.random().toString(36).substr(2, 9) } id="word-item">{props.item.word}</Typography>
                <IconButton
                    variant="contained"
                    color="primary"
                    component="span"
                    size="small"
                    onClick={handleDelete}>
                        <DeleteIcon />
                </IconButton>
            </Paper>
        </div>
    )
}

