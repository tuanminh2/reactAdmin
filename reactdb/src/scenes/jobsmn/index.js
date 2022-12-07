import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Button } from "@mui/material";
import Header from "../../components/Header";

import React from 'react'

export default function JobsMn() {
    const colors = tokens()

    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "action",
            headerName: "Action",
            flex: 1,
            renderCell: (params) => {
                return (
                    <>
                        <Button
                            onClick={(e) => console.log(params.row.age)}
                            variant="contained"
                            sx={{backgroundColor: "green"}}
                           
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={(e) => console.log(params.row.age)}
                            variant="contained"
                            sx={{backgroundColor: "orange"}}
                        >
                            Delete
                        </Button>
                    </>

                );
            }

        },
    ];
    return (
        <Box>
            <Header title="jobPost" subtitle="Manage all jobPost"></Header>
            <Box m="40px 0 0 0"
                height="75vh">

                <DataGrid rows={mockDataTeam}
                    columns={columns}>

                </DataGrid>
            </Box>
        </Box>
    )
}

