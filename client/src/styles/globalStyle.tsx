import { css } from "@emotion/react";

const Reset = css`
  body {
    background-color: white;
    color: black;
  }
  body.dark {
    background-color: rgb(21, 32, 43);
    color: white;
    button,
    a {
      color: white;
    }
  }
`;

export default Reset;
