import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
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
        <h2>Sobre mim</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
          Crio sites de comércio eletrônico, manutenção e consultoria e aplicativos móveis
          </p>
          <p className="about-grid-info-text">
            Avançando até hoje, sou especializado em projetar e desenvolver
            soluções de alta qualidade que encantam nossos clientes e superam seus
            expectativas{" "}
          </p>
          <p className="about-grid-info-text">
          Além disso, compartilho meu conhecimento e paixão com o mundo por meio de meu portfólio e github, onde demonstro como construir aplicativos full-stack.
          </p>
          <p className="about-grid-info-text">
          Amplo domínio e conhecimento em tecnologias:          
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Java </li>
            <li className="about-grid-info-list-item">Spring </li>
            <li className="about-grid-info-list-item">AWS </li>
            <li className="about-grid-info-list-item">Kotlin</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Angular</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Docker</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">Selenium</li>
            <li className="about-grid-info-list-item">Quarkus</li>
            <li className="about-grid-info-list-item">Liferay</li>
            <li className="about-grid-info-list-item">GCP (Pub/Sub, Storage, Cache, Cloud Run)</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/vitor.jpeg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
