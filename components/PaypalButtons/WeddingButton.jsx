import React from "react";

export const WeddingButton = () => {
  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
      style={{ textAlign: "center" }}
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="ATU6LWC2VE6JS" />
      <input type="hidden" name="currency_code" value="MXN" />
      <input
        type="image"
        src="https://res.cloudinary.com/dfiaqxhba/image/upload/v1704771287/birthday_example/Screenshot_2024-01-08_at_21.33.22_gn41rr.png"
        border="0"
        name="submit"
        title="PayPal es una forma segura y fácil de pagar en línea."
        alt="Comprar ahora"
        style={{ width: "60%" }}
      />
    </form>
  );
};
