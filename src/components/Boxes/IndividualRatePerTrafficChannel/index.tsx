import { Box, Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { useConvertionRate } from "../../../hooks/convertionCalculations";
import {
  ConvertionChannelEnum,
  ConvertionsContext,
} from "../../../context/ConvertionsContext";

export interface IIndividualRatePerTrafficChannelProps {
  title?: string;
  channelName: ConvertionChannelEnum;
}

const IndividualRatePerTrafficChannel: React.FC<
  IIndividualRatePerTrafficChannelProps
> = ({ title, channelName }) => {
  const { addConvertionValues } = useContext(ConvertionsContext);
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
          <Box onClick={() => addConvertionValues(results, channelName)}>
            {results.toFixed(2)}%
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default IndividualRatePerTrafficChannel;
