import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const StyledToolbar = styled(Toolbar)`
  text-align: "center";
  height: 80;
`;

const StyledTypography = styled(Typography)`
  margin: auto;
`;

export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <StyledToolbar>
          <StyledTypography variant="h5" align="center">
            Todo App
          </StyledTypography>
        </StyledToolbar>
      </AppBar>
    </div>
  );
}
