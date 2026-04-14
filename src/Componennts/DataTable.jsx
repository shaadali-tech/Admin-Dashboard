import {
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState } from "react";

export default function DataTable() {
  const [rows, setRows] = useState([
    { id: 1, name: "John Doe", email: "john@gmail.com", role: "Admin" },
    { id: 2, name: "Sara Khan", email: "sara@gmail.com", role: "User" },
    { id: 3, name: "Mike Ross", email: "mike@gmail.com", role: "Editor" },
  ]);

  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // 🗑 Delete
  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  // ✏️ Open modal
  const handleEdit = (row) => {
    setCurrentUser(row);
    setOpen(true);
  };

  // ❌ Close modal
  const handleClose = () => {
    setOpen(false);
  };

  // 💾 Save changes
  const handleSave = () => {
    setRows(rows.map((row) => (row.id === currentUser.id ? currentUser : row)));
    setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },

    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton color="primary" onClick={() => handleEdit(params.row)}>
            <EditIcon />
          </IconButton>

          <IconButton color="error" onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <>
      <Box sx={{ height: 400, width: "100%", mt: 3, overflowX: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          density="compact"
          sx={{ minWidth: 600 }}
        />
      </Box>

      {/* 🔥 EDIT MODAL */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit User</DialogTitle>

        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
        >
          <TextField
            label="Name"
            value={currentUser?.name || ""}
            onChange={(e) =>
              setCurrentUser({ ...currentUser, name: e.target.value })
            }
          />

          <TextField
            label="Email"
            value={currentUser?.email || ""}
            onChange={(e) =>
              setCurrentUser({ ...currentUser, email: e.target.value })
            }
          />

          <TextField
            label="Role"
            value={currentUser?.role || ""}
            onChange={(e) =>
              setCurrentUser({ ...currentUser, role: e.target.value })
            }
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
