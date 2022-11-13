import React from "react";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box, Button, TextField, Tooltip } from "@mui/material";
import { useConvertionRate } from "../../../hooks/convertionCalculations";

const ConvertionRate: React.FC = () => {
  const {
    updateVisitors,
    updateSells,
    calculateConvertionRate,
    results,
    error,
  } = useConvertionRate();

  return (
    <Box
      border={1}
      padding={2}
      width={200}
      borderRadius={2}
      boxShadow={2}
      bgcolor={"white"}
      borderColor={"transparent"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      sx={{
        cursor: "pointer",
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <h3>Convertion Rate</h3>
        <Tooltip title="Number of visitors that take action on your website, divided by the total number of visitors">
          <InfoOutlinedIcon fontSize="small" />
        </Tooltip>
      </Box>
      <TextField
        id="outlined-basic"
        label="Number of Visitors"
        variant="outlined"
        type={"number"}
        sx={{ mb: 2 }}
        name={"visitors"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateVisitors(e)}
      />
      <TextField
        id="outlined-basic"
        label="Number of sells"
        variant="outlined"
        type={"number"}
        sx={{ mb: 2 }}
        name={"sells"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateSells(e)}
      />
      <Button variant="outlined" onClick={calculateConvertionRate}>
        Calculate
      </Button>
      <Box
        sx={{
          mt: 2,
          alignSelf: "center",
          "&:hover": {
            color: "primary.light",
          },
        }}
      >
        {error ? (
          <Box color={"error.main"}>Add values</Box>
        ) : (
          `${results.toFixed(2)}%`
        )}
      </Box>
    </Box>
  );
};

export default ConvertionRate;
