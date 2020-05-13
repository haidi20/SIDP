import React, {useContext, useEffect} from 'react';
import { Link, useHistory } from "react-router-dom";
import {AuthContext} from './index';

const login = props => {
    const history = useHistory();
    const {handleLogin} = useContext(AuthContext);

    const send = () => {
        handleLogin();
        history.push('/');
    }

    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        
                        <form className="md-float-material form-material" action="#" method="post">
                            <div className="text-center">
                            </div>
                            <div className="auth-box card">
                                <div className="card-block">
                                    <div className="row m-b-20">
                                        <div className="col-md-12">
                                            <h3 className="text-center">Login</h3>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="form-group form-primary">
                                        <input type="text" name="username" id="username" className="form-control" placeholder="Your Username" />
                                        <span className="form-bar"></span>
                                    </div>
                                    <div className="form-group form-primary">
                                        <input type="password" name="password" id="password" className="form-control" placeholder="Password" />
                                        <span className="form-bar"></span>
                                    </div>
                                    <div className="row m-t-25 text-left">
                                        <div className="col-12">
                                            
                                        </div>
                                    </div>
                                    <div className="row m-t-30">
                                        <div className="col-md-12">
                                            <button type="submit" onClick={() => send()} className="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20" >Sign in</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login;