import React,{Suspense} from 'react';
import './App.css';
import LazyLoad from './lazyloading/Lazyload';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
const Lazylogin=React.lazy(()=>import("./components/Login"));
const Lazylogout=React.lazy(()=>import("./components/Logout"));
function App() {
  const user = useSelector(selectUser);
  return (
    <div>
    <Suspense fallback={<LazyLoad/>}>
      {user ? <Lazylogout/> : <Lazylogin/>}
      </Suspense>
    </div>
    )
  
}

export default App;
