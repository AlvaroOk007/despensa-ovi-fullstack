import { useState, useEffect } from 'react';
import './StatisticCard.css';
import { Link } from 'react-router-dom';
export function StatisticCard({statistic}) {
  const [numInicial, setNumInicial] = useState(0);
  console.log('Aqui')
  const Icon = statistic.icon;
  useEffect(() => {
    // Reiniciamos el contador cuando cambia la estadística
    setNumInicial(0);
  }, [statistic]);

  // Contador incremental
  useEffect(() => {
    if (numInicial < statistic.num) {
      const timer = setTimeout(() => {
        const incremento = Math.ceil(statistic.num / 100); // 100 pasos
        setNumInicial((prev) => prev + incremento);
      }, 10); // Podés aumentar a 10ms para rendimiento
      return () => clearTimeout(timer);
    }
  }, [numInicial, statistic.num]);
  
  return (
    <Link to={statistic.path} className='links'>
      <article
        className={`conteiner-statistic-card`}
        style={{backgroundColor: statistic.color}}
      >
        <Icon className='statistic-card-icon' />
        <h2 className='statistic-carda-title'>{numInicial}</h2>
        <p className='statistic-carda-subtitle'>{statistic.name}</p>
      </article>
    </Link>
  );
}
