import CSharpIcon from "../assets/icons/Csharp.svg?react";
import AspCoreIcon from "../assets/icons/Asp.Net_Core.svg?react";
import NextJsIcon from "../assets/icons/nextjs.svg?react";
import BlazorIcon from "../assets/icons/blazor.svg?react";
import JQueryIcon from "../assets/icons/jquery-icon.svg?react";
import TailwindCssIcon from "../assets/icons/tailwind-css-brands-solid-full.svg?react";
import EFCoreIcon from "../assets/icons/ef-core.svg?react";
import SQLServerIcon from "../assets/icons/Microsoft SQL Server 2025 icon.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";

export const skillSections = [
  {
    id: "frontend",
    title: "فرانت‌اند",
    skills: [
      {
        id: 1,
        title: "html",
        icon: "html5",
        color: "#fc490b",
        type: "font",
        percentage: 95,
        stars: 4.75,
      },
      {
        id: 2,
        title: "css",
        icon: "css3-alt",
        color: "#2877fa",
        type: "font",
        percentage: 96,
        stars: 4.8,
      },
      {
        id: 3,
        title: "javascript",
        icon: "square-js",
        color: "#ffe008",
        type: "font",
        percentage: 90,
        stars: 4.5,
      },
      {
        id: 4,
        title: "jquery",
        icon: JQueryIcon,
        color: "#0868AC",
        type: "component",
        percentage: 90,
        stars: 4.5,
      },
      {
        id: 5,
        title: "bootstrap",
        icon: "bootstrap",
        color: "#7818f7",
        type: "font",
        percentage: 95,
        stars: 4.75,
      },
      {
        id: 6,
        title: "tailwind css",
        icon: TailwindCssIcon,
        color: "#00BCFF",
        type: "component",
        percentage: 85,
        stars: 4.25,
      },
      {
        id: 7,
        title: "react",
        icon: "react",
        color: "#58C4DC",
        type: "font",
        percentage: 80,
        stars: 4,
      },
      {
        id: 8,
        title: "next js",
        icon: NextJsIcon,
        color: "#0A0A0A",
        type: "component",
        percentage: 75,
        className: "next-js",
        stars: 3.75,
      },
    ],
  },

  {
    id: "backend",
    title: "بک‌اند",
    skills: [
      {
        id: 1,
        title: "C#",
        icon: CSharpIcon,
        color: "#8145dbff",
        type: "component",
        percentage: 86,
        stars: 4.3,
      },
      {
        id: 2,
        title: "Asp .Net Core",
        icon: AspCoreIcon,
        color: "#592C8C",
        type: "component",
        percentage: 85,
        className: "asp",
        stars: 4.25,
      },
      {
        id: 3,
        title: "ef core",
        icon: EFCoreIcon,
        color: "#512BD4",
        type: "component",
        percentage: 88,
        className: "ef-core",
        stars: 4.4,
      },
      {
        id: 5,
        title: "blazor",
        icon: BlazorIcon,
        color: "#512BD4",
        type: "component",
        percentage: 75,
        stars: 3.75,
      },
    ],
  },

  {
    id: "database",
    title: "دیتابیس",
    skills: [
      {
        id: 1,
        title: "SQL Server",
        icon: SQLServerIcon,
        color: "#0688EA",
        type: "component",
        percentage: 75,
        className: "sql-server",
        stars: 3.75,
      },
    ],
  },

  {
    id: "tools",
    title: "ابزارها",
    skills: [
      {
        id: 1,
        title: "git",
        icon: "square-git",
        color: "#f15739",
        type: "font",
        percentage: 70,
        stars: 3.5,
      },
      {
        id: 2,
        title: "github",
        icon: GithubIcon,
        color: "#1B1F23",
        type: "component",
        percentage: 70,
        stars: 3.5,
        className: "github",
      },
    ],
  },
];

// export const skills = [
//   {
//     title: "Html 5 : ",
//     stars: 5,
//   },
//   {
//     title: "Css 3 : ",
//     stars: 5,
//   },
//   {
//     title: "Javascript +Es6 : ",
//     stars: 4,
//   },
//   {
//     title: "React : ",
//     stars: 3,
//   },
//   {
//     title: "Bootstrap 5 : ",
//     stars: 4,
//   },
//   {
//     title: "Scss : ",
//     stars: 4,
//   },
//   {
//     title: "#C : ",
//     stars: 4,
//   },
//   {
//     title: "Asp.net Core : ",
//     stars: 3,
//   },
// ];
