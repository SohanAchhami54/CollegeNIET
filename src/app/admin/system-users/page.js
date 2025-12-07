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

export default function SystemUserPage() {
  const [systemUsers, setSystemUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState(systemUsers);
  useEffect(() => {
    async function loadUsers() {
      try {
        setLoading(true);
        const response = await fetchData("users/");
        setSystemUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);
  useEffect(() => {
    if (systemUsers.length > 0) {
      setColumns(Object.keys(systemUsers[0]));
    }
  }, [systemUsers]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    const result = systemUsers.filter((item) => item.email.includes(value));
    setFilteredUsers(result);
  };

  const getTotalActiveUser = () => {
    return systemUsers.length;
  };
  const getTotalActiveTeachers = () => {
    return (
      systemUsers?.filter((item) => item?.usertype?.name === "Teacher")
        .length || 0
    );
  };
  const getTotalActiveStaff = () => {
    return (
      systemUsers?.filter((item) => item?.usertype?.name === "Librarian")
        .length || 0
    );
  };
  const getTotalActiveStudent = () => {
    return (
      systemUsers?.filter((item) => item?.usertype?.name === "Student")
        .length || 0
    );
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
              <Card
                sx={{
                  minWidth: 275,
                  backgroundColor: "#640D5F",
                  color: "white",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h4" gutterBottom>
                    User
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    {getTotalActiveUser()}
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  minWidth: 275,
                  backgroundColor: "#3338A0",
                  color: "white",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h4" gutterBottom>
                    Teachers
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    {getTotalActiveTeachers()}
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  minWidth: 275,
                  backgroundColor: "#154D71",
                  color: "white",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h4" gutterBottom>
                    Students
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    {getTotalActiveStudent()}
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  minWidth: 275,
                  backgroundColor: "#E43636",
                  color: "white",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h4" gutterBottom>
                    Librarian
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    {getTotalActiveStaff()}
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
        <Grid size={{ xs: 12, md: 4, sm: 12, padding: 4 }}>
          <AddAppUser />
        </Grid>

        <Grid size={{ xs: 12, md: 8, sm: 12, padding: 4 }}>
          <Stack spacing={2}>
            {" "}
            <Paper sx={{ padding: 2 }}>
              <Typography
                sx={{ textAlign: "center" }}
                variant="h5"
                gutterBottom
              >
                Active System Users
              </Typography>
            </Paper>
            <Box sx={{ flexGrow: 1 }}>
              <Paper elevation={1} sx={{ marginBottom: 2, padding: 4 }}>
                {" "}
                <TextField
                  variant="standard"
                  id="outlined-basic"
                  label="search user by email: info@biomedical.edu.np"
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
              </Paper>
              <TabularData
                systemUsers={filteredUsers}
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

function TabularData({ systemUsers, columns, loading }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {" "}
      <TableContainer component={Paper} sx={{ maxHeight: 350 }}>
        <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                User Email
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                User Type
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
            ) : systemUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  No users found.
                </TableCell>
              </TableRow>
            ) : (
              systemUsers.map((row, index) => (
                <TableRow
                  key={row.email}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row" align="left">
                    {row.email}
                  </TableCell>
                  <TableCell align="left">{row.usertype?.name}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function AddAppUser() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    usertype: "",
  });
  const [errors, setErrors] = useState({});
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.full_name.trim()) {
      newErrors.full_name = "Full name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    }
    if (!formData.usertype.trim()) {
      newErrors.usertype = "user type is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    try {
      const response = await PostData("users/create/", formData);
      showAlert(response.data.message, "success");
    } catch (err) {
      console.log(err);
      showAlert("User with this email Already exists", "error");
    }
    setFormData({
      full_name: "",
      email: "",
      usertype: "",
    });
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
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
            {" "}
            <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
              Add New System User
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
            <form onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                  <TextField
                    label="Full Name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    error={!!errors.full_name}
                    helperText={errors.full_name}
                    fullWidth
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-usertype">
                      User Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-usertype"
                      id="demo-simple-select-user"
                      value={formData.usertype}
                      label="User Type"
                      name="usertype"
                      onChange={handleChange}
                    >
                      <MenuItem value="Teacher">Teacher</MenuItem>
                      <MenuItem value="Librarian">Librarian</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12 }} textAlign="center">
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      width: "50%",
                      padding: "12px 0",
                      backgroundColor: "#00809D",
                      color: "white",
                    }}
                  >
                    Create a User
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 2 }}></Grid>
      </Grid>

      {/* Snackbar for Success Alert */}
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
