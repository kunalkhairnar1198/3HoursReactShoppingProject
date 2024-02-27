import React, { useState } from 'react'
import Card from '../Ui/Card'
import classes from './ProdForm.module.css'

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
      <Card>
        <form onSubmit={onSbmitHandler} className={classes.form}>
        <div className={classes.container}>
          <div className={classes.formControl}>
            <label className={classes.label}>Product Id</label>
            <input type='number' className={classes.input} placeholder='Enter Id' value={prodid} onChange={prodIdChangeHandler}/>
          </div>
          <div className={classes.formControl}>
            <label className={classes.label}>Selling Price</label>
            <input type='number' className={classes.input} placeholder='Enter Price' value={prodPrice} onChange={prodPriceChangeHandler}/>
          </div>
          <div className={classes.formControl}>
            <label className={classes.label}>Product Name</label>
            <input type='text' className={classes.input} placeholder='Enter product name' value={prodName} onChange={procNameChangeHandler}/>
          </div>
        </div>
          <button type='submit' className={classes.button}>Add Product</button>
        </form>
      </Card>
  )
}

export default Input
