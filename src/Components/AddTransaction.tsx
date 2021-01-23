import React, { useState, useContext } from 'react'
import {TransContext} from '../Context/TransactionContext';

const AddTransaction = () => {

    // @ts-ignore
    let { addTransaction } = useContext(TransContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmitTransaction = (event: any) => {
        event.preventDefault();

        if (amount === 0 || text === '') {
            alert("Please Provide The Values");
            return false;
        }

        addTransaction({
            id: Math.floor(Math.random()*100000000),
            desc: text,
            amount,
        })
        setText('');
        setAmount(0)
    }

    const onSubmitExpense = (event: any) => {
        event.preventDefault();

        if (amount === 0 || text === '') {
            alert("Please Provide The Values");
            return false;
        }

        addTransaction({
            id: Math.floor(Math.random() * 1000000),
            desc: text,
            amount: -amount,
        })
    }

    return (
        <div className="addTrans">
            <h2 style={{textAlign:"center"}}>Add Transactions</h2>
            <hr />
            <form >
                <div className="form-control">
                <label htmlFor='text'>Enter Description</label>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Description...' required />
                </div>
                <div className="form-control">
                <label htmlFor='amount'>Amount</label>
                  <input type='number' value={amount} onChange={(e) => setAmount(e.target.valueAsNumber)} placeholder='Enter Amount...' required />
                </div>
            </form>

            <div className="buttons">
                <button onClick={onSubmitTransaction} className="btn1">Add Income</button>
                <button onClick={onSubmitExpense} className="btn2 ">Add Expense</button>
            </div>
        </div>
    )
}

export default AddTransaction;









// import React, { useContext, useState } from 'react'
// import {GlobalContext} from '../context/Context'

// function AddTransaction() {


//     const [description, setDescription] = useState("")
//     const [expense, setExpense] = useState(0)

//     const { addTransaction } = useContext(GlobalContext)

//     // console.log(addTransaction)

//     const onSubmit = e => {
//         e.preventDefault();
    
//         const newTransaction = {
//             description,
//             expense: +expense
//         }

//         addTransaction(newTransaction);

//         setDescription("")
//         setExpense(0)
//     }

//     return (
//         <div>
//             <form onSubmit={onSubmit} >

//                 <label htmlFor="text">Text</label>
//                 <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter text..." required />

//                 <br />

//                 <label htmlFor="amount">Amount</label>
//                 <input type="number" value={expense} onChange={(e) => setExpense(e.target.value)} placeholder="Enter amount..." required />

//                 <button className="btn" >Add transaction</button>
//             </form>
//         </div>
//     )
// }

// export default AddTransaction
