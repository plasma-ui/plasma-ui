/** @jsx jsx */
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { string } from "prop-types";
import { jsx, css } from "@emotion/core";

import Navbar from "../Navbar";
import useClickOutside from "../hooks/useClickOutside";

const Drawer = ({ children, isOpen, onDismiss, placement, ...props }) => {
  const [toggle, setToggle] = useState(null);
  const drawerRef = useRef();

  const handleDismiss = () => {
    onDismiss();
    setToggle(false);
  };

  useClickOutside(drawerRef, () => handleDismiss());

  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;

    // Prevent scrolling on mount
    if (isOpen) document.body.style.overflow = "hidden";

    // Enable scrolling again when component unmounts
    return () => (document.body.style.overflow = originalOverflow);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setToggle(true);
  }, [isOpen]);

  if (isOpen && toggle) {
    return (
      <Navbar
        ref={drawerRef}
        css={css`
          left: ${placement === "left" || !placement ? 0 : null};
          right: ${placement === "right" ? 0 : null};
        `}
        {...props}
      >
        {children}
      </Navbar>
    );
  }

  return null;
};

Drawer.defaultProps = {
  dir: "column",
  position: "fixed",
  placement: "left",
  top: 0,
  backgroundColor: "white",
  boxShadow:
    "rgba(14, 18, 22, 0.35) 0px 10px 38px -10px, rgba(14, 18, 22, 0.2) 0px 10px 20px -15px;",
  height: "100vh",
  width: [1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]
};

Drawer.propTypes = {
  placement: string
};

export default Drawer;
