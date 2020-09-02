import React from 'react';
import { Route } from 'react-router-dom';

import './assets/css/normalize.css';
import './App.css';

import { ThankYou, Home, ApplicationForm } from './pages';
import { Header, Footer } from './components';

function App() {
    return (
        <div className="wrapper">
            <Header />

            <Route exact path="/" component={Home} />
            <Route exact path="/application-form" component={ApplicationForm} />
            <Route exact path="/thank-you" component={ThankYou} />

            <Footer />
        </div>
    );
}

export default App;
