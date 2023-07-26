import { Header } from "./components/header";
import { Balance } from "./components/Balance";
import './App.css';
import { Incomeexpenses } from "./components/Incomeexpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  
  return (
    <GlobalProvider>
     <Header />
     <div className="container">
      < Balance />
      <Incomeexpenses />
      <TransactionList />
      <AddTransaction />
     </div>
    </GlobalProvider>
  )
}

export default App
