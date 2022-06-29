import React, { Suspense, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { privRoutes, pubRoutes } from '../../routes'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Loading Please Wait...</div>
  </div>
)

const TheContent = (props) => {
 const token = true
 const history = useLocation()
//  console.log(history)

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
          {routes().map((route, i) => route.element && (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )}
        </Routes>
        
      </Suspense>
  )
}

export default React.memo(TheContent)
