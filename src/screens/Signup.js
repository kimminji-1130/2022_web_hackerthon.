import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";

const Signup = () => {
  const [num, setNum] = useState("");
  const phoneRef = useRef();

  // 휴대폰 번호 입력 함수
  const handlePhone = (e) => {
    const value = phoneRef.current.value.replace(/\D+/g, "");
    const numberLength = 11;

    let result;
    result = "";

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 3:
          result += "-";
          break;
        case 7:
          result += "-";
          break;

        default:
          break;
      }

      result += value[i];
    }

    phoneRef.current.value = result;

    setNum(e.target.value);
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 3, bgcolor: "info.dark" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" required fullWidth>
          Sign up
        </Typography>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          이메일을 입력하세요
        </div>
        <TextField
          label="Email Address"
          required
          fullWidth
          name="email"
          autoComplete="email"
          autoFocus
        />
        <div
          style={{
            marginTop: "20px",
          }}
        >
          패스워드를 입력하세요
        </div>
        <TextField
          label="Password"
          type="password"
          required
          fullWidth
          name="Password"
          autoComplete="current-password"
        />

        <div
          style={{
            marginTop: "20px",
          }}
        >
          패스워드 확인하세요
        </div>
        <TextField
          label="Passwordcheck"
          type="Passwordcheck"
          required
          fullWidth
          name="Passwordcheck"
          autoComplete="current-Passwordcheck"
        />

        <div
          style={{
            marginTop: "20px",
          }}
        >
          생년월일을 입력하세요
          <br />
          <input type="date" />
        </div>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          전화번호를 입력하세요.
        </div>
        {/* <input 
          name="user-num" 
          value={num} 
          ref={phoneRef}
          onChange={handlePhone}
          type="tel"
        /> */}
              
                <input
                name="user-num"
                label="phone number"
                 value={num}
                 ref={phoneRef}
                 onChange={handlePhone}
                 type="tel"
                required
                fullWidth
                  />
{/* 으아앙 이거 말구 텍스트필드에 하구 시퍼엉 ㅠㅜ */}
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          SIGN UP
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
