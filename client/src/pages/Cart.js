import React, { useState } from 'react'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import CartItems from '../components/CartItems'

const Cart = () => {
  const classes = {
    root: {
      flexGrow: 1,
      margin: 30,
    }
  };

  const [state,setState] = useState({
    checkout: false,
  })


  return (
    <div style={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6} sm={6}>
          <CartItems checkout={state.checkout}
            setCheckout={setState} />
        </Grid>
          <Grid item xs={6} sm={6}>
              <Checkout />
          </Grid>
      </Grid>
    </div>
  )

}



export default withStyles(styles)(Cart)
