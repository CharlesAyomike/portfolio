"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import react from "@/public/img/react.png";
import node from "@/public/img/node.png";
import js from "@/public/img/js.png";
import ts from "@/public/img/ts.png";
import github from "@/public/img/github.png";
import expo from "@/public/img/expo.png";
import nestjs from "@/public/img/nest.jpg";
import nextjs from "@/public/img/next.png";
import rn from "@/public/img/rn.png";

const skills = [
  {
    id: 1,
    name: "Type script",
    designation: "Language",
    image: ts,
  },
  {
    id: 2,
    name: "JavaScript",
    designation: "Language",
    image: js,
  },
  {
    id: 3,
    name: "NodeJs",
    designation: "Backend",
    image: node,
  },
  {
    id: 4,
    name: "React",
    designation: "Web",
    image: react,
  },
  {
    id: 5,
    name: "GitHub",
    designation: "Version control",
    image: github,
  },
  {
    id: 6,
    name: "React Native",
    designation: "Mobile app",
    image: rn,
  },
  {
    id: 7,
    name: "Expo",
    designation: "Mobile app",
    image: expo,
  },
  {
    id: 8,
    name: "Nestjs",
    designation: "Backend",
    image: nestjs,
  },
  {
    id: 9,
    name: "Nextjs",
    designation: "Frontend",
    image: nextjs,
  },
];

export function Skills() {
  return (
    <div className="flex flex-row items-center justify-center gap-10 flex-wrap">
      <AnimatedTooltip items={skills} />
    </div>
  );
}
