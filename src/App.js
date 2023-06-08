import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, loadUser } from './actions/user';
import AdminPanel from './components/adminPanel/AdminPanel';
import Timeline from './components/adminPanel/Timeline';
import Projects from './components/adminPanel/Projects';

function App() {
  const dispatch = useDispatch()

  const { isAuthenticated } = useSelector((state) => state.login)
  const { loading, user } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getUser())
    dispatch(loadUser())
  }, [dispatch])

  return (
    <Router>
      {loading ? (<div>Loading</div>) : (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home timelines={user.timeline} skills={user.skills} projects={user.projects} />} />
            <Route path='/about' element={<About about={user.about} />} />
            <Route path='/projects' element={<Project projects={user.projects} />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='/account' element={isAuthenticated ? <AdminPanel /> : <Login />} />
            <Route path='/admin/timeline' element={isAuthenticated ? <Timeline /> : <Login />} />
            <Route path='/admin/project' element={isAuthenticated ? <Projects /> : <Login />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
