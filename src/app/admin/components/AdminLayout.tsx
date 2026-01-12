import React, { ReactNode } from 'react'
import Footer from './Footer';
import NavBar from './NavBar';
import SideBar from './SideBar';
interface AdminLayoutProps {
    children: ReactNode;

}
const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    return (
        <>
            <>
                <div className="layout-fixed sidebar-expand-lg sidebar-open bg-body-tertiary">
                    <div className="app-wrapper">
                        <NavBar />
                        <SideBar />
                        <main className="app-main">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </div>
            </>
        </>
    )
}

export default AdminLayout


