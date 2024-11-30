import { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = ({ header = "", children }) => {
  // useState here
  return (
    <section className={styles.Accordion}>
      <h2 className={styles.heading}>{header}</h2>
      {children}
    </section>
  );
};

const AccordionItem = ({ children }) => {
  return <div className={styles.AccordionItem}>{children}</div>;
};
const AccordionTrigger = ({ children }) => {
  return <button className={styles.AccordionTrigger}>{children}</button>;
};
const AccordionContent = ({ children }) => {
  return <div className={styles.AccordionContent}>{children}</div>;
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
