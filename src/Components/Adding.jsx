import React, { Component } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../Components/addingText.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default class Adding extends Component {
  state = {
    text: "",
    size: "",
    color: "",
  };
  deleteInputValue = () =>{
    this.props.addText({text:this.state.text,size:this.state.size,color:this.state.color})
      this.setState({
          text:""
      })
  }
  inputText = (e) =>{
      this.setState({
          text:e.target.value
      })
  }
  inputSize = (e) =>{
      this.setState({
          size:e.target.value
      })
  }
  inputColor = (e) =>{
      this.setState({
          color:e.target.value
      })
  }
  render() {
    return (
      <div className="addingText">
        <div className="inputText">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Add Text"
              variant="outlined"
              value = {this.state.text}
              onChange={this.inputText}
            />
          </Box>
        </div>

        <div className="textH">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">h1-h6 p</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                value = {this.state.size}
                onChange={this.inputSize}
              >
                <MenuItem value={"h1"}>h1</MenuItem>
                <MenuItem value={"h2"}>h2</MenuItem>
                <MenuItem value={"h3"}>h3</MenuItem>
                <MenuItem value={"h4"}>h4</MenuItem>
                <MenuItem value={"h5"}>h5</MenuItem>
                <MenuItem value={"h6"}>h6</MenuItem>
                <MenuItem value={"p"}>p</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="textColor">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Colors</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                value = {this.state.color}
                onChange={this.inputColor}
              >
                <MenuItem value={"green"}>Green</MenuItem>
                <MenuItem value={"red"}>Red</MenuItem>
                <MenuItem value={"blue"}>Blue</MenuItem>
                <MenuItem value={"orange"}>Orange</MenuItem>
                <MenuItem value={"gray"}>Gray</MenuItem>
                <MenuItem value={"teal"}>Teal</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <Stack direction="row" className="btnAdd">
          <Button variant="contained" onClick={this.deleteInputValue}>Add Text</Button>
        </Stack>
      </div>
    );
  }
}
