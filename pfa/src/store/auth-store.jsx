// auth-store.jsx
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [teacher, setTeacher] = useState([]); // New teacher state

  const loginUser = (userData) => {
    setUser(userData);
  };
  const setTeacherData = (teacherData) => { // New function to set teacher data
    setTeacher(teacherData);
  };
  return (
    <AuthContext.Provider value={{ user, loginUser, teacher, setTeacherData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;