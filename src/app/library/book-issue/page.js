"use client";

import { useState, useEffect } from "react";
import { fetchData } from "@/app/utility/fetch-data";

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
  Skeleton,
} from "@mui/material";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { PostData } from "@/app/utility/post-data";

export default function BookIssuePage() {
  // const [books, setBooks] = useState([]);
  const [category, setCategory] = useState([]);
  const [borrowers, setBorrowers] = useState([]);
  const [numberOfDays, setNumberOfDays] = useState(30);

  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedBorrower, setSelectedBorrower] = useState(null);
  const [borrowLineItems, setBorrowLineItems] = useState([]);

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const [loading, setLoading] = useState(true);

  async function loadLibraryData() {
    try {
      setLoading(true);
      const category_response = await fetchData("library/category/");
      const borrower_response = await fetchData("library/borrower/");

      setCategory(category_response.data);
      setBorrowers(borrower_response.data);
      console.log(borrower_response.data);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadLibraryData();
  }, []);

  const handleCategoryChange = async (event, newValue) => {
    setSelectedCategory(newValue);
    console.log(newValue.id);
    try {
      const result = await fetchData(
        `library/book/by/category/${newValue.id}/`
      );
      setFilteredBooks(result.data);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };
  const handleDaysChange = (e) => {
    setNumberOfDays(e.target.value);
  };
  const handleBookChange = (event, newValue) => {
    setSelectedBook(newValue);
  };
  const handleBorrowerChange = (event, newValue) => {
    setSelectedBorrower(newValue);
  };

  const handleAddBook = () => {
    // Prevent duplicate entries
    if (borrowLineItems.some((item) => item.id === selectedBook.id)) {
      showAlert("Book Already Added!!", "error");
      return;
    }
    setBorrowLineItems([...borrowLineItems, selectedBook]);
    setSelectedBook(null);
  };

  const handleDeleteBook = (id) => {
    setBorrowLineItems(borrowLineItems.filter((item) => item.id !== id));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!selectedBorrower) {
      showAlert("select a borrower first!!", "error");
      return;
    }
    if (borrowLineItems.length === 0) {
      showAlert("Add books to borrow!!!", "error");
      return;
    }
    setOpen(true);
  };

  const handleConfirmClick = async () => {
    const formData = new FormData();
    formData.append("borrower", selectedBorrower.id);
    formData.append("books", JSON.stringify(borrowLineItems));
    formData.append("number_of_days", numberOfDays);

    try {
      const response = await PostData("library/issue/book/", formData);
      showAlert(response.data.message, "success");
      setSelectedBorrower(null);
      setBorrowLineItems([]);
      setSelectedCategory(null);
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
      {loading === true ? (
        <Box sx={{ width: 800, justifyContent: "center", marginLeft: 50 }}>
          {" "}
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      ) : (
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
                  <Typography
                    variant="caption"
                    gutterBottom
                    sx={{ display: "block" }}
                  >
                    Transactions for{" "}
                    <Chip
                      label={`Name: ${selectedBorrower?.name} | Library ID:${selectedBorrower?.library_id}`}
                      color="secondary"
                    />
                  </Typography>
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
                            Library ID:{option.library_id} | Email:{" "}
                            {option.email} | Type: {option.borrower_type.name}
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
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    id="standard-basic"
                    value={numberOfDays}
                    onChange={handleDaysChange}
                    label="Number of Days"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              {" "}
              <Grid container spacing={2} sx={{ padding: 4 }} component={Paper}>
                {" "}
                <Grid size={{ xs: 12, md: 4 }}>
                  {" "}
                  <Autocomplete
                    key="category-select"
                    options={category.filter((s) => s.is_active)}
                    getOptionLabel={(option) => option?.name}
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label={`select a category`}
                        variant="outlined"
                      />
                    )}
                    fullWidth
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  {" "}
                  <Autocomplete
                    options={filteredBooks.filter((s) => s.is_active)}
                    getOptionLabel={(option) => option?.name ?? ""}
                    value={selectedBook}
                    isOptionEqualToValue={(option, value) =>
                      option.id === value.id
                    }
                    onChange={handleBookChange}
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
                            Accession:{option.accession_number} | Author:{" "}
                            {option.author.name} | Category:{" "}
                            {option.category.name} | Publisher:{" "}
                            {option.publisher.name}{" "}
                          </Typography>{" "}
                        </Paper>
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select a book"
                        variant="outlined"
                      />
                    )}
                    fullWidth
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  {" "}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddBook}
                    sx={{ mt: 2, width: "50%" }}
                  >
                    Add To Issue
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <Box sx={{ flexGrow: 1, padding: 2 }} component={Paper}>
                {" "}
                {borrowLineItems.length === 0 ? (
                  <Box sx={{ padding: 4 }}>
                    <Typography variant="h4" gutterBottom>
                      No Book added
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
                        {borrowLineItems.map((book) => (
                          <TableRow key={book.id}>
                            <TableCell>
                              <Typography variant="h5" gutterBottom>
                                {book.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                gutterBottom
                                sx={{ display: "block" }}
                              >
                                Accession No:{book.accession_number} | Author:
                                {book.author.name} | Publisher:{" "}
                                {book.publisher.name} | Category:{" "}
                                {book.category.name}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="contained"
                                color="error"
                                onClick={() => handleDeleteBook(book.id)}
                              >
                                Delete
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
            <Grid size={{ xs: 12, md: 12 }}>
              <Button
                variant="contained"
                sx={{ padding: 2 }}
                color="error"
                onClick={handleFormSubmit}
              >
                Issue Book Now
              </Button>
            </Grid>
          </Grid>

          {/* backdrop here  */}
          <Backdrop
            sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
            open={open}
            onClick={handleClose}
          >
            <Box
              sx={{
                flexGrow: 1,
                marginLeft: 40,
                marginRight: 40,
                marginTop: -10,
              }}
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
                    {borrowLineItems.map((book) => (
                      <TableRow key={book.id}>
                        <TableCell>
                          <Typography variant="overline" gutterBottom>
                            {book.name}
                          </Typography>
                          <Typography
                            variant="caption"
                            gutterBottom
                            sx={{ display: "block" }}
                          >
                            Accession No:{book.accession_number} | Author:
                            {book.author.name} | Publisher:{" "}
                            {book.publisher.name} | Category:{" "}
                            {book.category.name}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
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
      )}
    </Box>
  );
}
