import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Alert
} from "@mui/material";
import { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router";

const StartPage = () => {
  const context = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const login = async () => {
    setErrorMessage("");
    const result = await context.authenticate(userName, password);
    if (!result.success) {
      setErrorMessage("Username or password is incorrect");
    }
  };

  let location = useLocation();

  // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
  const { from } = location.state ? { from: location.state.from.pathname } : { from: "/movies/home" };

  if (context.isAuthenticated === true) {
    return <Navigate to={from} />;
  }

return (
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" gutterBottom align="center">
          Login
        </Typography>

        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          You must log in to view protected pages
        </Typography>

        <Box component="form" onSubmit={(e) => e.preventDefault()}>
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            variant="outlined"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            onClick={login}
          >
            Log In
          </Button>
        </Box>

        {errorMessage && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {errorMessage}
          </Alert>
        )}

        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Not registered?{" "}
          <Link to="/signup" style={{ color: "#ffb300" }}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default StartPage;