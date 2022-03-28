import * as React from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { render } from 'react-dom';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import DeliverProductPage from './pages/DeliverProductPage';
import ExpireProduct from './pages/ExpireProduct';
import ProcureProductPage from './pages/ProcureProductPage';
import ProductListPage from './pages/ProductListPage';
import WareHouseRecordBook from './pages/WareHouseRcordBook';
import CheckCapacity from './pages/CheckCapacity';
import RegisterUserPage from './pages/RegisterUser';

type myProps={

};
type myState={

};

class App extends React.Component<myProps,myState> {

  render() {
    return (
    <Router>
            <Routes>
             <Route path='/' element={<LoginPage/>}/>
             <Route path='/login' element={<LoginPage/>}/>
             <Route path='/signup' element={<RegisterUserPage/>}/>
             <Route path='/dashboard' element={<DashboardPage/>}/>
             <Route path='/deliver' element={<DeliverProductPage/>}/>
             <Route path='/expire' element={<ExpireProduct/>}/>
             <Route path='/procurement' element={<ProcureProductPage/>}/>
             <Route path='/productList' element={<ProductListPage/>}/>
             <Route path='/warehouse-record' element={<WareHouseRecordBook/>}/>
             <Route path='/check-capacity' element={<CheckCapacity/>}/>
             <Route  path="*" element={<NotFoundPage />} />
            </Routes>
      </Router>
   );
  }
}

render(<App />, document.getElementById('root'));
export default App;
