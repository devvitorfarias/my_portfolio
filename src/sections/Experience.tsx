import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Due Lazer",
      role: "Desenvolvedor Junior Full Stack",
      url: "https://duelaser.com/",
      start: "Dezembro 2019",
      end: "Fevereiro 2021",
      shortDescription: [
        " • Atuei presencialmente em uma startup , onde , desenvolvi uma aplicação mobile que só resumindo ela controla uma maquina laser onde ajuda no desenvolvimento da maquina e testes ",
        " • Pois ajuda na aceleração dos processos de entrega das maquinas para os clientes que compram . Esse aplicativo hoje ele é interno mas representa grande parte da startup pois acelerou muito seus lucros por que as maquinas são desenvolvidas na propia fabrica",
        " • AWS IoT Core : para conectar as máquinas a laser à nuvem de forma segura",
        " • AWS Lambda: funções Lambda foram implementadas para processar as leituras das máquinas em tempo real. ",
        " • AWS RDS: banco de dados relacional, hospedado no Amazon RDS, foi utilizado para armazenar todas as leituras das máquinas, bem como os logs de operação ",
        " • Amazon S3: Os dados mais volumosos, como logs detalhados de operação e relatórios de desempenho das máquinas"

      ],
    },
    {
      name: "ClickSoft",
      role: "Desenvolvedor Junior Full Stack - Free Lancer",
      url: "https://clicksoft.com.br/",
      start: "Março  2021",
      end: "Abril 2021",
      shortDescription: [
        " • Desenvolvimento de aplicativos em projetos privados Kotlin",
        " • Desenvolvi APIs RESTful utilizando Spring Boot para expor",
        " • funcionalidades como cadastro de alunos, criação de planos de treino, acompanhamento de progressos e geração de relatórios ",
        " • Utilizei o Spring Data JPA para interagir com o banco de dados, modelando entidades como alunos, personal trainers, exercícios, séries e repetições",
        " • Implementei validações e testes para garantir a integridade dos dados inseridos no sistema, junto a mock e injeção de dependencias com mockito. "
      ],
    },
    {
      name: "Avanti ",
      role: "Estagio Full Stack",
      url: "https://penseavanti.com.br/ecommerce/",
      start: "Maio 2021",
      end: "Julho 2021",
      shortDescription: [
        "Treinamento em desenvolvimento de sites de comércio eletrônico B2B e B2C para grandes empresas nacionais e internacionais.",
        "Esquadrões, inseridos em metodologias ágeis trabalhando em conjunto com a equipe de design e gerenciamento de projetos",
      ],
    },
    {
      name: "M3",
      role: "Desenvolvedor Junior Full Stack",
      url: "https://m3ecommerce.com/",
      start: "Agosto 2021",
      end: "Novembro 2021",
      shortDescription: [
        " • Fiz front-end, desenvolvimento mobile e projetos de comércio eletrônico ",
        " • Vários projetos menores, incluindo desenvolvimento de software customizado de monitoramento de jornada de trabalho, dashboards com visualização de dados, design/desenvolvimento de uma API que calcula preços de estacionamento ",
        " • Contribuí para a melhoria da experiência do usuário",
        " • Arquitetura de software, codificação e práticas de trabalho em equipe com Java 8 e Spring Boot ",
        " • Aumentei uma escalabilidade da aplicação em através da utilização de fila SQS para gerenciar picos de demanda e garantir a entrega de mensagens em tempo real " ,
        " • Contribuí para a otimização do desempenho de um sistema de e-commerce através da criação de índices e consultas SQL eficientes no banco de dados PostgreSQL "
      ],
    },
    {
      name: "LaModa",
      role: "Desenvolvedor Senior Full Stack",
      url: "https://lamoda.com.br/en/",
      start: "Março 2022",
      end: "Novembro 2022",
      shortDescription: [
        " • Configurei e prestei suporte para desenvolvimento de ações na plataforma VTEX IO ",
        " • Trabalhei em conjunto com tecnologia, e-commerce e parceiros para desenvolvimento back e front end de aplicações ",
        " • Realizei análises, especificações técnicas e desenvolvimento de requisitos para o negócio ",
        " • Atuei no levantamento de requisitos e desenvolvimento/construção de APIs para consumo de informações e informações em JSON",
        " • Gestão e Acompanhamento do Desenvolvimento de Software com Amazon CloudWatch",
        " • Novos recursos de trabalho em equipe",
        " • Atuação ponta a ponta em falhas, incidentes e problemas de sistemas e portais da Rede com Amazon CloudWatch",
        " • Atuei na revisão de código e apoio na definição dos processos do dia a dia ",
        " • Resolvi incidentes relacionados a atrasos na entrega de mensagens e falhas no processamento de dados, utilizando o Amazon SQS para garantir a confiabilidade e escalabilidade da aplicação. ",
        " • Conhecimento profundo dos conceitos de filas, tópicos e mensagens, e suas aplicações práticas em cenários de alta disponibilidade " , 
        " • Desenvolvi APIs RESTful utilizando Java 8 e Spring Boot para integrar diferentes sistemas da plataforma VTEX IO, aproveitando as vantagens de lambda expressions e streams para otimizar o código e melhorar a performance. " ,
        " • Conhecimento de técnicas para otimizar o desempenho de consultas SQL, índices, e configuração do banco de dados. " ,
        " • Integrei funções Lambda com a plataforma VTEX IO para criar fluxos de trabalho personalizados, utilizando triggers do SQS para acionar as funções e processar eventos de forma assíncrona "
      ],
    },
    {
      name: "CoreBiz",
      role: "Desenvolvedor Pleno Full Stack",
      url: "https://www.corebiz.ag/en/",
      start: "Julho 2023",
      end: "Junho 2024",
      shortDescription: [
        " • Manutenção de sites de e-commerce de aplicativos usando Kotlin ",
        " • Criação e manutenção de templates no Kotlin ",
        " • Desenvolvimento de páginas e integrações com API's nativas e de terceiros & Prismic",
        " • Criação de páginas e componentes utilizando Kotlin",
        " • Atuei com Java 11 & Spring boot com clientes do seguimento de ecommerce " ,
        " • Atuei com Amazon CloudWatch otimizando o uso de recursos e fornece insights sobre a integridade operacional ",
        " • Trabalhei com Amazon SQS , onde otimizei enfileiramento de mensagens confiável e escalável para desacoplar microsserviços e sistemas distribuídos. Meu trabalho envolveu configurar fila SQS para gerenciar a comunicação entre diferentes componentes, garantindo processamento suave e assíncrono e também otimizei a configuração para lidar com cenário especifico , mantendo a estabilidade e o desempenho do sistema. " ,
        " • Realizei customizações específicas na plataforma VTEX IO utilizando Java 11 e Spring Boot, como a criação de módulos personalizados para atender às necessidades do negócio, otimizando o código com features " ,
        " • Otimizei consultas SQL com PostgreSQL para melhorar o desempenho do sistema e garantir a entrega rápida de informações. ",
        " • Implementei e corrigi funções Lambda para processar assincronamente tarefas como envio de e-mails de confirmação de pedidos, acionadas por eventos do SQS, garantindo a entrega rápida e confiável das mensagens "
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${index === selected && "exp-slider-item-selected"
                  }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
