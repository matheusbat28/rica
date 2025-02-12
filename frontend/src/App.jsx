import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';

export default function App() {

  function PrivateRoute({ element, ...rest }) {
    const [logged, setLogged] = React.useState(null);
    const navigate = useNavigate();

    React.useEffect(() => {
      const checkLogin = async () => {
        const response = await isLogged();
        setLogged(response);
        if (response) {
          await getMe();
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
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
} 