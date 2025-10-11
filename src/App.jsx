import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { AuthRoute, GuestRoute, Navbar } from "./components";
import { Article, Auth, Editor, Footer, Home, Settings } from "./pages";
import axios from "axios";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import { warmUpBackend } from "./utils/coldStarts";

function App() {
  
  React.useEffect(() => {
    warmUpBackend(); 
  }, []);
  
  function setAuthorizationToken() {
    const jwt = window.localStorage.getItem("jwtToken");

    if (!jwt) {
      axios.defaults.headers.Authorization = ""; // Clear Authorization header if jwtToken is not present
      return;
    }

    const parsedJwt = JSON.parse(atob(jwt));
    if (Date.now() > parsedJwt.expiry) {
      console.log("Token expired");
    }
    axios.defaults.headers.Authorization = `Token ${parsedJwt.token}`;
  }
  useEffect(() => {
    setAuthorizationToken();
  }, []);
  return (
    <Router>
      <div className="App_Container">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blogs" element={<Home />} />
            <Route path="/register" element={<GuestRoute />}>
              <Route path="/register" element={<Auth key="register" />} />
            </Route>

            <Route path="/login" element={<GuestRoute />}>
              <Route path="/login" element={<Auth key="login" />} />
            </Route>
            <Route path="/settings" element={<AuthRoute />}>
              <Route path="/settings" element={<Settings />} />
            </Route>
            <Route path="/editor" element={<AuthRoute />}>
              <Route path="/editor" element={<Editor />} />
            </Route>
            <Route path="/editor/:slug" element={<h1>Editor </h1>} />
            <Route path="/article/:slug" element={<Article />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/:username" element={<ProfilePage />} />

            <Route path="/@:username" element={<AuthRoute />}>
              <Route index element={<ProfilePage />} />
            </Route>
            <Route path="/about" element={<About />}>
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
