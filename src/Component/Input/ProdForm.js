import React, { useState } from 'react'

function Input(props) {
    const [prodid, setProdId] = useState('')
    const [prodPrice, setProdPrice] = useState('')
    const [prodName, setProdName] = useState('')
    
    const prodIdChangeHandler =(event)=>{
      setProdId(event.target.value)
    }
  
    const prodPriceChangeHandler =(event)=>{
      setProdPrice(event.target.value)
    }
    
    const procNameChangeHandler = (event) =>{
      setProdName(event.target.value)
    }
   
  
    const onSbmitHandler=(event)=>{
      event.preventDefault()
      // console.log(prodid, prodPrice, prodName )
  
      let updateData = {
        id: prodid,
        name: prodName,
        price: prodPrice,
      }
      props.onReceiveDataHandle(updateData)
      // console.log('form',updateData.category)
  
      setProdId('')
      setProdName('')
      setProdPrice('')
      // console.log(updateData)
    }
  
    return (
      <div>
        <form onSubmit={onSbmitHandler}>
          <div>
            <label>Product Id</label>
            <input type='number' placeholder='Enter Id' value={prodid} onChange={prodIdChangeHandler}/>
          </div>
          <div>
            <label>Selling Price</label>
            <input type='text' placeholder='Enter Price' value={prodPrice} onChange={prodPriceChangeHandler}/>
          </div>
          <div>
            <label>Product Name</label>
            <input type='text' placeholder='Enter product name' value={prodName} onChange={procNameChangeHandler}/>
          </div>
          <button type='submit'>Add Product</button>
        </form>
      </div>
  )
}

export default Input
