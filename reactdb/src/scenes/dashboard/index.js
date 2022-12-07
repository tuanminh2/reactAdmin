import React from 'react'
import Header from '../../components/Header'
import { Box, Button } from '@mui/material'
import { tokens } from '../../theme';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
export default function Dashboard() {
  const colors = tokens();
  return (
    <div>
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

          <Box>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              <DownloadOutlinedIcon sx={{ mr: "10px" }} />
              Download Reports
            </Button>
          </Box>
        </Box>
        {/* ... */}
      </Box>
    </div>
  )
}
