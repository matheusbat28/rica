import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import CreateService from './pages/service/create';
import ListService from './pages/service/list';
import EditService from './pages/service/edit';
import { useNavigate } from 'react-router-dom';
import { isLogged, logout } from './controls/login';
import { useParams } from 'react-router-dom';
export default function App() {

  function PrivateRoute({ element, ...rest }) {
    const [logged, setLogged] = React.useState(null);
    const navigate = useNavigate();

    React.useEffect(() => {
      const checkLogin = async () => {
        const response = await isLogged();
        setLogged(response);
        if (response) {
        } else {
          logout();
          navigate("/login");
        }
      };

      checkLogin();
    }, [navigate]);

    if (logged === null) {
      return <div>Loading...</div>;
    }

    return logged ? element : null;
  }

  function EditServiceWrapper() {
    const { id } = useParams();
    return <EditService id={id} />;
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service/create" element={<PrivateRoute element={<CreateService />} />} />
        <Route path="/service/list" element={<PrivateRoute element={<ListService />} />} />
        <Route path="/service/edit/:id" element={<PrivateRoute element={<EditServiceWrapper />} />} />
      </Routes>
    </Router>
  );
} 