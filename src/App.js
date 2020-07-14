import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Students from "./pages/Students/Students";
import AddStudent from "./pages/AddStudent/AddStudent";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/students" exact>
        <Students />
      </Route>
      <Route path="/students/:studentId/edit">
        <AddStudent />
      </Route>
      <Route path="/addstudent">
        <AddStudent />
      </Route>
      <Redirect to="/"/>
    </Switch>
  );
}

export default App;


