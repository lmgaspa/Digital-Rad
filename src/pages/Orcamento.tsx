import React from 'react';
import PreNavBar from '../components/PreNavBar';
import Navbar from '../components/Navbar';
import FormOrcamento from '../components/FormOrcamento';
import styles from '../layouts/formOrcamento.module.css';
import Footer from '../components/Footer';

const Orcamento: React.FC = () => {
  return (
    <section>
      <PreNavBar />
      <Navbar />
      <div>
        <div className={styles.containerOrcamento}>
          <h1> Caso queira solicitar nosso orçamento, preencha o campo abaixo e envie sua mensagem</h1>
          <FormOrcamento />
        </div>
      </div>
      <div className={styles.down}></div>
      <Footer/>
    </section>
  );
}

export default Orcamento;
