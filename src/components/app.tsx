import { h, createContext } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Route, Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
function getRoute (url: string){

    return { Component: Home }
}

export default function createApp (initialUrl: string){
    /*
        const [route, setRoute] = useState(getRoute(initialUrl));

        const Component = route.Component;
    */

    const Component = getRoute(initialUrl).Component;

    const App = () => (
        <div id="app">
           <Component />
        </div>
    );

    return <App />;
}

