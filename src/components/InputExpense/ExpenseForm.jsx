import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [newInput, setNewInput] = useState({ title: "", amount: "", date: "" });

  function titleHandler(event) {
    setNewInput((prevInput) => {
      return { ...prevInput, title: event.target.value };
    });
  }
  function amountHandler(event) {
    setNewInput((prevInput) => {
      return { ...prevInput, amount: event.target.value };
    });
  }
  function dateHandler(event) {
    setNewInput((prevInput) => {
      return { ...prevInput, date: event.target.value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    const inputDatas = {
      titleInput: newInput.title,
      amountInput: newInput.amount,
      dateInput: new Date(newInput.date),
    };

    props.saveInputData(inputDatas);
    setNewInput({
      title: "",
      amount: "",
      date: "",
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div>
          <label className="label">Title</label>
          <input
            onChange={titleHandler}
            value={newInput.title}
            type="text"
            className="input"
          />
        </div>
        <div>
          <label className="label">Amount</label>
          <input
            onChange={amountHandler}
            value={newInput.amount}
            type="number"
            min="0.01"
            step="0.01"
            className="input"
          />
        </div>
        <div>
          <label className="label">Date</label>
          <input
            onChange={dateHandler}
            value={newInput.date}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            className="input"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
