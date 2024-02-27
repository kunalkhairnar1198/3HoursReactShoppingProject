import React from 'react'
import classes from './Totalamt.module.css'
function Totalamt(props) {

  return (
    <React.Fragment >
      <h2 className={classes.amt}>Total value of Worth of all added Products Rs : {props.amount}</h2>
    </React.Fragment>
  )
}

export default Totalamt