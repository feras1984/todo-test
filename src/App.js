import logo from './logo.svg';
import './App.css';
import NavbarComponent from "./components/navbar-component";
import List from "./components/list";
import Details from "./components/details";
import Dashboard from "./components/dashboard";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NewTodo from "./components/new-todo";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
          <NavbarComponent />
        <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path={"/list"} element={<List />} />
            <Route path={"/list/:id"} element={<Details />} />
            <Route path={"/new"} element={<NewTodo />}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
