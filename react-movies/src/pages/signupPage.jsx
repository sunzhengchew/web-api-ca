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
import { Navigate } from "react-router";
import { AuthContext } from '../contexts/authContext';

const SignUpPage = () => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const register = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);

    // Check if passwords match
    if (password !== passwordAgain) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Check password strength
    if (!validPassword) {
      setErrorMessage(
        "Password must be at least 8 characters long and contain at least one letter, one number, and one special character."
      );
      return;
    }

    const result = await context.register(userName, password);

    if (result.success) {
      setSuccessMessage(result.message || "The sign up is successful!");
    } else {
      setErrorMessage(result.message || "Sign up failed. Please try again.");
    }
  };


  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" gutterBottom align="center">
          Sign Up
        </Typography>

        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          Register a username and password to create an account
        </Typography>

        <Box component="form">
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            variant="outlined"
            onChange={(e) => setUserName(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            margin="normal"
            variant="outlined"
            onChange={(e) => setPasswordAgain(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            onClick={register}
          >
            Register
          </Button>
        </Box>
        {errorMessage && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {errorMessage}
          </Alert>
        )}

        {successMessage && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {successMessage}
          </Alert>
        )}

      </Paper>
    </Container>
  );
};

export default SignUpPage;

