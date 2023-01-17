import { Box } from "@mui/material";
import React, { useContext } from "react";
import Boxes from "../../components/Boxes";
import NavBar from "../../components/NavBar";
import { ConvertionsContext } from "../../context/ConvertionsContext";

const Home: React.FC = () => {
  const { convertionsList } = useContext(ConvertionsContext);
  console.log(convertionsList);
  return (
    <Box>
      <NavBar />
      <Boxes.ConvertionRate />
      <Boxes.ConversionRatePerTrafficChannel />
      {convertionsList
        .filter((channel) => channel.channel === "GENERAL")
        .map((t) => (
          <ul>
            <li key={t.id}>{t.result}</li>
          </ul>
        ))}
    </Box>
  );
};

export default Home;
