import React from "react";
import ReactDOM from "react-dom";

import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "green"
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "red"
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "purple"
  },
  [`& .${outlinedInputClasses.input}`]: {
    color: "green"
  },
  [`&:hover .${outlinedInputClasses.input}`]: {
    color: "red"
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]: {
    color: "purple"
  },
  [`& .${inputLabelClasses.outlined}`]: {
    color: "green"
  },
  [`&:hover .${inputLabelClasses.outlined}`]: {
    color: "red"
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: "purple"
  }
});

function App() {
  return (
    <div className="App">
      <StyledTextField
        defaultValue="Goal"
        variant="outlined"
        label="My Label"
        multiline
        rows={6}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
