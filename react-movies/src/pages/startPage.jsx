import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

import { Link } from "react-router";

const StartPage = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" gutterBottom align="center">
          Login
        </Typography>

        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          You must log in to view protected pages
        </Typography>

        <Box component="form">
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            variant="outlined"
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Log In
          </Button>
        </Box>

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

