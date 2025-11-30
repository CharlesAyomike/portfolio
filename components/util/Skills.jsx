"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import html from "@/public/img/html.png";
import css from "@/public/img/css.png";
import react from "@/public/img/react.png";
import node from "@/public/img/node.png";
import js from "@/public/img/js.png";
import ts from "@/public/img/ts.png";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: ts,
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: js,
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: node,
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: react,
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: css,
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: html,
  },
];

export function Skills() {
  return (
    <div className="flex flex-row items-center justify-center gap-10 flex-wrap">
      <AnimatedTooltip items={people} />
    </div>
  );
}
