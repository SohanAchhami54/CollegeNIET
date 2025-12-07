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
} from "@mui/material";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function BorrowerHomePage() {
  const [borrowers, setBorrowers] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredBorrowers, setFilteredBorrowers] = useState(borrowers);

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  useEffect(() => {
    async function loadBorrowerData() {
      try {
        setLoading(true);
        const response = await fetchData("library/borrower/");

        setBorrowers(response.data);

        setFilteredBorrowers(response.data);
      } catch (error) {
        console.error("Failed to fetch borrower List:", error);
      } finally {
        setLoading(false);
      }
    }
    loadBorrowerData();
  }, []);

  useEffect(() => {
    if (borrowers.length > 0) {
      setColumns(Object.keys(borrowers[0]));
    }
  }, [borrowers]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    const result = borrowers.filter(
      (item) =>
        item.name.includes(value) ||
        item.email.includes(value) ||
        item.library_id.includes(value) ||
        item.borrower_type.name.includes(value)
    );

    setFilteredBorrowers(result);
  };

  const getTotalBorrower = () => {
    return borrowers.length;
  };
  const getTotalBookBorrowed = () => {
    const total = borrowers.reduce((sum, b) => sum + b.total_borrowed, 0);
    return total;
  };

  const handleRefreshClick = async () => {
    try {
      const response = await fetchData("library/borrower/create/");
      showAlert(response.data.message, "success");
    } catch (error) {
      showAlert("Error updating borrower records", "error");
    }
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
        sx={{ backgroundColor: "#C9CDCF", padding: 4, marginBottom: 2 }}
      >
        <Grid size={{ xs: 12, md: 12, sm: 12 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Stack spacing={2} direction="row" sx={{ padding: 2 }}>
              {" "}
              <Card
                sx={{
                  minWidth: 275,
                  backgroundColor: "#640D5F",
                  color: "white",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h4" gutterBottom>
                    Borrower
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    {loading ? <CircularProgress /> : getTotalBorrower()}
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  minWidth: 275,
                  backgroundColor: "#799EFF",
                  color: "white",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h4" gutterBottom>
                    Total Book Borrowed
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    {loading ? <CircularProgress /> : getTotalBookBorrowed()}
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ backgroundColor: "#C9CDCF", padding: 4 }}
      >
        <Grid size={{ xs: 12, md: 12, sm: 12, padding: 4 }}>
          <Stack spacing={2}>
            {" "}
            <Paper sx={{ padding: 2 }}>
              <Typography
                sx={{ textAlign: "center" }}
                variant="h5"
                gutterBottom
              >
                Library Borrower Records
              </Typography>
            </Paper>
            <Box sx={{ flexGrow: 1 }}>
              <Paper elevation={1} sx={{ marginBottom: 2, padding: 4 }}>
                {" "}
                <TextField
                  variant="standard"
                  id="outlined-basic"
                  label="search borrower by Name or email or library Id"
                  onChange={handleChange}
                  value={searchText}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                  fullWidth
                />
                <Box sx={{ flexGrow: 1, marginTop: 2 }}>
                  {" "}
                  <Typography
                    variant="overline"
                    gutterBottom
                    sx={{ display: "block" }}
                  >
                    Total Search Result:{" "}
                    <Chip label={filteredBorrowers?.length} color="secondary" />
                  </Typography>
                </Box>
              </Paper>
              <Button
                variant="outlined"
                startIcon={<RefreshIcon />}
                color="warning"
                onClick={handleRefreshClick}
              >
                Refresh borrower record
              </Button>
              <TabularData
                borrowers={filteredBorrowers}
                columns={columns}
                loading={loading}
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>

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

function TabularData({ borrowers, columns, loading }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {" "}
      <TableContainer component={Paper} sx={{ maxHeight: 350 }}>
        <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Library ID
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Total Borrowed
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Email
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Borrower Type
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : borrowers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  No borrower found.
                </TableCell>
              </TableRow>
            ) : (
              borrowers.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row" align="left">
                    {row.library_id}
                  </TableCell>
                  <TableCell align="left">{row.total_borrowed}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.borrower_type.name}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
