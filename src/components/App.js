import data from '../icons.json';

import styles from './App.module.css';
import IconTable from "./IconTable";


function App() {
  return (
    <div className={styles.base}>
      <div className={styles.tables}>
        <IconTable icons={data.perks} columns={9}/>
        <IconTable icons={data.spells} columns={12}/>
        <IconTable icons={data.enemies} columns={9}/>
      </div>
    </div>
  );
}

export default App;
