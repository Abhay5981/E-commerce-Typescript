import { useState } from 'react'
import CartAmountToggle from './CartAmountToggle'

const AddtoCart = () => {

const[amount, setAmount] = useState(1)

    const setDecrease = () =>{
        amount > 1 ? setAmount(amount -1) : setAmount(1)
    }
    const setIncrease = () =>{
        amount < 3 ? setAmount(amount + 1) : setAmount(1)
    }

  return (
    <>
    <CartAmountToggle 
    amount= {amount} 
    setDecrease ={setDecrease} 
    setIncrease ={setIncrease}
    />
      
    </>
  )
}

export default AddtoCart
