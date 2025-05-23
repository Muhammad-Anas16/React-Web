import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Carousel from "./Carousel";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
}));

export default function SliderSection() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        border: "1px solid",
        borderColor: "grey.400",
      }}
    >
      {/* Left List Section */}

      <List
        sx={{
          width: { xs: "0%", md: "20%" },
          display: { xs: "none", md: "block" },
          pr: { md: 2 },
        }}
      >
        <ul>
          <ListItem>
            <ListItemText primary={`Woman’s Fashion`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Men’s Fashion`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Electronics`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Home & Lifestyle`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Medicine`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Men’s Fashion`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Health & Beauty`} />
          </ListItem>
        </ul>
      </List>

      {/* Right Carousel Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "80%" },
        }}
      >
        <Carousel />
      </Box>
    </Box>
  );
}
