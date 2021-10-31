// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Home/Header/Header';
import Services from './components/Home/Services/Services';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AboutUs from './components/AboutUs/AboutUs';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs/ContactUs';
import Register from './components/Home/Register/Register';
import Login from './components/Home/Login/Login';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import Home from './components/Home/Home';
import Footer from './components/Home/Footer/Footer';
import ServiceDetail from './components/Home/ServiceDetail/ServiceDetail';
import Hotels from './components/Home/Hotels/Hotels';
import Booking from './components/AdminPanel/Booking/Booking';
import ManagePackage from './components/AdminPanel/ManagePackage/ManagePackage';
import AddPackage from './components/AdminPanel/AddPackage/AddPackage';
import AllPackage from './components/AdminPanel/AllPackage/AllPackage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path='/services'>
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path='/servicedetail/:id'>
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path='/contact'>
              <ContactUs></ContactUs>
            </Route>
            <Route path='/manageBooking'>
              <ManagePackage></ManagePackage>
            </Route>
            <Route path='/addPackage'>
              <AddPackage></AddPackage>
            </Route>
            <Route path='/allPackage'>
              <AllPackage></AllPackage>
            </Route>
            <Route path='/hotels'>
              <Hotels></Hotels>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
