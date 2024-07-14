import React from 'react';
import Amil from '../assets/amil.png';
import Capao from '../assets/logo_cd_capao_raso.png';
import Santa from '../assets/santacasa.png';
import nova from '../assets/novacli.jpeg';
import styles from '../layouts/parceiros.module.css';

const Parceiros: React.FC = () => {
  return (
    <section>
      <div>
        <h1 className={styles.textoparceiros}>Parceiros</h1>
      </div>
      <div className={styles.containerparceiros}>
        <img src={Santa} alt="Santa Casa de Misericórdia de Curitiba" />
        <img src={Capao} alt="Centro de Diagnóstico Capão Raso" />
        <img src={nova} alt="Clínica Dr. Mantovani" />
        <img src={Amil} alt="Amil" />
      </div>
    </section>
  );
}

export default Parceiros;
