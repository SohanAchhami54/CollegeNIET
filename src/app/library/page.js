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
  Skeleton,
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

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import SearchIcon from "@mui/icons-material/Search";

export default function LibraryHomePage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [authors, setAuthors] = useState([]);
  const [category, setCategory] = useState([]);
  const [publisher, setPublisher] = useState([]);
  const [borrowers, setBorrowers] = useState([]);

  useEffect(() => {
    async function loadLibraryData() {
      try {
        setLoading(true);
        const book_response = await fetchData("library/book/");
        const author_response = await fetchData("library/author/");
        const category_response = await fetchData("library/category/");
        const publisher_response = await fetchData("library/publisher/");
        const borrower_response = await fetchData("library/borrower/");

        setBooks(book_response.data);
        setAuthors(author_response.data);
        setCategory(category_response.data);
        setPublisher(publisher_response.data);
        setBorrowers(borrower_response.data);

        setFilteredBooks(book_response.data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      } finally {
        setLoading(false);
      }
    }
    loadLibraryData();
  }, []);

  const handleChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    const result = books.filter(
      (item) =>
        item.name.toLowerCase().includes(searchText) ||
        item.category.name.toLowerCase().includes(searchText) ||
        item.publisher.name.toLowerCase().includes(searchText) ||
        item.author.name.toLowerCase().includes(searchText)
    );

    setFilteredBooks(result);
  };

  useEffect(() => {
    async function loadLibraryData() {
      try {
        setLoading(true);
        const book_response = await fetchData("library/book/");
        setBooks(book_response.data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      } finally {
        setLoading(false);
      }
    }
    loadLibraryData();
  }, []);

  const getTotalBooks = () => {
    return books.length;
  };
  const getTotalBorrowedBooks = () => {
    const total = borrowers.reduce((sum, b) => sum + b.total_borrowed, 0);
    return total;
  };
  const getTotalAuthor = () => {
    return authors.length;
  };
  const getTotalPublisher = () => {
    return publisher.length;
  };
  const getTotalCategory = () => {
    return category.length;
  };
  const getTotalBorrower = () => {
    return borrowers.length;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {loading === true ? (
        <Box sx={{ width: 800, justifyContent: "center" }}>
          {" "}
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          {/* for cards  */}
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
                        Books
                      </Typography>
                      <Typography variant="h4" gutterBottom>
                        {loading ? <CircularProgress /> : getTotalBooks()}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      minWidth: 275,
                      backgroundColor: "#3396D3",
                      color: "white",
                    }}
                  >
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h4" gutterBottom>
                        Borrowed Books
                      </Typography>
                      <Typography variant="h4" gutterBottom>
                        {loading ? (
                          <CircularProgress />
                        ) : (
                          getTotalBorrowedBooks()
                        )}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      minWidth: 275,
                      backgroundColor: "#E62727",
                      color: "white",
                    }}
                  >
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h4" gutterBottom>
                        Available Books
                      </Typography>
                      <Typography variant="h4" gutterBottom>
                        {loading ? (
                          <CircularProgress />
                        ) : (
                          getTotalBooks() - getTotalBorrowedBooks()
                        )}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      minWidth: 275,
                      backgroundColor: "#9112BC",
                      color: "white",
                    }}
                  >
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h4" gutterBottom>
                        Category
                      </Typography>
                      <Typography variant="h4" gutterBottom>
                        {loading ? <CircularProgress /> : getTotalCategory()}
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
                <Stack spacing={2} direction="row" sx={{ padding: 2 }}>
                  <Card
                    sx={{
                      minWidth: 275,
                      backgroundColor: "#124170",
                      color: "white",
                    }}
                  >
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h4" gutterBottom>
                        Authors
                      </Typography>
                      <Typography variant="h4" gutterBottom>
                        {loading ? <CircularProgress /> : getTotalAuthor()}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      minWidth: 275,
                      backgroundColor: "#FF9A00",
                      color: "white",
                    }}
                  >
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h4" gutterBottom>
                        Publisher
                      </Typography>
                      <Typography variant="h4" gutterBottom>
                        {loading ? <CircularProgress /> : getTotalPublisher()}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      minWidth: 275,
                      backgroundColor: "#4D2D8C",
                      color: "white",
                    }}
                  >
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h4" gutterBottom>
                        Borrowers
                      </Typography>
                      <Typography variant="h4" gutterBottom>
                        {loading ? <CircularProgress /> : getTotalBorrower()}
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Box>
            </Grid>
          </Grid>
          {/* card ends  */}
          <Grid
            container
            spacing={2}
            sx={{ backgroundColor: "#C9CDCF", padding: 4, marginBottom: 2 }}
          >
            <Grid size={{ xs: 12, md: 12 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 12 }}>
                  <Box
                    sx={{ flexDirection: "row", padding: 4 }}
                    component={Paper}
                  >
                    {" "}
                    <TextField
                      id="outlined-basic"
                      label="search books..."
                      variant="outlined"
                      name="search"
                      value={searchText}
                      onChange={handleChange}
                      size="small"
                      sx={{ width: "50%" }}
                      fullWidth
                    />
                    <Button
                      variant="outlined"
                      startIcon={<SearchIcon />}
                      onClick={handleSearch}
                    >
                      Search Books
                    </Button>
                    <br />
                    <Typography variant="overline" gutterBottom>
                      Total {filteredBooks.length || 0} records found
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ flexGrow: 1, padding: 4 }} component={Paper}>
                <TabularData books={filteredBooks} />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{ backgroundColor: "#C9CDCF", padding: 4, marginBottom: 2 }}
          >
            <Grid size={{ xs: 12, md: 12 }}>
              <BookTab
                books={books}
                category={category}
                author={authors}
                publisher={publisher}
                category_count={getTotalCategory()}
                author_count={getTotalAuthor()}
                publisher_count={getTotalPublisher()}
              />
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}

