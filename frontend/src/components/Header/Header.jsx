import { Item } from './ui/Item';
import { navBarItems } from '../../data/navBarItems.js';
import { LogOut } from 'lucide-react';
import './Header.css'
export function Header() {
  return (
    <header className='conteiner-header'>
      <div className='header-main'>
        <h2 className='header-title'>
          Despensa Ovi <span className='header-title-sub'>admin</span>
        </h2>
        <nav className='header-navbar'>
          {
            navBarItems.map((item,index) => 
            <Item 
              key={index}
              path={item.path} 
              icon={item.icon} 
              label={item.label} 
            />)
          }
        </nav>
      </div>
      <div className="header-footer">
        <Item 
          path={'/login'}
          icon={LogOut}
          label='Cerrar Sesion'
        />
      </div>
    </header>
  );
}
