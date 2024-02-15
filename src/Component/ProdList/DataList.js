import React from 'react'

function DataList(props) {

    const onDelete =(id)=>{
        props.onDeleteHandler(id)
    }
    
  return (
    <React.Fragment>
      <h1>Products</h1>
      <ul>
        {props.items.map((ele)=>(
            <li key={ele.id}>
                   Id:{ele.id}
                   Name:{ele.name}
                   Price:{ele.price} 
                   <button onClick={()=>onDelete(ele.id)}>Delete</button>
            </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default DataList
