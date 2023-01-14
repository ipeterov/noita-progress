import data from '../icons.json';

import styles from './App.module.css';
import IconTable from "./IconTable";


function App() {
  return (
    <div className={styles.container}>
      <div className={styles.tables}>
        <IconTable name="Perks" icons={data.perks} columns={9}/>
        <IconTable name="Spells" icons={data.spells} columns={12}/>
        <IconTable name="Enemies" icons={data.enemies} columns={9}/>
      </div>
    </div>
  );
}

export default App;
