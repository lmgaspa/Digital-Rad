import styles from '../layouts/servicos.module.css';
import slogan from '../assets/slogan.webp';
import icon1 from '../assets/icone1.webp';
import icon2 from '../assets/icone2.webp';
import icon3 from '../assets/icone3.webp';
import icon4 from '../assets/icone4.webp';
import icon5 from '../assets/icone5.webp';
import icon6 from '../assets/icone6.webp';
import terc from '../assets/terceirizacao.webp';
import foto3 from '../assets/foto3.webp';

export default function Servicos() {
  return (
    <section>
      <div className={styles.box}>
        <img src={slogan} alt="foto" loading="lazy" />
      </div>
      <div className={styles.divservicospage}>
        <div className={styles.divleft}>
          <h1>Terceirização de serviços</h1>
          <h3>Você está precisando de uma solução imediata e eficaz para solucionar alguns problemas e
            reduzir custos com mão de obra técnica em seu serviço de radiologia?</h3>
          <h3>
            A Digital Radiológica é uma empresa que vem atuando na prestação de serviços terceirizados
            em radiologia no estado do Paraná desde 2015 e em processos licitatórios pelo Brasil.</h3>
          <h3> A excelência
            de nossos serviços pode ser comprovada por mais de 8 anos de experiência no mercado da
            terceirização em serviços radiológicos e pelo atendimento oferecido por profissionais especializados
            e comprometidos para atender nossos clientes, oferecendo assim segurança e qualidade para o
            serviço.</h3>
          <h3>
            Dentre nossos parceiros estão a Irmandade da Santa Casa de Misericórdia Nossa Senhora Das
            Graças - Piên, Clínica de Diagnóstico Capão Raso, Clínica Dr. Mantovani, entre outros no interior do Estado
            Do Paraná.</h3>
          <h3>
            Além de mão de obra especializada, contamos com o serviço de telerradiologia que permite o
            diagnóstico à distância, emitindo, portanto, uma segunda opinião técnica através do envio digital das
            imagens.</h3>
          <h3>
            Ao escolher a nossa empresa, você pode se concentrar no seu core business, confiando a gestão
            do seu centro de imagem para um time especializado e uma equipe técnica experiente, devidamente
            treinada e que preza pela a humanização ao atendimento aos seus clientes.</h3>
          <h3>A terceirização do trabalho do profissional em radiologia, é hoje uma realidade de mercado que
            vem se disseminando principalmente nos grandes centros.</h3>
          <h3>Para hospitais e proprietários de clínicas,
            é uma solução referente às questões trabalhistas que envolve a contratação de pessoal técnico, na
            medida que desvincula o profissional do serviço radiológico de sua instituição, podendo contribuir
            também na redução de diversos custos altos e fixos.</h3>
        </div>
        <div className={styles.divright}>
          <img src={foto3} alt="foto" loading="lazy" />
        </div>
      </div>
      <div>
        <img className={styles.invisivelterc} src={terc} alt="vantagens" loading="lazy" />
      </div>
      <div className={styles.box2}>
        <h1>ALGUMAS VANTAGENS DA TERCEIRIZAÇÃO DE SERVIÇOS</h1>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>
                <img src={icon1} alt="Redução de Custos" loading="lazy" />
                <h2>Redução de Custos</h2>
              </td>
              <td>
                <img src={icon2} alt="Eliminação de vínculo trabalhista" loading="lazy" />
                <h2>Eliminação de vínculo trabalhista</h2>
              </td>
            </tr>
            <tr>
              <td>
                <img src={icon3} alt="Gerenciamento de mão de obra" loading="lazy" />
                <h2>Gerenciamento de mão de obra</h2>
              </td>
              <td>
                <img src={icon4} alt="Recrutamento e seleção de pessoal" loading="lazy" />
                <h2>Recrutamento e seleção de pessoal</h2>
              </td>
            </tr>
            <tr>
              <td>
                <img src={icon5} alt="Treinamento técnico comportamental" loading="lazy" />
                <h2>Treinamento técnico comportamental</h2>
              </td>
              <td>
                <img src={icon6} alt="Cobertura em caso de férias ou afastamento médico" loading="lazy" />
                <h2>Cobertura em caso de férias ou afastamento médico</h2>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section >
  );
}
