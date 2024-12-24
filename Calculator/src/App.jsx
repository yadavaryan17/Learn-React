import style from './App.module.css'
import Button_container from './container/Button_container'
import Input_container from './container/Input_container'
import { useState } from 'react';

function App() {
  let [calVal,setcalVal] = useState("");
  const onClickButton = (list) =>{
    if(list === "C"){
      setcalVal("");
    }
    else if(list === "="){
       const result = eval(calVal);
       setcalVal(result);
    }
    
  
  else{
    let newDisplayValue = calVal+list;
    setcalVal(newDisplayValue);
  }
  }
  return (
    <>
    <div className={style.calculator}>
      <Input_container displayValue = {calVal}></Input_container>
      <Button_container onClickButton = {onClickButton}></Button_container>
     
    </div>
        </>
  )
}

export default App;
