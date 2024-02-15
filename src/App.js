import React, { useEffect, useState } from "react";
import ProdForm from "./Component/Input/ProdForm";
import DataList from "./Component/ProdList/DataList";
import Totalamt from "./Component/ProdTotal/Totalamt";

function App() {

  const [dataItem, setDataItem] = useState([{
      id:'01',
      name: 'Tv',
      price : 5000,
  }])

  const onReceiveData=(enterData)=>{
  
    setDataItem(prevData => [...prevData, enterData]);

    localStorage.setItem('id', JSON.stringify([...dataItem, enterData]))
  }
  // console.log('dataItem ',dataItem)

      useEffect(()=>{
        let storedata = JSON.parse(localStorage.getItem('id',dataItem))
          if(storedata){
            setDataItem(storedata)
          }
      },[])

  const onDeleteHandler=(id)=>{
    const updatedlist = dataItem.filter((ele)=>ele.id !== id)
    setDataItem(updatedlist)
    localStorage.setItem('id', JSON.stringify(updatedlist))
  }

  const totalAmount = dataItem.reduce((total, item) => {
    return total + parseInt(item.price);
  }, 0);

  return (
    <>
    <h1>Shopping Admin App</h1>
    
         <ProdForm onReceiveDataHandle={onReceiveData}/>
          <DataList items={dataItem}  onDeleteHandler={onDeleteHandler}/>
          <Totalamt amount={totalAmount}/>
    </>
  );
}

export default App;