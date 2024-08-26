import React from 'react';
import PreNavBar from '../components/PreNavBar';
import Navbar from '../components/Navbar';
import trabalhe from '../assets/trabalhe.webp';
import styles from '../layouts/layoutpages/trabalhe.module.css';
import Footer from '../components/Footer';

const TrabalheConosco: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <PreNavBar />
      <Navbar />
      <section className={styles.mainContent}>
        <div className={styles.containertrabalhe}>
          <h1>QUE FAZER PARTE DA NOSSA EQUIPE?</h1>
          <div>
            <h3>
              Caso tenha interesse em trabalhar conosco, envie um e-mail para <span>digital.rad@outlook.com.</span>
            </h3>
            <h3>Serão aceitos currículos somente em formato de arquivo PDF.</h3>
          </div>
        </div>
        <div>
          <img className={styles.trabimage} src={trabalhe} alt="mulher oferecendo trabalho" />
        </div>
      </section>
      <div className={styles.down}></div>
      <Footer />
    </div>
  );
}

export default TrabalheConosco;
