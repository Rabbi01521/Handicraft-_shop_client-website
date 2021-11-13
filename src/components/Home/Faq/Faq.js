import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Container } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import * as React from "react";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Faq = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h4">FAQ</Typography>
      <Box
        sx={{
          width: "100px",
          height: "3px",
          backgroundColor: "black",

          mb: 4,
          mt: 1,
          borderRadius: 15,
        }}
      ></Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            What is so special about Handicraft house decorative items?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            At Handicraft we are dedicated to providing our customers with
            unique handcrafted decorative products that are exclusive to our
            brand. We have our in-house design and production team, who travel
            to most rural parts of India in search of ancient crafts which are
            in need of revival. It’s these miles of a journey through the muddy
            roads and green farms that inspire every theme in Handicraft. Thus
            every product in Handicraft has its own story to tell.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            Where do Handicraft source its house decorative items from?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            All our products in Handicraft are made exclusively for our brand by
            skilled artists. We go around the country looking for crafts and
            craftsperson. Once we decide the craft, we do design innovation on
            it, so it fits your contemporary house decorative items but still
            has its old-world charm intact. Our artisans honing the skills for
            generation helps to bring our design from paper to an exquisite
            decor product that would one day beautify a space of your home.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            Does the decorative product look exactly like the photos on website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The photos of the website are the closest representation of the
            house decorative products. The colour may differ due to the light
            conditions. There might be a slight change in shape and size as
            products are handmade. No two products in Handicraft is exactly the
            same, so what you receive is the nothing but unique.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            Does Handicraft tamper with original crafts form?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No. Handicraft uses the old age method, material, and motifs to
            bring to you the most authentic form of the craft. We take the
            liberty of innovation with the shape, size, and utility of the
            product.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>What is the Warranty on my product?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            At Handicraft we strive harder each day to handcraft our product not
            just to make it aesthetically appealing but also of the highest
            quality and functionality. Fixtures and material used are of
            uncompromised standard. We gladly provide one year guarantee on all
            our products. The warranty does not cover light fixtures and
            associated electrical connections (Example, LED, Adapters, bulb
            holder etc). If something goes wrong with the product during the
            warranty period, please contact Handicraft at
            contact@Handicraft.co.in and we would be more than happy to assist
            you.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default Faq;
