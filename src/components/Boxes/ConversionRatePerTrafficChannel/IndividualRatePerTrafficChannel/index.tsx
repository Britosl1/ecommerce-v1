import { Box, TextField } from "@mui/material";
import React from "react";

const IndividualRatePerTrafficChannel: React.FC = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <h5>Amazon</h5>
      <TextField
        id="outlined-basic"
        label="Number of Visitors"
        variant="outlined"
        type={"number"}
        sx={{ mb: 2 }}
        name={"visitors"}
        // onChange={(e) => setVisitors(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Number of sells"
        variant="outlined"
        type={"number"}
        sx={{ mb: 2 }}
        name={"sells"}
        // onChange={(e) => setSells(e.target.value)}
      />
    </Box>
  );
};

export default IndividualRatePerTrafficChannel;
