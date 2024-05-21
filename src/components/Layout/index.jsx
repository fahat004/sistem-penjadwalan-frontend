import React from 'react'
import Header from '../Header'
import SidebarComponent from '../Sidebar'
import "./styles.css";

const Layout = ({children}) => {
  return (
    <>
        <Header />
        <div className="d-flex">
            <SidebarComponent />
            <div className='flex-1 w-100'>
                {children}
            </div>
        </div>
    </>
  )
}

export default Layout