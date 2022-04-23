import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import UsersList from "./components/users-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

document.body.style.backgroundImage="url('https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/rF_6xyohit7ckhp9/videoblocks-stop-motion-close-up-of-objects-for-exercise-on-gray-backgroundhealthy-lifestyle-and-fitness-concept_bgyabeap7_thumbnail-1080_05.png')";
document.body.style.backgroundSize="1300px 700px";
document.body.style.backgroundRepeat="no-repeat";
document.body.style.backgroundColor="#c9cee1";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path = "/" exact component={ExercisesList} />
        <Route path = "/users" component={UsersList} />
        <Route path = "/edit/:id" component={EditExercise} />
        <Route path = "/create" component={CreateExercise} />
        <Route path = "/user" component={CreateUser} />
      </div>  
    </Router>
  );
}

export default App;