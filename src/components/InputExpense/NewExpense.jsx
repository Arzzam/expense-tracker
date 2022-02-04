import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  var uniq = 0;
  function saveInputData(enteredInput) {
    const expenseInput = {
      ...enteredInput,
      id: uniq++,
    };
    props.addInput(expenseInput);
  }

  return (
    <div className="new-expense">
      <ExpenseForm saveInputData={saveInputData} />
    </div>
  );
}

export default NewExpense;
