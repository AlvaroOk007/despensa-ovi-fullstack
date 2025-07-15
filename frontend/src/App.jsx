import { AppRoutes } from './appRoutes/AppRoutes';
import { Header } from './components/Header/Header';
import './App.css'
export default function App() {
  return (
    <div className='container'>
      <Header />
      <AppRoutes />
    </div>
  );
}
