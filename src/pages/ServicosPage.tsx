import React from 'react';
import PreNavBar from '../components/PreNavBar';
import Navbar from '../components/Navbar';
import styles from '../layouts/layoutpages/servicospage.module.css';
import servico1 from '../assets/servico1.webp';
import servico2 from '../assets/servico2.webp';
import Footer from '../components/Footer';

const ServicosPage: React.FC = () => {
  return (
    <section>
      <PreNavBar />
      <Navbar />
      <div className={styles.divservicospage}>
        <div className={styles.divleft}>
          <h1>TERCEIRIZAÇÃO DE MÃO DE OBRA</h1>
          <h3>Aplicar a terceirização em clínicas ou hospitais é uma excelente opção
            para os gestores que precisam cortar custos e otimizar o tempo em seus estabelecimentos.</h3>
          <h3>
            Isso porque os serviços terceirizados podem potencializar a empresa de várias formas, tendo em vista que se
            contrata uma única empresa prestadora e não colaboradores, assim não é necessário pagar benefícios
            como férias, 13º salário e demais encargos trabalhistas, pois isso é de responsabilidade
            da empresa contratada
            para prestação dos serviços para sua instituição, também reduz custos com o setor de recursos humanos
            e resolvem-se os problemas referente a cobertura de férias, atestados e afastamentos.</h3>
          <h3>
            A Digital Rad além de disponibilizar tecnólogos e técnicos em radiologia, realiza o serviço de gestão
            do setor de diagnóstico por imagem, oferece aos seus clientes terceirização de equipe médica,
            laudos através da telerradiologia, insumos e todos
            os recursos necessários para prestação dos serviços.</h3>
          <h1>IMPLEMENTANDO A TERCEIRIZAÇÃO NA CLÍNICA DE RADIOLOGIA E HOSPITAIS</h1>
          <h3>
            Quando falamos em terceirização de profissionais, é importante frisarmos que desde 2017,
            qualquer serviço pode ser terceirizado nas empresas.</h3>
          <h3>
            A Lei nº 13.429/2017 conhecida como a Reforma Trabalhista, deu plena liberdade para
            que as empresas terceirizem até mesmo o seu serviço fim, dessa forma você pode optar pela
            terceirização de seus serviços e demandas, sem correr o risco de ferir a legislação vigente.</h3>
          <h1>TELERRADIOLOGIA</h1>
          <h3>
            A telerradiologia consiste na emissão de laudos radiológicos à distância feito por
            profissionais parceiros ou contratados, onde contamos com especialistas responsáveis pela emissão do laudo,
            sendo assim o paciente realiza o exame localmente na clínica ou hospital e as imagens radiológicas em conjunto
            com os dados de atendimento e histórico do paciente são transmitidas para um serviço especializado em
            telerradiologia, tudo isso de forma rápida, segura e com diminuição de custos operacionais.</h3>
            <h1>BENEFÍCIOS DA TELERRADIOLOGIA NA GESTÃO DE CLÍNICAS E HOSPITAIS</h1>
          <h3>
            A telerradiologia promove benefícios em funções gerenciais de clínicas e hospitais ao
            facilitar processos e a gestão de recursos humanos.</h3>
          <h3>
            Muitos gestores avaliam os benefícios de investir em serviços de telerradiologia para melhorar o
            fluxo operacional e administrativo de clínicas e hospitais.</h3>
          <h3>
            Mapear quais são as vantagens da telerradiologia na gestão de clínicas e hospitais permite um alinhamento
            adequado entre as metas de longo prazo da instituição e os investimentos atuais.</h3>
          <h3>
            Uma vantagem do investimento na telerradiologia consiste na facilitação de tarefas
            relacionadas à gestão de recursos humanos.</h3>
          <h3>
            O período de disponibilidade dos exames radiológicos também pode ser aumentado, como aos
            finais de semana e períodos noturnos, sem a necessidade de radiologistas de plantão para atender a
            demanda reduzida nesses momentos.</h3>
          <h3>
            Com o serviço de telerradiologia, a equipe externa pode suprir essas demandas garantindo que os
            colaboradores tenham acesso às folgas.</h3>
          <h3>
            Outra questão na área de recursos humanos é a contratação de mão de obra qualificada,
            especialmente em locais mais isolados, nos quais a demanda é reduzida.</h3>
          <h3>
            Com o serviço as especialidades nas quais há falta de profissionais in loco podem ser oferecidas aos
            pacientes e clientes contando com as equipes de telemedicina. A área de recursos humanos é uma das
            que mais se beneficia com a implementação da telerradiologia nas clínicas e hospitais,
            favorecendo boas práticas sem comprometer a qualidade e eficiência dos serviços.</h3>
          <img src={servico2} alt="" />
        </div>
        <div className={styles.divright}>
          <img src={servico1} alt="" />
          <h1>TRANSMISSÃO E ARMAZENAMENTO DE IMAGENS</h1>
          <h3>Para implementar a telerradiologiaé recomendado investir no PACS (Picture Archiving and Communication System), que é o Sistema de Comunicação e Arquivamento de Imagens.</h3>
          <h3>O PACS pode ser local ou na nuvem, e permite a comunicação da equipe da clínica com os profissionais do serviço de telerradiologia.</h3>
          <h3>Por meio desse sistema é realizada a transmissão das imagens radiológicas coletadas durante o exame, bem como as informações adicionais sobre o caso que são importantes à emissão do laudo.</h3>
          <h3>O PACS segue padrões internacionais de privacidade e segurança, protegendo as informações médicas e pessoais dos pacientes.</h3>
          <h3>Uma funcionalidade adicional do sistema inclui a disponibilização de laudos mediante login e senha que são informados ao paciente, permitindo que ele acesse os resultados online.</h3>
          <h3>O sistema ainda permite o armazenamento das imagens, funcionando como um arquivo digital seguro, econômico e mais facilmente acessado.</h3>
          <h3>Para a implementação da telerradiologia também é necessário investir na modernização do setor radiológico, tanto pelo PACS como pela radiologia digital.</h3>
          <h3>Para emitir imagens digitais que podem ser transmitidas por meio do sistema online, é necessário contar com equipamentos digitais.</h3>
          <h3>Como benefícios, esses modelos garantem mais qualidade da imagem radiológica, redução da exposição à radiação e mais facilidade na transmissão e armazenamento dos exames.</h3>
          <h1>GESTÃO DE PRESTADORES DE SERVIÇO</h1>
          <h3>Os radiologistas terceirizados respondem diretamente à parceira de telerradiologia, que é responsável por: </h3>
          <h3>&#10004; Contratação e treinamento.</h3> 
          <h3>&#10004; Aperfeiçoamento profissional conforme a cultura da empresa contratante.</h3>
          <h3>&#10004; Supervisão das atividades.</h3>
          <h3>&#10004; Gestão das escalas para garantir a disponibilidade dos serviços.</h3>
          <h3>&#10004; Plataforma para transmissão de laudos e imagens.</h3>
          <h3>É fundamental que a clínica ou hospital verifique aspectos como a idoneidade da prestadora, a regulamentação dela e dos colaboradores que passam a ser prestadores na instituição de saúde, assim podemos garantir o cumprimento de todas as necessidades e manter os propósitos de sua empresa.</h3>
          <h3>Com tais cuidados, é possível ter uma série de benefícios gerenciais na implementação da telerradiologia, promovendo a consolidação e o crescimento da clínica ou hospital.</h3>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default ServicosPage;
