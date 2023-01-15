import data from '../icons.json';

import Hamis from '../img/longleg.png';
import styles from './App.module.css';
import IconTable from "./IconTable";

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.tables}>
        <IconTable name="Perks" icons={data.perks} columns={9}/>
        <IconTable name="Spells" icons={data.spells} columns={12}/>
        <IconTable name="Enemies" icons={data.enemies} columns={9}/>
      </div>
      <img src={Hamis} alt="Hämis" className={styles.hamis}/>
    </div>
  );
}
