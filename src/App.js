  import React, { useEffect, useState } from "react";
  import ProdForm from "./Component/Input/ProdForm";
  import DataList from "./Component/ProdList/DataList";
  import Totalamt from "./Component/ProdTotal/Totalamt";
  import Card from "./Component/Ui/Card";

  function App() {
    const [dataItem, setDataItem] = useState([]);
    const [duplicateId, setDuplicateId] = useState(null); // State to store duplicate ID
    // const [idIsNotValid, setIdIsNotValid] = useState(false); // State to control the visibility of the duplicate modal
  
    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("dataItem"));
      if (storedData) {
        setDataItem(storedData);
      }
    }, []);


    const onReceiveData = (enterData) => {
      //reject dunlicate id then update localstorage
      if (dataItem.some((item) => item.id === enterData.id)) {
        setDuplicateId(enterData.id);
        // setIdIsNotValid(true); 
        return;
      }
  
      const updatedData = [...dataItem, enterData];
      setDataItem(updatedData);
      localStorage.setItem("dataItem", JSON.stringify(updatedData));
    };
  

    const onDeleteHandler = (id) => {
      const updatedList = dataItem.filter((item) => item.id !== id);
      setDataItem(updatedList);
      localStorage.setItem("dataItem", JSON.stringify(updatedList));
    };

    const totalAmount = dataItem.reduce((total, item) => {
      return total + parseInt(item.price);
    }, 0);

    return (
      <>
        <Card>
          <h1>Shopping Admin App</h1>
          <ProdForm onReceiveDataHandle={onReceiveData} />
          <DataList items={dataItem} onDeleteHandler={onDeleteHandler} />
          <Totalamt amount={totalAmount} />
        </Card>
      {/* this will write latest all reject functionality*/}
        {/* <Card>
       {showDuplicateModal && <h1 onClick={()=>{setShowDuplicateModal(false)}}>Dublicate id is found</h1>}
        </Card> */}
      </>
    );
  }

  export default App;
