import React from 'react'
import classes from './ItemCard.module.css'
function ItemCard(props) {

return (
    <div className={classes.itemCard}>
      {props.children}
    </div>
  )
}

export default ItemCard
