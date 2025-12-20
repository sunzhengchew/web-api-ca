import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const SignUpPage = () => {
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
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
          />

          <TextField
            fullWidth
            label="Confirm Password"
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
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUpPage;

