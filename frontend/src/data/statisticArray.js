import { Box } from 'lucide-react';
import { DollarSign, CircleDollarSign, BadgeDollarSign } from 'lucide-react';
export const statisticArray = [
  {
    color: 'rgba(25, 150, 167, 1)',
    path: '/',
    name: 'Total de productos',
    num: 2000,
    icon: Box,
  },
  {
    color: 'rgba(99, 182, 182, 1)',
    path: '/products',
    name: 'Ventas del mes',
    num: 2000,
    icon: BadgeDollarSign,
  },
  {
    color: 'rgba(99, 149, 182, 1)',
    path: '/',
    name: 'Ventas del año',
    num: 2000,
    icon: CircleDollarSign,
  },
  {
    color: 'rgba(99, 114, 182, 1)',
    path: '/',
    name: 'Ventas del dia',
    num: 20,
    icon: DollarSign,
  },
];
