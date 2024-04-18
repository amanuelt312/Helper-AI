import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { Autocomplete, Button } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function Codegen() {
  const [result, setResult] = useState("");
  const [pinput, setPinput] = useState("");
  const [planguage, setPlanguage] = useState("");
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const location = useLocation();
  const option = location.state.item.option;

  const codegenPrompt = `Generate code that solves the given problem.the code should be functional and easily readable by other developers.keep in mind any potential performance optimizations that could be made.additionally,comment your code to explain its functionality.the problem is ${pinput} and the programming language should be ${planguage}`;
  const doStuff = async () => {
    let object = { ...option, prompt: codegenPrompt };

    const response = await openai.createCompletion(object);
    console.log(codegenPrompt);
    console.log(response.data.choices[0].text);
    setResult(response.data.choices[0].text.replaceAll("\n", "<br>"));
  };
  const top100Films = [
    { label: "java", year: 1994 },
    { label: "C++", year: 1994 },
    { label: "HTML", year: 1994 },
    { label: "javascript", year: 1994 },
    { label: "python", year: 1972 },
  ];
  return (
    <>
      <h1>Code Generator</h1>
      <Box
        component="form"
        display="flex"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          onChange={(e, value) => setPlanguage(value.label)}
          sx={{ width: 340 }}
          renderInput={(params) => (
            <TextField {...params} label="Programming Languages" />
          )}
        />
        <TextField
          fullWidth
          label="Title"
          id="fullWidth"
          onChange={(e) => setPinput(e.target.value)}
          onSubmit={doStuff}
        />
        <Button variant="contained" endIcon={<SendIcon />} onClick={doStuff}>
          Send
        </Button>
      </Box>

      <h4 className="output" dangerouslySetInnerHTML={{ __html: result }}></h4>
    </>
  );
}
