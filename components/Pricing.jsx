"use client";
import { Button } from "@mui/material";
import ProductCard from "./ProductCard";
import { BirthdayButton, SpecialDateButton, WeddingButton } from ".";

export const Pricing = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="pricing-title" id="precios">
        Precios
      </div>
      <div className="products-pricing-container">
        <ProductCard
          title={"Cumpleaños"}
          image={
            "https://res.cloudinary.com/dfiaqxhba/image/upload/v1704691782/invitationspage/three-floor-birthday-cake_1_yeqlcs.svg"
          }
          price={"900"}
          form={<BirthdayButton />}
          includes={[
            "Foto portada",
            "Cuenta regresiva",
            "Lugar del evento (Google Maps)",
            "Itinerario Personalizado",
            "Código de vestimenta",
            "Mesa de regalos",
            "Cuenta Bancaria / Money Gift",
            "Hashtag Instagram",
            "Galería de fotos",
            "Canción favorita",
            "Contacto",
          ]}
          // example={"https://myspecialdatemx.com/ejemplo/"}
        />
        <ProductCard
          title={"Boda"}
          image={
            "https://res.cloudinary.com/dfiaqxhba/image/upload/v1704692020/invitationspage/706439_jdtmai.png"
          }
          price={"1,290"}
          form={<WeddingButton />}
          includes={[
            "Foto portada",
            "Frase memorable o significativa",
            "Cuenta regresiva",
            "Padres / Padrinos",
            "Ceremonia religiosa (Google Maps)",
            "Lugar del evento (Google Maps)",
            "Itinerario Personalizado",
            "Código de vestimenta",
            "Mesa de regalos",
            "Cuenta Bancaria / Money Gift",
            "Hashtag Instagram",
            "Galería de fotos",
            "Lista de confirmación de invitados",
            "Canción favorita",
            "Contacto",
          ]}
        />

        <ProductCard
          title={"Your special day"}
          image={
            "https://res.cloudinary.com/dfiaqxhba/image/upload/v1704692564/invitationspage/75624_u4rbzy.png"
          }
          price={"1,290"}
          form={<SpecialDateButton />}
          includes={[
            "Foto portada",
            "Frase memorable o significativa",
            "Cuenta regresiva",
            "Lugar del evento (Google Maps)",
            "Itinerario Personalizado",
            "Código de vestimenta",
            "Mesa de regalos",
            "Cuenta Bancaria / Money Gift",
            "Hashtag Instagram",
            "Galería de fotos",
            "Lista de confirmación de invitados",
            "Canción favorita",
            "Contacto",
          ]}
          extras={"XV's | Baby Shower | Bautizo"}
        />
      </div>

      <div>
        <Button
          variant="outlined"
          className="example-button"
          onClick={() =>
            window.open("https://myspecialdatemx.com/ejemplo/", "_blank")
          }
        >
          Ver ejemplo
        </Button>
        <a href={"https://myspecialdatemx.com/ejemplo/"}></a>
      </div>
    </div>
  );
};
