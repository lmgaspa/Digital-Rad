import React from 'react';
import PreNavBar from '../components/PreNavBar';
import Navbar from '../components/Navbar';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import styles from '../layouts/layoutpages/contato.module.css';
import Footer from '../components/Footer';

const Contato: React.FC = () => {
  return (
    <section>
      <PreNavBar />
      <Navbar />
      <div className={styles.containercontato}>
        <div>
          <h1>Telefone para contato</h1>
          <BsFillTelephoneFill className={styles.objeto1}/> (47)99934-2060
        </div>
        <div style={{marginTop: 10}}>
          <h1>E-mail para contato</h1>
          <AiOutlineMail className={styles.objeto2}/> digital.rad@outlook.com
        </div>
      </div>
      <div className={styles.down}></div>
      <Footer />
    </section>
  );
}

export default Contato;
