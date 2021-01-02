import styled from "styled-components";

export const Overlay = styled.div`
      font-family: 'Anton', sans-serif;
      position: fixed;
      display:flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .9);
      z-index: 20000;
`;