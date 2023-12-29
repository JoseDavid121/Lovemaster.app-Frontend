import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie"

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const [hasSubscription, setHasSubscription] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
const [areLinksVisible, setLinksVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setLinksVisible(!areLinksVisible);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setLinksVisible(false);
  };

  useEffect(() => {
    async function checkSubscription() {
      try {
        const token = Cookies.get('token');

        if (!token) {
          console.log("No hay token disponible.");
          return;
        }

        const api = axios.create({
          baseURL: 'https://apilovemaster.com/api',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        try {
          const response = await api.get('/check-subscription');
          console.log(response.data);
          const { hasSubscription } = response.data;
          setHasSubscription(hasSubscription);
        } catch (error) {
          console.error("Error al verificar la suscripción:", error);
        }
      } catch (error) {
        console.error("Error al configurar el API:", error);
      }
    }

    checkSubscription();
  }, []);



  return (
    <div className="bod">
      <div className="contain align-items-center justify-content-between max-w-full">
        <nav className="my-1 flex py-4 px-10 rounded-lg navbar" id="navbar">
          <div className="logo">
            <h1 className="text-light">
              <Link to="/">
                <p className="ml-20 font-bold text-light LoveMasterH1">
                  Love Master
                </p>
              </Link>
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button mr-4"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            <i class="bi bi-menu-down"></i>
          </button>

          {/* Navigation Links */}
          <ul
          className={`flex gap-x-2 navbarUl align-items-center ${
            areLinksVisible ? '' : 'hidden'
          }`}
        >
            {isAuthenticated ? (
              <>
                <li>
                  <Link className="" to="/" id="active" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>

                {hasSubscription && (
                  <div>
                    <li>
                      <Link to="/members" className="" onClick={closeMobileMenu}>
                        Members
                      </Link>
                    </li>
                  </div>
                )}

                <li>
                  <Link
                    className="mr-56"
                    to="/"
                    onClick={() => {
                      logout();
                      closeMobileMenu()
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    className=""
                    to="/"
                    id="active"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="" onClick={closeMobileMenu}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="mr-56"
                    onClick={closeMobileMenu}
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu blur-in-expand ${isMobileMenuOpen ? 'visible' : 'hidden'}`}
        >

          <button className="close-menu-button" onClick={closeMobileMenu}>
            <i class="bi bi-x"></i>
          </button>
          <ul>
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/" id="active" onClick={closeMobileMenu}>
                  HOME
                  </Link>
                </li>

                {hasSubscription && (
                  <li>
                    <Link to="/members" onClick={closeMobileMenu}>
                      Members
                    </Link>
                  </li>
                )}

                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      logout();
                      closeMobileMenu()
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/" id="active" onClick={closeMobileMenu}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={closeMobileMenu}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" onClick={closeMobileMenu}>
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;