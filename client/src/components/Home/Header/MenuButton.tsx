"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

export default function MenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FontAwesomeIcon
        icon={faBars}
        className="size-8 md:hidden block cursor-pointer "
        onClick={() => setOpen(!open)}
      />
      <Sidebar open={open} loggedIn={true} />
    </>
  );
}
