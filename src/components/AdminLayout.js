import React from 'react';
import {Link} from "react-router-dom";
import imgAdmin from '../img2/profile.png'
const AdminLayout = (props) => {

    const location=window.location.href;
    return (
        <div className="admin-layout d-flex">
            <div className="admin-layout-left">
           <div className="d-flex align-items-center">
              <div>
                  <img src="../images/profile.png" className="user-image"/>
              </div>
               <div className="mt-2">
                   <h5 className="mb-0">Eldor Sattarov</h5>
                   <h5 className="mb-8">Adminnistrator</h5>
                   {/*{imgAdmin}*/}
               </div>
           </div>

                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/admin/menus" className={`nav-link ${location.includes('/admin/menus') ? 'active' : ''}`}>Menus</Link>
                        <Link to="/admin/news" className={`nav-link ${location.includes('/admin/news') ? 'active' : ''}`}>News</Link>
                    </li>
                </ul>
            </div>
            <div className="admin-layout-right">
                {props.children}
            </div>
        </div>
    );
};

export default AdminLayout;