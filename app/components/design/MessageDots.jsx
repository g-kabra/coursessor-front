import React from "react";
import styled from "styled-components";

const StyledDots = styled.div`
   {
    position: relative;
    text-align: center;
    margin: auto;
    .dot {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      margin-right: 5px;
      background: #6CE9BC;
      animation: wave 1.3s linear infinite;

      &:nth-child(2) {
        animation-delay: -1.1s;
      }

      &:nth-child(3) {
        animation-delay: -0.9s;
      }
    }
  }

  @keyframes wave {
    0%,
    60%,
    100% {
      transform: initial;
      opacity: 50%;
    }

    30% {
      transform: translateY(-5px);
      opacity: 1;
    }
  }
`;

function MessageDots() {
  return (
    <StyledDots id="wave">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </StyledDots>
  );
}

export default MessageDots;
