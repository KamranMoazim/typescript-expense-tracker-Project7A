import React, { useContext } from 'react'
import { TransContext } from '../Context/TransactionContext'
const Balance = () => {

    //@ts-ignore
    const {transactions} = useContext(TransContext);
    const totalAmount = transactions.map((transaction: any) => transaction.amount);
    const totalBalance = totalAmount.reduce((total: number, amount: number) => (total += amount), 0).toFixed(2);
    return (
        <div className="balance">
            <h2> Your Balance</h2>
            <h1>$ {totalBalance}</h1>
            <hr />
        </div>
    )
}

export default Balance;



// import React, { useContext } from 'react'
// import {GlobalContext} from '../context/Context'


// function Balance() {

//     const { transactions } = useContext(GlobalContext)

//     // console.log(transactions[0].expense)

//     const amounts = transactions.map((transaction):any => transaction.expense);

//     // console.log(amount)

//     const total = amounts.reduce( (first, second) => (first += second) , 0)

//     // console.log(total)

//     return (
//         <div>
//             <h3>Your Balance </h3>
//             <h1>${total}</h1>
//         </div>
//     )
// }

// export default Balance
