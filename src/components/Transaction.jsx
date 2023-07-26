import  {useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";
import PropTypes from 'prop-types';




export const Transaction = ({transaction}) => { 
     const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    Transaction.propTypes = {
      transaction: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired
      }).isRequired
    };

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'} key={transaction.id}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
          </li>
  )
}
