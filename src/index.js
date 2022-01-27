import React from "react";
import ReactDOM from "react-dom";

import(
/* webpackChunkName: "app" */
'./Pages/index').then(({default: App}) => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    )
})

