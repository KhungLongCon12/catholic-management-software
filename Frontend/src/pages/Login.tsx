import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gửi API login ở đây
    console.log({ email, password });
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
      <Container maxWidth="xs">
        <Typography variant="h4" align="center" gutterBottom>
          Đăng Nhập
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Mật khẩu"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" fullWidth type="submit">
            Đăng Nhập
          </Button>
        </form>
        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Chưa có tài khoản?{" "}
            <Button color="primary" onClick={() => console.log("Đăng ký")}>
              Đăng ký
            </Button>
          </Typography>
        </Box>
        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Quên mật khẩu?{" "}
            <Button
              color="primary"
              onClick={() => console.log("Quên mật khẩu")}
            >
              Khôi phục
            </Button>
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
