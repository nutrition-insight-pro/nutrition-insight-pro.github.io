import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";

interface CustomQuestionProps {
  text: string;
  value: string;
  setValue: (value: string) => void;
}

const CustomQuestion: FC<CustomQuestionProps> = ({ text, value, setValue }) => {
  return (
    <>
      <Typography align="left">
          {text}
      </Typography>
      <FormControl sx={{ m: 1, margin: '10px 0px 40px 0px' }} fullWidth variant="outlined">
          <OutlinedInput value={value} onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
        }}/>
      </FormControl>
    </>
  );
};

interface CustomCredentialsProps {
  text: string;
  credentials: string;
  setCredentials: (value: string) => void;
}

const CustomCredentials: FC<CustomCredentialsProps> = ({ text, credentials, setCredentials }) => {
  const [showCredentials, setShowCredentials] = useState(false);

  const handleClickShowCredentials = () => setShowCredentials((show) => !show);

  const handleMouseDownCredentials = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Typography align='left'>
        {text}
      </Typography>
      <FormControl sx={{ m: 1, margin: '10px 0px 30px 0px' }} fullWidth variant="outlined">
        <OutlinedInput
          type={showCredentials ? 'text' : 'password'}
          value={credentials}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCredentials(event.target.value);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowCredentials}
                onMouseDown={handleMouseDownCredentials}
                edge="end"
              >
                {showCredentials ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  );
};

export { CustomQuestion, CustomCredentials };