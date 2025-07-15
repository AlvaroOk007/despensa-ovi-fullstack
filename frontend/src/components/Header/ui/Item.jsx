import { NavLink } from 'react-router-dom';
import './Item.css'
export function Item({ path, icon, label }) {
  const Icon = icon
  return (
    <NavLink to={path} className={({isActive}) => isActive ? 'link active' : 'link'} >
      <Icon />
      <span>{label}</span>
    </NavLink>
  );
}
