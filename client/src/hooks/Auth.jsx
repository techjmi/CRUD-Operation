
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState();
  const [service, setService] = useState();
  const [isLoading, setLoading] = useState(true);
  const AuthorizationToken = `Bearer ${token}`;

  const storeTokeninLs = (serverToken) => {
    try {
      setToken(serverToken);
      localStorage.setItem("token", serverToken);
    } catch (error) {
      console.error("Error storing token:", error);
    }
  };

  const logOutUser = () => {
    setToken("");
    localStorage.removeItem("token");
    navigate("/")
  };

  let isLoggedIn = !!token;
  console.log("Token:", token);
  console.log("IsLoggedIn:", isLoggedIn);

  const userAuthentication = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("the user data is ", data);
        setUser(data.userData);
      } else {
        console.log("Error in user authentication:", response.statusText);
      }
    } catch (error) {
      console.log("Error from userJWT:", error.message);
    }
  };

  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log("The Service data is ", data);
        setService(data.msg);
      } else {
        console.log("Error in getting services:", response.statusText);
      }
    } catch (error) {
      console.log("Error from Service:", error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await userAuthentication();
        await getServices();
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ storeTokeninLs, logOutUser, isLoggedIn, user, service, AuthorizationToken , isLoading}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
