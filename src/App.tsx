import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { Suspense } from 'react'
import Dashboard from './layouts/dashboard'
import { app } from '@/config/app'

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route
            path="/home/*"
            element={
              <Dashboard layout="home" />
            }
          ></Route>
          <Route
            path="/series/*"
            element={
              <Dashboard layout="series" />
            }
          ></Route>

          <Route path="*" element={
            <Navigate to="/home" replace />
          } />

        </Routes>
      </Suspense>
    </>
  )
}

export default App
