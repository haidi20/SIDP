import React, {useState} from 'react';
import { Link } from "react-router-dom";

const menu = (props) => {
    const [state, setState] = useState({
        activeMenu: 'active', 
    });

    const setActiveMenu = (e) => {
        setState({
            activeMenu: null,
        });
    }

    return(
        <div>
            <nav className="pcoded-navbar">
                <div className="pcoded-inner-navbar main-menu">
                    <div className="pcoded-navigatio-lavel">Menus</div>
                    <ul className="pcoded-item pcoded-left-item">
                    <li >
                        <Link to="/" onClick={e => setActiveMenu(e)}>
                            <span className="pcoded-micon">
                                <i className="icofont icofont-dashboard-web" />
                            </span>
                            <span className="pcoded-mtext">Dashboard</span>
                        </Link>
                    </li>
                    <li className="pcoded-hasmenu" style={{"cursor":"pointer"}}>
                        <a onClick={e => setActiveMenu(e)}>
                            <span className="pcoded-micon"><i className="ti-settings" /></span>
                            <span className="pcoded-mtext">Pengaturan</span>
                        </a>
                        <ul className="pcoded-submenu">
                            <li>
                                <Link to="/person-in-charge">
                                    <span className="pcoded-micon"><i className="feather icon-home" /></span>
                                    <span className="pcoded-mtext">Pejabat PaHP</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/job">
                                    <span className="pcoded-micon"><i className="feather icon-home" /></span>
                                    <span className="pcoded-mtext">Kode Rekening Belanja</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/activity">
                                    <span className="pcoded-micon"><i className="feather icon-home" /></span>
                                    <span className="pcoded-mtext">Kegiatan</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/document" onClick={e => setActiveMenu(e)}>
                            <span className="pcoded-micon">
                                <i className="ti-write"></i>
                            </span>
                            <span className="pcoded-mtext">Document</span>
                        </Link>
                    </li>
                    {/* <li >
                        <Link to="/empty" onClick={e => setActiveMenu(e)}>
                            <span className="pcoded-micon">
                                <i className="fa fa-location-arrow"></i>
                            </span>
                            <span className="pcoded-mtext">Rekapan</span>
                        </Link>
                    </li>
                    <li >
                        <Link to="/logout" onClick={e => setActiveMenu(e)}>
                            <span className="pcoded-micon">
                                <i className="feather icon-log-out" />
                            </span>
                            <span className="pcoded-mtext">Keluar</span>
                        </Link>
                    </li> */}
                    
                    </ul>
                </div>
            </nav>
            {props.children}
        </div>
    )
}

export default menu;