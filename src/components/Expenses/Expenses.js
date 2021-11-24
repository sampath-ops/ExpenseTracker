import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react';
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('2020')
    const expenses = props.expenses;
    const filterChangehandler = (selectedYear)=>{
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = expenses.filter(expense => {
       return expense.date.getFullYear() === parseInt(filteredYear)
    })

    return ( 
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterChangehandler} selected={filteredYear}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}></ExpensesList>
            </Card>
        </div>
       
     );
}
 
export default Expenses;