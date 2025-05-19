import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Search } from "@mui/icons-material";

export default function SearchModal({ setSearch }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [searchValue, setSearchValue] = useState(null);

  return (
    <div>
      <Button onClick={handleOpen} sx={{ color: "black" }}>
        <Search />
      </Button>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "250px",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: "10%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "20px",
          }}
        >
          <FormControl
            sx={{
              m: 1,
              width: "90%",
              // borderRadius: 900,
              // border: "2px solid black",
            }}
          >
            <OutlinedInput
              type={`text`}
              onChange={(e) => setSearchValue(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setSearch(searchValue);
                      handleClose();
                      setSearchValue(null);
                    }}
                    edge="end"
                  >
                    <Search
                      sx={{ fontSize: 28, stroke: "#000", strokeWidth: 1.5 }}
                    />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
