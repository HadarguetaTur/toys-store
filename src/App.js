import './assets/scss/global.scss'
import Home from './routes/home/home.component';
import { Route, Routes,Outlet } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import SingIn from './routes/sing-in/sing-in.component';


const Shop =()=>{
  return <h1>Shop</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='sing-in' element={<SingIn/>}/>
      </Route>
    </Routes>

  );
}

export default App;
