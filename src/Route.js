
import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Account, NotFound } from './Pages'

import PublicRoute from "./Hooks/PublicRoute";
import PrivateRoute from './Hooks/PrivateRoute';
import { UserContext } from "./Hooks/UserContext";
import ScrollToTop from './Hooks/ScrollToTop';

function AppRoute() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <UserContext.Provider value={value}>
        <Routes>
          <Route path='/' element={<PublicRoute />}>
            <Route path='/' index restricted={false} element={<Home />} />
            <Route path='/signup' element={<Account component="signup" />} />
            <Route path='/signin' element={<Account component="signin" />} />
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            {/* <Route path="/url" element={<PageComponent />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default AppRoute


