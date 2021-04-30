import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

class Paginate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            length: 0
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <Grid container>
                <Grid item xs>
                    PAGINATION
                </Grid>
            </Grid>
        )
    }
}

export default Paginate