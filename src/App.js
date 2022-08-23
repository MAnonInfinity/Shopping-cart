import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { MainContainer } from './components/MainContainer';
function App() {
    return (
        <Provider store={store}>
            <MainContainer />
        </Provider>
    );
}

export default App;
