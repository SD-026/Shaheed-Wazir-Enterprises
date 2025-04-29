import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/User/LoginPage';
import Dashboard from './pages/Admin/Dashboard';
import UserDashboard from './pages/User/Userdashboard';
import CustomerManagement from './pages/Admin/CustomerManagement';
import AddCustomerForm from './pages/User/AddCustomerForm';
import TransactionManagement from './pages/Admin/TransactionManagement';
import AddTransactionForm from './pages/Admin/AddTransactionForm';
import CustomerTransactions from './pages/Admin/CustomerTransactions';
import UserManager from './pages/Admin/UserManager';
import TransactionTrash from './pages/Admin/TransactionTrash';
import AdminViewProfile from './pages/Admin/AdminViewProfile';
import AddUserForm from './pages/Admin/AddUserForm';
import ContactUs from './pages/Contactus';
import AboutUs from './pages/AboutUs';
import ProtectedRoute from './pages/components/ProtectedRoute';
import Navbar from './pages/components/Navbar';
import EditUserPage from './pages/Admin/EditUserPage';
// import UserDashboard from './pages/User/UserDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar><LandingPage /></Navbar>} />
      <Route path="/login" element={<LoginPage />} />
     
     
 

      
     
    
   
      

    

      <Route path="/contactus" element={<Navbar><ContactUs /></Navbar>} />
      <Route path="/aboutus" element={<Navbar><AboutUs /></Navbar>} />

      


      <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
      <Route path="/UserManager" element={<UserManager />} />
      <Route path="/AddUser" element={<AddUserForm />} />
            <Route path="/EditUser/:id" element={<EditUserPage />} />
            <Route path="/TransactionTrash" element={<TransactionTrash />} />
           
            {/* <Route path="/TransactionManagement" element={<TransactionManagement />} /> */}
            {/* <Route path="/CustomerManagement" element={<CustomerManagement />} /> */}
        <Route path="/Userdashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<UserDashboard />} />


        </Route>
        <Route path="/CustomerTransactions/:customerId" element={<CustomerTransactions />} />


        <Route path="/AddTransaction" element={<AddTransactionForm />} />
        <Route path="/AddCustomer" element={<AddCustomerForm />} />

        <Route path="/Profile" element={<AdminViewProfile />} />
        <Route path="/TransactionManagement" element={<TransactionManagement />} />
        <Route path="/AddCustomer" element={<AddCustomerForm />} />
        <Route path="/CustomerManagement" element={<CustomerManagement />} />
        <Route path="/CustomerTransactions/:customerId" element={<CustomerTransactions />} />

        {/* <Route element={<ProtectedRoute allowedRoles={['user']} />}>


        {/* <Route path="/Profile" element={<AdminViewProfile />} /> */}
     
        {/* <Route path="/AddTransaction" element={<AddTransactionForm />} />
      
       
       </Route> */}














    </Routes>
  );
}

export default App;
