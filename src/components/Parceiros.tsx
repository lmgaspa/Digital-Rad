import React from 'react';
import Cajuru from '../assets/cajuru.webp';
import Capao from '../assets/logo_cd_capao_raso.webp';
import Santa from '../assets/santacasa.webp';
import nova from '../assets/novacli.webp';
import styles from '../layouts/parceiros.module.css';

const Parceiros: React.FC = () => {
  return (
    <section>
      <div>
        <h1 className={styles.textoparceiros}>Parceiros</h1>
      </div>
      <div className={styles.containerparceiros}>
        <img src={Santa} alt="Santa Casa de Misericórdia de Curitiba" loading="lazy"/>
        <img src={Capao} alt="Centro de Diagnóstico Capão Raso" loading="lazy"/>
        <img src={nova} alt="Clínica Dr. Mantovani" loading="lazy"/>
        <img src={Cajuru} alt="Cajuru" loading="lazy"/>
      </div>
    </section>
  );
}

export default Parceiros;
