"use client";
import { Button } from "@mui/material";
import React from "react";

export const ProductCard = ({
  title,
  image,
  price,
  form,
  includes,
  example,
  extras,
}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-img">
        <img src={image} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "1rem 0",
        }}
      >
        <span style={{ fontWeight: "bolder" }}>$</span>
        <h2 className="product-price">{price}</h2>
      </div>

      <div style={{ height: "25px" }}>{form}</div>

      {/* <div
        className="buy-button-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href=""
          style={{
            textDecoration: "none",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
            padding: "0.5rem 1.5rem",
            borderRadius: "18px",
          }}
        >
          <img
            src="https://res.cloudinary.com/dfiaqxhba/image/upload/v1704693130/invitationspage/4846327_npnn0b.png"
            alt=""
            style={{ width: "22px", marginRight: "0.5rem" }}
          />
          Comprar ahora
        </a>
      </div> */}

      <div className="includes-info">
        <p>Incluye:</p>
        <ul className="includes-list">
          {includes &&
            includes.map((item, index) => (
              <li key={index} className="list-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                  style={{
                    marginRight: "0.7rem",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>

                <span style={{ fontWeight: "normal" }}>{item}</span>
              </li>
            ))}
        </ul>
      </div>

      {/* <div className="example-button-container">
        <Button
          variant="outlined"
          className="example-button"
          onClick={() => window.open(example, "_blank")}
        >
          Ver ejemplo
        </Button>
        <a href={example}></a>
      </div> */}

      <div style={{ fontFamily: "Quicksand", color: "#1A2737" }}>{extras}</div>
    </div>
  );
};

export default ProductCard;
