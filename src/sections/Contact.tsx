/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-sub-title">Entre em conato</h2>
      <p className="contact-text">
        Para propostas, envie-me um email ou contacte-me no LinkedIn e responderei imediatamente 24 horas por dia, 7 dias por semana.      
      </p>
      <div className="contact-cta">
        <Button link="mailto:contato.vitorfariass@gmail.com" text="Email" />
        <Button link="https://www.linkedin.com/in/devvitorfarias/" text="Linkedin" />
      </div>
    </motion.div>
  );
}

export default Contact;
