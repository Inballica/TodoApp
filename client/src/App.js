import React from "react";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";

import TodoState from "./context/TodoContext/TodoState";
import FooterSection from "./Components/FooterSection/FooterSection";
import HeaderSection from "./Components/HeaderSection/HeaderSection";
import TodoList from "./Components/Main/Components/TodosList/TodosList";
import ActiveTodoList from "./Components/Main/Components/TodosList/ActiveTodoList";
import CompletedTodoList from "./Components/Main/Components/TodosList/CompletedTodoList";
import UpdateInputTodo from "./Components/Main/Components/TodosList/UpdateTodoList";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <TodoState>
        <Router>
          <div className='todoapp'>
            <HeaderSection />
            <section className='main' style={{ display: "block" }}>
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
