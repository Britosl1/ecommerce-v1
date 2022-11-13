import React, { useCallback, useState } from "react";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box, Button, TextField, Tooltip } from "@mui/material";

const ConversionRatePerTrafficChannel: React.FC = () => {
  const [visitors, setVisitors] = useState<string>("");
  const [sells, setSells] = useState<string>("");
  const [results, setResults] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const calculateConvertionRate = useCallback(() => {
    if (!visitors || !sells) {
      setError(true);
    } else {
      setError(false);
      setResults((+sells / +visitors) * 100);
    }
  }, [visitors, sells]);

  return (
    <Box
      border={1}
      padding={2}
      // width={500}
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
        <Tooltip title="Number of visitors that take action on your website, divided by the total number of visitors">
          <InfoOutlinedIcon fontSize="small" />
        </Tooltip>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} flexDirection={"column"}>
          <h5>Mercado Livre</h5>
          <TextField
            id="outlined-basic"
            label="Number of Visitors"
            variant="outlined"
            type={"number"}
            sx={{ mb: 2 }}
            name={"visitors"}
            onChange={(e) => setVisitors(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Number of sells"
            variant="outlined"
            type={"number"}
            sx={{ mb: 2 }}
            name={"sells"}
            onChange={(e) => setSells(e.target.value)}
          />
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <h5>Mercado Livre</h5>
          <TextField
            id="outlined-basic"
            label="Number of Visitors"
            variant="outlined"
            type={"number"}
            sx={{ mb: 2 }}
            name={"visitors"}
            onChange={(e) => setVisitors(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Number of sells"
            variant="outlined"
            type={"number"}
            sx={{ mb: 2 }}
            name={"sells"}
            onChange={(e) => setSells(e.target.value)}
          />
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <h5>Amazon</h5>
          <TextField
            id="outlined-basic"
            label="Number of Visitors"
            variant="outlined"
            type={"number"}
            sx={{ mb: 2 }}
            name={"visitors"}
            onChange={(e) => setVisitors(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Number of sells"
            variant="outlined"
            type={"number"}
            sx={{ mb: 2 }}
            name={"sells"}
            onChange={(e) => setSells(e.target.value)}
          />
        </Box>
      </Box>
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

export default ConversionRatePerTrafficChannel;
