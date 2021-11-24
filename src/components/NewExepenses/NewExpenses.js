import './NewExpenses.css';
import ExpensesForm from './ExpensesForm';
import { useState } from 'react';
const NewExpenses = (props) => {

    const [isEditing,setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        setIsEditing(false);
        props.onAddExpense(expenseData)
    }
    
    const startEditingHandler = ()=>{
        setIsEditing(true);
    }

    const stopEditingHandler = ()=>{
        setIsEditing(false);
    }

    return ( 
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
           {isEditing && <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} onCancle={stopEditingHandler}></ExpensesForm>}
        </div>
     );
}
 
export default NewExpenses;