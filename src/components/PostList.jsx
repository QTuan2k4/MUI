import {
  Avatar,
  Button,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const postItem = [
  {
    caption: "Một món paella tuyệt vời để đãi khách. Thêm đậu Hà Lan nếu thích!",
    img: "https://images.unsplash.com/photo-1742268350523-70a032f3520d?q=80&w=1968&auto=format&fit=crop",
    like: 184,
    comment: 10,
    view: 2.2,
    share: 24,
  },
  {
    caption: "Thêm đậu Hà Lan khi nấu paella để tăng thêm hương vị.",
    img: "https://images.unsplash.com/photo-1742412615574-ce65e63598d8?q=80&w=2069&auto=format&fit=crop",
    like: 100,
    comment: 5,
    view: 1.2,
    share: 14,
  },
  {
    caption: "Nấu ăn cùng bạn bè là cách tuyệt vời để kết nối!",
    img: "https://images.unsplash.com/photo-1742435456486-3a0059c05e38?q=80&w=1974&auto=format&fit=crop",
    like: 20,
    comment: 1,
    view: 1,
    share: 10,
  },
];

export const PostList = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      maxWidth={"600px"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        mx: "auto",
      }}
    >
      {/* Ô tạo bài viết */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#fff",
          borderRadius: "16px",
          padding: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Avatar
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80"
              alt="User Avatar"
            />
            <Typography
              variant="body1"
              color="#666"
              fontWeight={"600"}
              onClick={handleClickOpen}
              sx={{ cursor: "pointer" }}
            >
              Bắt đầu nimbus...
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1976d2",
              color: "#fff",
              borderRadius: "25px",
              textTransform: "none",
              px: 3,
            }}
          >
            Đăng
          </Button>
        </Box>
      </Box>

      {/* Hộp thoại tạo bài */}
      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{ backgroundColor: "#fff", width: "400px" }}
          component="form"
        >
          <DialogTitle color="#000">Tạo bài viết mới</DialogTitle>
          <DialogContent>
            <TextField
              label="Bạn đang nghĩ gì?"
              name="content"
              fullWidth
              multiline
              rows={3}
              sx={{ mt: 2 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Hủy</Button>
            <Button type="submit" variant="contained">Đăng</Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Danh sách bài viết */}
      {postItem.map((item, index) => (
        <Post
          key={index}
          caption={item.caption}
          img={item.img}
          like={item.like}
          comment={item.comment}
          view={item.view}
          share={item.share}
        />
      ))}
    </Box>
  );
};