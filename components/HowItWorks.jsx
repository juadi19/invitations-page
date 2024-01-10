import { Step } from "./Step";

export const HowItWorks = () => {
  return (
    <div className="hiw-container" id="¿cómo funciona?">
      <div className="hiw-title">¿Cómo funciona?</div>
      <div className="steps-container">
        <Step
          title={"1. Elije tu producto"}
          image={
            "https://res.cloudinary.com/dfiaqxhba/image/upload/v1704690142/invitationspage/cursor-over-list_yf3gqm.svg"
          }
          description={
            "Selecciona el producto que deseas comprar de nuestro catálogo. Contamos con 3 productos entre los cuales puedes elegir."
          }
        />
        <Step
          title={"2. Paga con PayPal"}
          image={
            "https://res.cloudinary.com/dfiaqxhba/image/upload/v1704690752/invitationspage/pay-pal-icon_b8pj21.svg"
          }
          description={
            "Paga con PayPal. Te enviaremos una factura a tu correo electrónico."
          }
        />
        <Step
          title={"3. Llena el formulario"}
          image={
            "https://res.cloudinary.com/dfiaqxhba/image/upload/v1704690960/invitationspage/FORMULARIO_yql78l.svg"
          }
          description={
            "Completa el formulario con tu información y las especificaciones de la invitación."
          }
        />

        <Step
          title={"4. Recibe tu invitación"}
          image={
            "https://res.cloudinary.com/dfiaqxhba/image/upload/v1704691482/invitationspage/hand-receiving-package-in-grey-tones-_snxhps.svg"
          }
          description={"Recibe tu invitación y administra tus invitados."}
        />
      </div>
    </div>
  );
};
