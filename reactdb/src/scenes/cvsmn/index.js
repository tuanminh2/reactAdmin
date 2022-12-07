import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import Header from "../../components/Header";

import React from 'react'

export default function CvsMn() {
    const colors = tokens()

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID" },
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
            field: "address",
            headerName: "Address",
            flex: 1,
        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
        },
        {
            field: "zipCode",
            headerName: "Zip Code",
            flex: 1,
        },
    ];
    return (
        <Box>
            <Header title="jobPost" subtitle="Manage all jobPost"></Header>
            <Box m="40px 0 0 0"
                height="75vh">

                <DataGrid rows={mockDataContacts}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                    >
                 
                </DataGrid>
            </Box>
        </Box>
    )
}

