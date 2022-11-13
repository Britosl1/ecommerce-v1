import React from "react";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box, Tooltip } from "@mui/material";
import IndividualRatePerTrafficChannel from "../IndividualRatePerTrafficChannel";

const ConversionRatePerTrafficChannel: React.FC = () => {
  return (
    <Box
      border={1}
      padding={2}
      width={500}
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
        <h3>Conversion Rate Per Traffic Channel</h3>
        <Tooltip title="Number of visitors that take action on each selling channel, divided by the total number of visitors of each individually">
          <InfoOutlinedIcon fontSize="small" />
        </Tooltip>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <IndividualRatePerTrafficChannel title="Mercado Livre" />
        <IndividualRatePerTrafficChannel title="Amazon" />
      </Box>
    </Box>
  );
};

export default ConversionRatePerTrafficChannel;
