import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import TodoState from "./context/TodoContext/TodoState";
import FooterSection from "./Components/FooterSection/FooterSection";
import HeaderSection from "./Components/HeaderSection/HeaderSection";
import InputCheck from "./Components/Main/Components/InputCheck/InputCheck";
import TodoList from "./Components/Main/Components/TodosList/TodosList";
import ActiveTodoList from "./Components/Main/Components/TodosList/ActiveTodoList";
import CompletedTodoList from "./Components/Main/Components/TodosList/CompletedTodoList";
import UpdateInputTodo from "./Components/Main/Components/TodosList/UpdateTodoList";

function App() {
  return (
    <BrowserRouter>
      <TodoState>
        <Router>
          <div className='todoapp'>
            <HeaderSection />
            <section className='main' style={{ display: "block" }}>
              <InputCheck />
              <Switch>
                <Route exact path='/' component={TodoList} />
                <Route exact path='/update' component={UpdateInputTodo} />

                <Route exact path='/active' component={ActiveTodoList} />
                <Route exact path='/completed' component={CompletedTodoList} />
              </Switch>
            </section>
            <FooterSection />
          </div>
        </Router>
      </TodoState>
    </BrowserRouter>
  );
}

export default App;
