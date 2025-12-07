"use client";
import { useState } from "react";

import { Alert, Snackbar, Box } from "@mui/material";

export default function ShowAlertMessage({ open, message, severity }) {
  const [alertOpen, setAlertOpen] = useState(open);
  const [alertMessage, setAlertMessage] = useState(message);
  const [alertSeverity, setAlertSeverity] = useState(severity);

  //   const showAlert = (message, severity) => {
  //     setAlertMessage(message);
  //     setAlertSeverity(severity);
  //     setAlertOpen(true);
  //   };
  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
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
