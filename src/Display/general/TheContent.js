import React, { Suspense, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { privRoutes, pubRoutes } from '../../routes'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Loading Please Wait...</div>
  </div>
)

const TheContent = ({ token, userType}) => {
 const token = false

  let routes = () => {
    if (token ) {
      return privRoutes
    } else {
      return pubRoutes
    }
  }
  return (
      <Suspense fallback={loading}>
        <Routes>
          {routes().map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          {/* <Route path="/cell" element={<Navigate to="/cell" replace />} /> */}
        </Routes>
        
      </Suspense>
  )
}

export default React.memo(TheContent)
