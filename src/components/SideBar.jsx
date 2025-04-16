import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  TextField,
  InputAdornment,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar() {
  const contacts = [
    {
      name: "Diogo Forlan",
      username: "@forlan77",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane Smith",
      username: "@jane123",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "John Doe2",
      username: "@john_doe2",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "John Doe3",
      username: "@john_doe3",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "John Doe4",
      username: "@john_doe4",
      avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    },
  ];

  const [searchText, setSearchText] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
    contact.username.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Box sx={{ position: "fixed", width: "360px", padding: "16px" }}>
      {/* Thanh tìm kiếm */}
      <TextField
        placeholder="Tìm kiếm"
        variant="outlined"
        fullWidth
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#666" }} />
            </InputAdornment>
          ),
          style: {
            color: "#000",
            backgroundColor: "#fff",
            borderRadius: "25px",
          },
        }}
        sx={{
          mb: 2,
          "& .MuiOutlinedInput-root": {
            "& fieldset": { border: "1px solid #ccc" },
          },
        }}
      />

      {/* Danh sách kết quả tìm kiếm */}
      {searchText && (
        <Box
          sx={{
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "8px",
            mb: 3,
            maxHeight: "240px",
            overflowY: "auto",
          }}
        >
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact, index) => (
              <ListItem
                key={index}
                sx={{
                  borderRadius: "8px",
                  "&:hover": { backgroundColor: "#f0f0f0", cursor: "pointer" },
                  padding: "6px 8px",
                }}
              >
                <ListItemAvatar>
                  <Avatar alt={contact.name} src={contact.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={contact.name}
                  secondary={contact.username}
                  sx={{
                    "& .MuiTypography-root": { color: "#000" },
                  }}
                />
              </ListItem>
            ))
          ) : (
            <Typography color="#999" fontStyle="italic" textAlign="center">
              Không tìm thấy người dùng nào.
            </Typography>
          )}
        </Box>
      )}

      {/* Danh sách người liên hệ gần đây */}
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "25px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000", mb: 1 }}>
          Người liên hệ gần đây
        </Typography>

        <List>
          {contacts.map((contact, index) => (
            <ListItem
              key={index}
              sx={{
                padding: "8px 0",
                borderRadius: "12px",
                "&:hover": { backgroundColor: "#f5f5f5", cursor: "pointer" },
              }}
            >
              <ListItemAvatar>
                <Avatar alt={contact.name} src={contact.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={contact.name}
                secondary={contact.username}
                sx={{ "& .MuiTypography-root": { color: "#000" } }}
              />
            </ListItem>
          ))}
        </List>

        <Box mt={1}>
          <Link
            href="#"
            sx={{
              color: "#1976d2",
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            <Typography>Xem thêm</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;