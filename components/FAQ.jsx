"use client";
import { Questions } from "./Questions";
import * as React from "react";

export const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué tipo de invitaciones digitales ofrecen?",
      answer:
        "Ofrecemos la creación de invitaciones digitales únicas y personalizadas para cualquier ocasión, como bodas, cumpleaños, baby showers, y más.",
    },
    {
      question: "¿Cómo puedo personalizar mi invitación digital?",
      answer:
        "Puede personalizar su invitación digital proporcionándonos la información necesaria, como nombres, fechas, ubicación, frases relevantes, y cualquier otra información relevante. También puede seleccionar elementos personalizados, como imágenes, colores y tipografías.",
    },
    {
      question:
        "¿Cuánto tiempo tarda en entregarse la invitación digital final?",
      answer:
        "Nos comprometemos a entregar la invitación digital final en un plazo de una semana, a partir de que se haya proporcionado toda la información requerida, incluyendo el formulario y las fotografías necesarias.",
    },
    {
      question: "¿Cuántas revisiones puedo realizar en mi invitación digital?",
      answer:
        "Usted tiene derecho a realizar un máximo de dos revisiones sin costo adicional. Durante estas revisiones, puede solicitar cambios en el diseño, la información o cualquier otro aspecto de la invitación. Si desea realizar más revisiones después de las dos incluidas, se aplicará un costo adicional por revisión adicional.",
    },
    {
      question: "¿Cuáles son las políticas de cancelación y reembolso?",
      answer:
        "Si desea cancelar el pedido de invitaciones digitales antes de que se haya iniciado el proceso de diseño y personalización, se realizará un reembolso completo descontando las comisiones y los costes totales del intermediario de pago (PayPal). Una vez iniciado el proceso de diseño y personalización, no se realizarán reembolsos en caso de cancelación.",
    },
    {
      question:
        "¿Cómo se garantiza la confidencialidad de la información proporcionada?",
      answer:
        "Nos comprometemos a mantener la confidencialidad de la información proporcionada por nuestros clientes. Todos los datos e información compartidos con nosotros serán tratados con el más alto nivel de seguridad y confidencialidad. No divulgaremos, venderemos ni compartiremos de ninguna manera la información confidencial proporcionada por nuestros clientes.",
    },
    {
      question:
        "¿Puedo solicitar cambios adicionales después de las dos revisiones incluidas?",
      answer:
        "Sí, puede solicitar cambios adicionales después de las dos revisiones incluidas. Sin embargo, se aplicará un costo adicional por cada revisión adicional, el cual se determinará según la complejidad de los cambios solicitados y se acordará con usted antes de realizar el trabajo adicional.",
    },
    {
      question:
        "¿Qué sucede si necesito cancelar mi pedido después de que se haya iniciado el proceso de diseño y personalización?",
      answer:
        "En caso de que necesite cancelar su pedido después de que se haya iniciado el proceso de diseño y personalización, no se realizará ningún reembolso. Sin embargo, se permitirán cambios en el pedido hasta un máximo de 2 ocasiones, a menos que se acuerde lo contrario entre usted y nuestra empresa. Si se requieren modificaciones extras a los datos previamente entregados en el formulario, podrán aplicar tarifas adicionales.",
    },
  ];

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div className="faq-title">FAQ</div>
      <div className="faq-container">
        <div>
          {faqs.map((faq, index) => (
            <Questions
              key={index}
              expanded={expanded}
              handleChange={handleChange}
              question={faq.question}
              answer={faq.answer}
              panelId={`panel${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
