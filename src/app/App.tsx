import { Provider as ReduxProvider } from 'react-redux';
import './App.css'
import { store } from './store';
import { RouterProvider } from 'react-router-dom';
import Router from './Router';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <RouterProvider router={Router} />
    </ReduxProvider>
  )
}
