import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
    button: {
        backgroundColor: "transparent",
        color: "#fff",
        padding: "8px 60px",
        fontSize: "20px",
        border: "1px solid #fff",
        "&:hover": {
            backgroundColor: "#fff",
            color: "#242424"
        }
    }
}))

const PrimaryButton = (props) => {
    const classes = useStyle()

    return (
        <Button className={classes.button} variant="contained"  onClick={() => props.onClick}>
            {props.label}
        </Button>
    )
}

export default PrimaryButton;
