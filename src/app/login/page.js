"use client";
import { useState } from "react";
import {
  Grid,
  Box,
  Paper,
  Stack,
  Avatar,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { handleLoginFormSubmit } from "../utility/loginform-submit";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await handleLoginFormSubmit(formData);
    if (response.success) {
      if (response.userType === "Superuser") {
        redirect("/admin/");
      } else if (response.userType === "Librarian") {
        redirect("library/");
      } else {
        redirect("/");
      }
    } else {
      showAlert(response.error, "error");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showAlert = (message, severity) => {
    setAlertMessage(message);
    setAlertSeverity(severity);
    setAlertOpen(true);
  };
  const handleAlertClose = () => {
    setAlertOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12 }}>
          {" "}
          <Box
            sx={{
              minHeight: "90vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "grey",
              padding: 2,
            }}
          >
            {" "}
            <Paper
              elevation={3}
              sx={{
                padding: 4,
                borderRadius: 3,
                maxWidth: 520,
                width: "100%",
                textAlign: "center",
                background: "#fff",
                mt: 10,
              }}
            >
              <Stack alignItems="center" spacing={2}>
                <Avatar
                  src="nietlogo.jpg"
                  sx={{ bgcolor: "#0dcaf0", width: 200, height: 200 }}
                />
                <Typography
                  variant="overline"
                  sx={{ fontWeight: 600, color: "#333" }}
                >
                  National Institute of Engineering & Technology
                </Typography>
              </Stack>
              <form onSubmit={handleSubmit}>
                <Stack spacing={2} sx={{ marginTop: 3 }}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                  />

                  <TextField
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: "#0dcaf0",
                      color: "#fff",
                      fontWeight: "bold",
                      padding: "12px",
                      "&:hover": {
                        backgroundColor: "#009e73",
                      },
                    }}
                    size="large"
                  >
                    Login
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Box>
        </Grid>
      </Grid>
      {/* Alert Snackbar */}
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleAlertClose}
          severity={alertSeverity}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
