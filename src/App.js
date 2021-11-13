import { Box } from "@mui/system";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Explore from "./components/Explore/Explore";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Register from "./components/Login/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import Purchase from "./components/Purchase/Purchase";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";

function App() {
  return (
    <Box>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/collection">
              <Explore></Explore>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/products/:productId">
              <Header />
              <Purchase></Purchase>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </Box>
  );
}

export default App;
