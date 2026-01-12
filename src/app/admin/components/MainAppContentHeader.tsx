import Link from 'next/link';
import React from 'react'
interface BreadcrumbItem {
    label: string;
    href?: string;      // optional link (if not the last/active item)
}

interface MainAppContentHeaderProps {
    title?: string;
    breadcrumbs: BreadcrumbItem[]; // ← array for multiple items
}
const MainAppContentHeader: React.FC<MainAppContentHeaderProps> = ({
    title = 'Dashboard',
    breadcrumbs = [{ label: 'Home', href: '/' }], // default: just Home
    
}) => {
    return (
        <>
            <div className="app-content-header">

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-sm-6"><h3 className="mb-0">{ (title)?title:""}</h3></div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-end">
                                {/* <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Dashboard</li> */}
                                {breadcrumbs.map((item, index) => {
                                    const isLast = index === breadcrumbs.length - 1;
                                    return (
                                        <li
                                            key={index}
                                            className={`breadcrumb-item ${isLast ? 'active' : ''}`}
                                            aria-current={isLast ? 'page' : undefined}
                                        >
                                            {isLast || !item.href ? (
                                                item.label
                                            ) : (
                                                <Link href={item.href} className="text-decoration-none">
                                                    {item.label}
                                                </Link>
                                            )}
                                        </li>
                                    );
                                })}
                            </ol>
                        </div>
                    </div>

                </div>

            </div></>
    )
}

export default MainAppContentHeader