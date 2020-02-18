import React, { useState } from 'react'
import IconButton from 'material-ui/IconButton'
import AddCartIcon from 'material-ui-icons/AddShoppingCart'
import DisabledCartIcon from 'material-ui-icons/RemoveShoppingCart'
import API from "../../utils/API";
import { withRouter } from 'react-router-dom'



const AddToCart = withRouter(({ history, ...props }) => {
    const classes = {
        iconButton: {
            width: '28px',
            height: '28px'
        },
        disabledIconButton: {
            color: '#7f7563',
            width: '28px',
            height: '28px'
        }
    };

    const [state, setState] = useState({
        redirect: false
    });

    const addToCart = () => {
        console.log("api.update");
    };

    return (
        <span>
            {history.location.pathname.includes("/user") ?
                (<IconButton color="secondary" dense="dense" onClick={addToCart}>
                    <AddCartIcon style={classes.iconButton} />
                </IconButton>) :
                (<IconButton disabled={true} color="secondary" dense="dense">
                    <AddCartIcon style={classes.disabledIconButton} />
                </IconButton>)}
        </span>
    )
})


export default AddToCart;
