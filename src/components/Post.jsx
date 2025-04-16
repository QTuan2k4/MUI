import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

export default function Post({ caption, img, like, comment, view, share }) {
  const [likes, setLikes] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(!isLiked);
  };

  return (
    <Card
      sx={{
        maxWidth: "100%",
        bgcolor: "#1c1e21",
        borderRadius: 4,
        color: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            src="https://www.dongvat.edu.vn/upload/2025/01/avatar-vo-tri-cute-01.webp"
            alt="User Avatar"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon sx={{ color: "#ccc" }} />
          </IconButton>
        }
        title={
          <Typography variant="subtitle1" sx={{ color: "#fff", fontWeight: 600 }}>
            Diogo Forlan
          </Typography>
        }
        subheader={
          <Typography variant="caption" sx={{ color: "#888" }}>
            9 giờ trước
          </Typography>
        }
      />

      <CardContent sx={{ pt: 0, px: 2 }}>
        <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
          {caption}
        </Typography>
      </CardContent>

      {img && (
        <CardMedia
          component="img"
          image={img}
          alt="Post Image"
          sx={{ borderRadius: 3, mx: 2, my: 1, maxHeight: 450, objectFit: "cover" }}
        />
      )}

      <CardActions sx={{ display: "flex", justifyContent: "space-around", px: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <IconButton onClick={handleLike}>
            {isLiked ? (
              <FavoriteIcon sx={{ fontSize: 22, color: "#ff5252" }} />
            ) : (
              <FavoriteBorderOutlinedIcon sx={{ fontSize: 22, color: "#bbb" }} />
            )}
          </IconButton>
          <Typography variant="caption" color="#aaa">
            {likes}K
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <IconButton>
            <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 22, color: "#bbb" }} />
          </IconButton>
          <Typography variant="caption" color="#aaa">
            {comment}K
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <IconButton>
            <TrendingUpOutlinedIcon sx={{ fontSize: 22, color: "#bbb" }} />
          </IconButton>
          <Typography variant="caption" color="#aaa">
            {view}M
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <IconButton>
            <ShareOutlinedIcon sx={{ fontSize: 22, color: "#bbb" }} />
          </IconButton>
          <Typography variant="caption" color="#aaa">
            {share}K
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
}