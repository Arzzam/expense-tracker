import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const [expenseExpend, setExpenseExpend] = useState(false);
  var uniq = 0;
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: uniq++,
    };
    props.onAddExpense(expenseData);
    setExpenseExpend(false);
  }

  function expand() {
    setExpenseExpend(true);
  }

  function notExpand() {
    setExpenseExpend(false);
  }

  return (
    <div className="new-expense">
      {!expenseExpend && <button onClick={expand}>Add New Expense</button>}
      {expenseExpend && (
        <ExpenseForm
          onCancel={notExpand}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
