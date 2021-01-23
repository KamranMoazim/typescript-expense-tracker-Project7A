import React from "react";
import { Header, Balance, IncomeExpense, History, AddTransaction } from './Components/Index';
// import "./Style.css";
import "./App.css";
import { TransactionProvider } from "./Context/TransactionContext";

function App() {
  return (
    <TransactionProvider>
      <div className="container1">
        <Header />
        <div>
          <Balance />
          <IncomeExpense />
          <History />
          <AddTransaction />
        </div>
      </div>
    </TransactionProvider>
  );
}

export default App;




// import Header  from './components/Header'
// import Balance  from './components/Balance'
// import IncomeExpence  from './components/IncomeExpence'
// import TransactionList  from './components/TransactionList'
// import AddTransaction  from './components/AddTransaction'

// import Context from './context/Context'

// import './App.css';

// function App() {
//   return (
//     <Context>
//       <div className="container1">
//         <Header />
//         <Balance />
//         <IncomeExpence />
//         <TransactionList />
//         <AddTransaction />
//         <Context />
//         </div>
//     </Context>
//   );
// }

// export default App;
