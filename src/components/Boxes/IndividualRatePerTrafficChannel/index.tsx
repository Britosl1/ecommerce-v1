import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useConvertionRate } from "../../../hooks/convertionCalculations";

interface IIndividualRatePerTrafficChannelProps {
  title?: string;
}

const IndividualRatePerTrafficChannel: React.FC<
  IIndividualRatePerTrafficChannelProps
> = ({ title }) => {
  const {
    updateVisitors,
    updateSells,
    calculateConvertionRate,
    results,
    error,
  } = useConvertionRate();

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box mb={1} sx={{ fontWeight: "bold", fontSize: "0.83rem" }}>
        {title}
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

export default IndividualRatePerTrafficChannel;
