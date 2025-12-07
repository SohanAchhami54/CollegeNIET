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

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import SearchIcon from "@mui/icons-material/Search";

export default function TransactionPage() {
  const [activeRecords, setActiveRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadLibraryData() {
      try {
        setLoading(true);
        const response = await fetchData("library/transaction/");
        setActiveRecords(response.data);
        setFilteredRecords(response.data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      } finally {
        setLoading(false);
      }
    }
    loadLibraryData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {" "}
      <Grid
        container
        spacing={2}
        sx={{ backgroundColor: "#C9CDCF", padding: 4, marginBottom: 2 }}
      >
        <Grid size={{ xs: 12, md: 12 }}>
          <Box
            sx={{ flexGrow: 1, padding: 4, justifyContent: "center" }}
            component={Paper}
          >
            <Typography variant="h5" gutterBottom>
              Library Transactions
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <Box
            sx={{ flexGrow: 1, padding: 4, justifyContent: "center" }}
            component={Paper}
          >
            <TransactionTab records={activeRecords} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TransactionTab({ records }) {
  const [value, setValue] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [filteredRecord, setFilteredRecord] = useState(records);

  useEffect(() => {
    setFilteredRecord(records);
  }, [records]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    const result = records.filter(
      (item) =>
        item.borrower?.borrower_type.name?.toLowerCase().includes(value) ||
        item.borrower?.name?.toLowerCase().includes(value) ||
        item.borrower?.library_id?.toLowerCase().includes(value) ||
        item.book?.name?.toLowerCase().includes(value) ||
        item.book?.author.name?.toLowerCase().includes(value) ||
        item.book?.category.name?.toLowerCase().includes(value) ||
        item.from_date?.split("T")[0].includes(value) ||
        item.issued_by?.email?.toLowerCase().includes(value)
    );

    setFilteredRecord(result);
  };

  return (
    <Box sx={{ width: "100%" }} component={Paper}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={`Active Transactions`} {...a11yProps(0)} />
          <Tab label={`Transaction History`} {...a11yProps(1)} />
          {/* <Tab label={`Publisher  (${publisher_count})`} {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Stack spacing={2} direction="column">
          <TextField
            variant="outlined"
            id="outlined-basic"
            label="search transaction "
            onChange={handleSearchChange}
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
          <Typography variant="body1" gutterBottom>
            Total Search Result: {filteredRecord.length}
          </Typography>
          <TabularData transaction_records={filteredRecord} />
        </Stack>
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={1}>
        <FilterBookRecord
          book_records={books}
          category_record={author}
          name="author"
        />
      </CustomTabPanel> */}
    </Box>
  );
}

function TabularData({ transaction_records }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {" "}
      <TableContainer component={Paper} sx={{ maxHeight: 350 }}>
        <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Borrower
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Book
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Issued Date
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Librarian
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transaction_records.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row" align="left">
                  <Typography
                    variant="overline"
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                  >
                    {row.borrower.name}
                  </Typography>
                  <br />
                  <Typography variant="caption" gutterBottom>
                    Library ID:{row.borrower.library_id}|Type:
                    {row.borrower.borrower_type.name}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <Typography
                    variant="overline"
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                  >
                    {row.book.name}
                  </Typography>
                  <br />
                  <Typography variant="caption" gutterBottom>
                    Author:{row.book?.author.name}| Category:
                    {row.book?.category.name}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    variant="overline"
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                  >
                    {new Date(row.from_date).toISOString().split("T")[0]}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                  >
                    {row.issued_by.email}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
