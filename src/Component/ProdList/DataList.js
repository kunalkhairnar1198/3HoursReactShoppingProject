import React from 'react'
import ItemCard from '../Ui/ItemCard'
import classes from './DataList.module.css'

function DataList(props) {

    const onDelete =(id)=>{
        props.onDeleteHandler(id)
    }
   
  return (
    <React.Fragment>
      <h1>Products</h1>
        <div className={classes.itemCardContainer}>
          {props.items.map((ele)=>( 
              <ItemCard key={ele.id}>
                    <header> Id {ele.id}</header> 
                      <p>Name-{ele.name}</p>
                      <p>Price-{ele.price}</p>
                      <button  onClick={()=>onDelete(ele.id)}>Delete</button>
              </ItemCard>

          ))}
        </div>
    </React.Fragment>
  )
}
export default DataList
