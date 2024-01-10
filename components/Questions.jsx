"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Questions = ({
  expanded,
  handleChange,
  question,
  answer,
  panelId,
}) => {
  return (
    <Accordion expanded={expanded === panelId} onChange={handleChange(panelId)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        className="faq-question"
      >
        <Typography sx={{ width: "70%", flexShrink: 0, fontWeight: 500 }}>
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ fontWeight: 300, color: "#515151" }}>
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
