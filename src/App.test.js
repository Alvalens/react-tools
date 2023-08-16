import { render, screen } from "@testing-library/react";
import App from "./App";
import TodoList from "./pages/Todo";
import Notes from "./pages/Note";
import Expense from "./pages/Expense";

// home component
test("renders Home component without errors", () => {
  render(<App />);
  const header = screen.getByText(/About this project/i);
  expect(header).toBeInTheDocument();
});

// todo list component
test("renders TodoList component without errors", () => {
  render(
    <TodoList/>
  );

  // test elements in TodoList component
  const todoListTitle = screen.getByText(/Todo List/i);
  expect(todoListTitle).toBeInTheDocument();
  const addTodoButton = screen.getByRole("button", { name: /New Todo/i });
  expect(addTodoButton).toBeInTheDocument();
});

// notes component
test("renders Notes component without errors", () => {
  render(
    <Notes/>
  );

  // test elements in Notes component
  const notesTitle = screen.getAllByText(/Notes/i)[0];
  expect(notesTitle).toBeInTheDocument();
  const addNoteButton = screen.getByRole("button", { name: /New Note/i });
  expect(addNoteButton).toBeInTheDocument();
});

// expense component
test("renders Expense component without errors", () => {
  render(
    <Expense/>
  );

  // test elements in Expense component
  const expenseTitle = screen.getByText(/Expense Tracker/i);
  expect(expenseTitle).toBeInTheDocument();
  const addExpenseButton = screen.getByRole("button", { name: /Expense/i });
  expect(addExpenseButton).toBeInTheDocument();
  const addIncomeButton = screen.getByRole("button", { name: /Income/i });
  expect(addIncomeButton).toBeInTheDocument();
});