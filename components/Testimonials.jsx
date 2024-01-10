import { Testimony } from "./Testimony";

export const Testimonials = () => {
  return (
    <div>
      <div className="testimonials-title">Testimonios</div>
      <div className="testimonials-container">
        <Testimony
          text={
            "La mesa de regalos en las invitaciones digitales personalizadas me permitió tener un control completo sobre los regalos que recibí en mi evento. Además, mis invitados encontraron muy conveniente poder elegir un regalo directamente desde la invitación."
          }
          name={"Sofía Garza"}
          rating={5}
        />
        <Testimony
          text={
            "Puedo enviar invitaciones hermosas y personalizadas a mis amigos y familiares de manera rápida y sencilla. ¡Ya no tengo que preocuparme por los costos y el tiempo que implica enviar invitaciones físicas!"
          }
          name={"Estefania Gutierrez"}
          rating={5}
        />
        <Testimony
          text={
            "La opción de mesa de regalos en las invitaciones digitales personalizadas es increíblemente útil. Mis invitados pueden ver qué regalos estoy buscando y elegir el que más les guste."
          }
          name={"Carlos García"}
          rating={5}
        />
      </div>
    </div>
  );
};
