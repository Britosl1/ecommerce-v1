import React from "react";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box, Tooltip } from "@mui/material";
import IndividualRatePerTrafficChannel from "../IndividualRatePerTrafficChannel";
import { ConvertionChannelEnum } from "../../../context/ConvertionsContext";

const ConvertionRate: React.FC = () => {
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
      <IndividualRatePerTrafficChannel
        channelName={ConvertionChannelEnum.GENERAL}
      />
    </Box>
  );
};

export default ConvertionRate;
