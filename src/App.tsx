import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { RouterProvider } from 'react-router-dom';
import { api } from "./rtk/main";
import store from './rtk/store';
import router from './app-router';

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={api}>
        <RouterProvider router={router} />
      </ApiProvider>
    </Provider>
  )
}

export default App
