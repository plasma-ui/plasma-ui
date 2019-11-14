/** @jsx jsx */
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { bool, func, string } from "prop-types";
import styled from "@emotion/styled";
import { jsx, css, keyframes } from "@emotion/core";

import Flexbox from "../Flexbox";
import useKeyPressed from "../../hooks/useKeyPressed";
import useClickOutside from "../../hooks/useClickOutside";
import Overlay from "../Overlay";

const animations = {
  "fade-in": keyframes`
  from {opacity: 0}, 
  to {opacity: 1}
`,
  "slide-down": keyframes`
  from {transform: translate3d(-50%, -150%, 0)}, 
  to {transform: translate3d(-50%, -50%, 0)}
`,
  "slide-up": keyframes`
  from {transform: translate3d(-50%, 150%, 0)}, 
  to {transform: translate3d(-50%, -50%, 0)}
`,
  "slide-right": keyframes`
  from {transform: translate3d(150%, -50%, 0)}, 
  to {transform: translate3d(-50%, -50%, 0)}
`,
  "slide-left": keyframes`
  from {transform: translate3d(-150%, -50%, 0)}, 
  to {transform: translate3d(-50%, -50%, 0)}
`
};

const StyledFlexbox = styled(Flexbox)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 999;
`;

const Dialog = ({ children, isOpen, onDismiss, animation, ...rest }) => {
  const [toggle, setToggle] = useState(null);
  const esc = useKeyPressed("Escape");
  const dialogRef = useRef();

  const handleDismiss = () => {
    onDismiss();
    setToggle(false);
  };

  useClickOutside(dialogRef, () => handleDismiss());

  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;

    // Prevent scrolling on mount
    if (isOpen) document.body.style.overflow = "hidden";

    // Enable scrolling again when component unmounts
    return () => (document.body.style.overflow = originalOverflow);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setToggle(true);

    if (esc) handleDismiss();
  }, [isOpen, esc]);

  return isOpen && toggle
    ? createPortal(
        <Overlay>
          <StyledFlexbox
            css={css`
              animation: ${animations[animation]} 390ms;
            `}
            ref={dialogRef}
            role="alertdialog"
            aria-modal="true"
            {...rest}
          >
            {children}
          </StyledFlexbox>
        </Overlay>,
        document.body
      )
    : null;
};

Dialog.defaultProps = {
  flexDirection: "column",
  background: "#FFFFFF",
  p: "20px",
  width: ["90%", 1 / 2, 1 / 2, 1 / 3],
  boxShadow:
    "rgba(14, 18, 22, 0.35) 0px 10px 38px -10px, rgba(14, 18, 22, 0.2) 0px 10px 20px -15px;",
  borderRadius: "3px",
  animation: "fade-in"
};

Dialog.propsTypes = {
  animation: string,
  isOpen: bool.isRequired,
  onDismiss: func.isRequired
};

export default Dialog;
