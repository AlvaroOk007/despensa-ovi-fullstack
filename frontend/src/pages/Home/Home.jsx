import './Home.css';
import { StatisticCard } from './ui/StatisticCard';
import { statisticArray } from '../../data/statisticArray';
import { Separator } from '../../components/ui/Separator/Separator'

export function Home() {
  return (
    <main className='main-home'>
      <h1>Bienvenido Pepito </h1>
      <Separator />
      <section className="section-product-statistics">
        {
          statisticArray && statisticArray.map(
            (s,index) => <StatisticCard statistic={s}key={index}/>
          )
        }
      </section>
      {/* <section>
        <h2>Opcines rapidas</h2>
        <button>Agregar producto</button>
        <button>Agregar Venta</button>
        <button>Eliminar Venta</button>
      </section> */}
      <Separator />
      <section className="product-without-stock">
        <h2>Productos a agotarse</h2>
      </section>
    </main>
  );
}