function TabularData({ books }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Library Book Records
      </Typography>
      <TableContainer component={Paper} sx={{ maxHeight: 350 }}>
        <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Accession No.
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                is available ?
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Category
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Author
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Publisher
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row" align="left">
                  {row.accession_number}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">
                  {row.available === true ? "Available" : "Borrowed"}
                </TableCell>
                <TableCell align="left">{row.category?.name}</TableCell>
                <TableCell align="left">{row.author?.name}</TableCell>
                <TableCell align="left">{row.publisher?.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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

function BookTab({
  books,
  category,
  author,
  publisher,
  category_count,
  author_count,
  publisher_count,
}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} component={Paper}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={`Category  (${category_count})`} {...a11yProps(0)} />
          <Tab label={`Author  (${author_count})`} {...a11yProps(1)} />
          <Tab label={`Publisher  (${publisher_count})`} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <FilterBookRecord
          book_records={books}
          category_record={category}
          name="category"
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <FilterBookRecord
          book_records={books}
          category_record={author}
          name="author"
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <FilterBookRecord
          book_records={books}
          category_record={publisher}
          name="publisher"
        />
      </CustomTabPanel>
    </Box>
  );
}

function FilterBookRecord({ book_records, category_record, name }) {
  const [books, setBooks] = useState(book_records);
  const [category, setCategory] = useState(category_record);
  const [value, setValue] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    if (books.length > 0) {
      setColumns(Object.keys(books[0]));
    }
  }, [books]);

  const handleCategoryChange = (event, newValue) => {
    setValue(newValue);

    if (newValue) {
      let result;
      if (name == "category") {
        result = books.filter((item) => item.category.name === newValue.name);
      }
      if (name == "author") {
        result = books.filter((item) => item.author.name === newValue.name);
      }
      if (name == "publisher") {
        result = books.filter((item) => item.publisher.name === newValue.name);
      }

      setFilteredBooks(result);
    } else {
      // If cleared, show all books
      setFilteredBooks(books);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
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
                Library Book Records
              </Typography>
            </Paper>
            <Box sx={{ flexGrow: 1 }}>
              <Paper elevation={1} sx={{ marginBottom: 2, padding: 4 }}>
                <Autocomplete
                  options={category.filter((s) => s.is_active)}
                  getOptionLabel={(option) => option.name}
                  value={value}
                  onChange={handleCategoryChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={`select ${name}`}
                      variant="outlined"
                    />
                  )}
                />
                <Typography variant="overline" gutterBottom>
                  Total Search Result: {filteredBooks?.length}
                </Typography>
              </Paper>
              <TabularData
                books={filteredBooks}
                columns={columns}
                loading={loading}
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
