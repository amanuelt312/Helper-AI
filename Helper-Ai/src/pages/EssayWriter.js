import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function EssayWriter() {
  const location = useLocation();
  console.log(location.state.item.id);
  const [result, setResult] = useState("");
  const [pinput, setPinput] = useState("");
  const configuration = new Configuration({
    apiKey: "APIKey",
  });
  const openai = new OpenAIApi(configuration);
  const option = location.state.item.option;

  const EssayPrompt = location.state.item.prompt;
  const doStuff = async () => {
    let object = { ...option, prompt: EssayPrompt.concat(" ", pinput, ".") };

    const response = await openai.createCompletion(object);
    console.log(EssayPrompt.concat(" ", pinput, "."));
    console.log(response.data.choices[0].text);
    setResult(response.data.choices[0].text.replaceAll("\n", "<br>"));
  };
  return (
    <>
      <h1>Essay Writer</h1>
      {/* <h1>{location}</h1> */}
      <Box
        component="form"
        display="flex"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
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
