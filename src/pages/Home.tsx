import React from 'react';
import Servicos from '../components/Servicos';
import Footer from '../components/Footer';
import Parceiros from '../components/Parceiros';
import HomeComponent from '../components/HomeComponent';
import Navbar from '../components/Navbar';
import PreNavBar from '../components/PreNavBar';
import Map from '../components/Map';

const Home: React.FC = () => {
  return (
    <section>
      <PreNavBar />
      <Navbar />
      <HomeComponent />
      <Servicos />
      <Parceiros />
      <Map />
      <Footer />
    </section>
  );
}

export default Home;
