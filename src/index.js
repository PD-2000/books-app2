// import * as ReactDOMClient from 'react-dom/client';
// import App from './App';

// const container = document.querySelector('#root');
// const root = ReactDOMClient.createRoot(container);

// root.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);