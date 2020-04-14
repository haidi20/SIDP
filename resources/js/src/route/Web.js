import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    Switch,
    Route
  } from "react-router-dom";

import MainLayout from '../views/_layouts/MainLayout';

// pages
import Empty from '../views/Empty/Empty';
import Dashboard from '../views/Dashboard/Dashboard';
// documents
import Document from '../views/Document/Document';
import FormDocument from '../views/Document/FormDocument';
// person in charge
import PersonInCharge from '../views/PersonInCharge/PersonInCharge';
import FormPersonInCharge from '../views/PersonInCharge/FormPersonInCharge';
// jobs
import Job from '../views/Job/Job';
import FormJob from '../views/Job/FormJob';
// jobs
import Activity from '../views/Activity/Activity';
import FormActivity from '../views/Activity/FormActivity';

const web = () => (
    <Router>
        <HashRouter>
            <MainLayout>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/empty" component={Empty} />
                    {/* route document */}
                    <Route path="/document" component={Document} />                  
                    <Route path="/document-form" component={FormDocument} /> 
                    {/* route person in charge  */}
                    <Route path="/person-in-charge" component={PersonInCharge} />
                    <Route path="/person-in-charge-form" component={FormPersonInCharge} />
                    {/* route jobs */}
                    <Route path="/job" component={Job} /> 
                    <Route path="/job-form" component={FormJob} />
                    {/* route activities */}
                    <Route path="/activity" component={Activity} /> 
                    <Route path="/activity-form" component={FormActivity} />
                </Switch>                 
            </MainLayout>
        </HashRouter>
    </Router>
)

export default web;