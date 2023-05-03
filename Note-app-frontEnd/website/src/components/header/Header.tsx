import React from "react";
import "./header.css";
import { motion } from "framer-motion";

interface HeaderProps {
  leftside: any;
  rigthOption1: React.ReactNode;
  rigthOption2: React.ReactNode;
  rigthOption3?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  leftside,
  rigthOption1,
  rigthOption2,
  rigthOption3,
}) => {
  return (
    <header>
      <h1 className="header-text">{leftside}</h1>
      <div className="header-right">
        <div>{rigthOption1}</div>
        <div>{rigthOption2}</div>
        <div>{rigthOption3}</div>
      </div>
    </header>
  );
};
Header;
