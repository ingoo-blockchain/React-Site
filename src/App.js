import { useUserContext } from "./contexts/UserContext";
import Home from './pages/Home'
import Login from './pages/Login'
import Welcome from './pages/Welcome'
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'

const App = () => {
  const userContext = useUserContext()

  const LoginInfo = userContext.user ? <Welcome /> : <Login />

  return (
    <>
     {/* import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom' */}
      <Router>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="login">Login</Link>
            <Link to="Comment">Comment</Link>
            <Link to="board/list">board</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="login" element={LoginInfo} />
          <Route path="Comment" element={()=>{ return <>Comment</>}} />
          <Route path="board">
            <Route path="list" element={"list"} />
            <Route path="view" element={"view"} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}


export default App;
