import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import Carousel from "./Carousel";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
}));

export default function SlideSection() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      {/* Left List Section */}

      <List
        sx={{
          width: { xs: "0%", md: "20%" },
          display: { xs: "none", md: "block" },
          pr: { md: 2 },
        }}
        subheader={<li />}
      >
        {[0, 1,].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul>
              <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
              {[0, 1, 2].map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>

      {/* Right Carousel Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "80%" }, // Full width on small, 80% on medium+
        }}
      >
        <Carousel />
      </Box>
    </Box>
  );
}
