"use client";

import { useState, useEffect } from "react";
import { fetchData } from "@/app/utility/fetch-data";
import { PostData } from "@/app/utility/post-data";

import {
  Box,
  Grid,
  CircularProgress,
  Paper,
  Typography,
  Stack,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Snackbar,
  Alert,
  Autocomplete,
  Chip,
  Backdrop,
  Divider,
} from "@mui/material";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function BookReturnPage() {
  const [records, setRecords] = useState([]);
  const [borrowers, setBorrowers] = useState([]);
  const [selectedBorrower, setSelectedBorrower] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  async function loadLibraryData() {
    try {
      setLoading(true);
      const borrower_response = await fetchData("library/borrower/");

      setBorrowers(borrower_response.data);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadLibraryData();
  }, [fetchTransactions]);

  async function fetchTransactions() {
    try {
      setLoading(true);
      if (selectedBorrower) {
        const response = await fetchData(
          `library/borrowed/book/${selectedBorrower.id}/`
        );
        setRecords(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch books:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, [selectedBorrower]);

  const handleBorrowerChange = (event, newValue) => {
    setSelectedBorrower(newValue);
    console.log(newValue.id);
  };
  const handleReturnBook = async (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleConfirmClick = async () => {
    const formData = new FormData();
    formData.append("record_id", selectedId);
    try {
      const response = await PostData("library/return/book/", formData);
      showAlert("Book successfully Returned", "success");
      await fetchTransactions();
      await loadLibraryData();
    } catch (error) {
      showAlert("Error issuing book!!", "error");
    }
  };
  const handleCancelClick = () => {
    setOpen(false);
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
      <Grid
        container
        spacing={2}
        sx={{ padding: 4, marginBottom: 2, backgroundColor: "#C9CDCF" }}
      >
        {" "}
        <Grid size={{ xs: 12, md: 12 }}>
          <Box sx={{ flexGrow: 1, padding: 4 }} component={Paper}>
            {" "}
            {selectedBorrower ? (
              <Box sx={{ flexGrow: 1 }}>
                {" "}
                <Typography
                  variant="caption"
                  gutterBottom
                  sx={{ display: "block" }}
                >
                  Transactions for{" "}
                  <Chip
                    label={`Name: ${selectedBorrower?.name} | Library ID:${selectedBorrower?.library_id} | Type:${selectedBorrower.borrower_type.name}`}
                    color="secondary"
                  />
                </Typography>
              </Box>
            ) : (
              <Chip color="error" label="Borrower Not Selected" />
            )}
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <Grid container spacing={2} component={Paper} sx={{ padding: 4 }}>
            {" "}
            <Grid size={{ xs: 12, md: 6 }}>
              {" "}
              <Autocomplete
                options={borrowers}
                getOptionLabel={(option) => option?.name ?? ""}
                value={selectedBorrower}
                // isOptionEqualToValue={(option, value) => option.id === value.id}
                onChange={handleBorrowerChange}
                renderOption={(props, option) => (
                  <Box component="li" {...props} key={option.id}>
                    {" "}
                    <Paper
                      sx={{ p: 1, width: "100%" }}
                      elevation={0}
                      key={option.id}
                    >
                      {" "}
                      <Typography variant="subtitle1">
                        {option.name}
                      </Typography>{" "}
                      <Typography variant="body2" color="text.secondary">
                        {" "}
                        Library ID:{option.library_id} | Email: {option.email} |
                        Type: {option.borrower_type.name}
                      </Typography>
                    </Paper>{" "}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select a Borrower"
                    variant="outlined"
                  />
                )}
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <Box sx={{ flexGrow: 1, padding: 2 }} component={Paper}>
            {" "}
            {records.length === 0 ? (
              <Box sx={{ padding: 4 }}>
                <Typography variant="h4" gutterBottom>
                  No Record Found
                </Typography>
              </Box>
            ) : (
              <TableContainer sx={{ mt: 3 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Book Name</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {records.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell>
                          <Typography variant="h5" gutterBottom>
                            {record.book.name}
                          </Typography>
                          <Typography
                            variant="overline"
                            color="success"
                            gutterBottom
                          >
                            Issued On: {record.from_date}
                          </Typography>
                          <Typography
                            variant="caption"
                            gutterBottom
                            sx={{ display: "block" }}
                          >
                            Accession No:{record.book.accession_number} |
                            Author:
                            {record.book.author.name} | Publisher:{" "}
                            {record.book.publisher.name} | Category:{" "}
                            {record.book.category.name}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => handleReturnBook(record.id)}
                          >
                            Return
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
        </Grid>
      </Grid>

      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <Box
          sx={{ flexGrow: 1, marginLeft: 40, marginRight: 40, marginTop: -10 }}
        >
          <Paper sx={{ padding: 4 }}>
            <Typography
              variant="overline"
              gutterBottom
            >{`Name: ${selectedBorrower?.name} | Library ID:${selectedBorrower?.library_id}`}</Typography>
          </Paper>
          <Divider />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Book Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant="overline" gutterBottom>
                      {records.find((item) => item.id == selectedId)?.book
                        .name || ""}
                    </Typography>
                    <Typography
                      variant="caption"
                      gutterBottom
                      sx={{ display: "block" }}
                    >
                      Accession No:
                      {
                        records.find((item) => item.id == selectedId)?.book
                          .accession_number
                      }{" "}
                      | Author:
                      {
                        records.find((item) => item.id == selectedId)?.book
                          .author.name
                      }{" "}
                      | Publisher:{" "}
                      {
                        records.find((item) => item.id == selectedId)?.book
                          .publisher.name
                      }{" "}
                      | Category:{" "}
                      {
                        records.find((item) => item.id == selectedId)?.book
                          .category.name
                      }
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Paper sx={{ padding: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              sx={{ marginRight: 4 }}
              onClick={handleConfirmClick}
            >
              confirm
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={handleCancelClick}
            >
              cancel
            </Button>
          </Paper>
        </Box>
      </Backdrop>

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
