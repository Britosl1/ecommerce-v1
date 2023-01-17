import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ConvertionsContextProvider } from "./context/ConvertionsContext";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

function App() {
  return (
    <ConvertionsContextProvider>
      <Box padding={2}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Box>
    </ConvertionsContextProvider>
  );
}

export default App;
