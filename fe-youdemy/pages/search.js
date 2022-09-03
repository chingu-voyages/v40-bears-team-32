import React from "react";
import SearchResults from "../components/search/SearchResults.js";
<<<<<<< HEAD

export default function Search() {
  const results = [
=======
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function Search() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const [results, setResults] = useState([
>>>>>>> origin/main
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Miranda G",
      headline: "I've been teaching JavaScript for 10 years.",
<<<<<<< HEAD
      skills: ["JavaScript", "ReactJS", "SQL", "Ruby on Rails"],
=======
      skills: "JavaScript, ReactJS, SQL, Ruby on Rails",
>>>>>>> origin/main
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Anthony K",
      headline: "I've been teaching Java for 5 years.",
<<<<<<< HEAD
      skills: ["Java", "Angular", "SQL"],
=======
      skills: "Java, Angular, SQL",
>>>>>>> origin/main
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Steve J",
      headline: "I've been teaching SQL for 8 years.",
<<<<<<< HEAD
      skills: ["Oracle", "PostgreSQL", "MySQL"],
=======
      skills: "Oracle, PostgreSQL, MySQL",
>>>>>>> origin/main
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Jatinder R",
      headline: "I've been teaching Product Management for 5 years.",
<<<<<<< HEAD
      skills: ["Jira", "Notion", "Scrum"],
=======
      skills: "Jira, Notion, Scrum",
>>>>>>> origin/main
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Satisha L",
      headline: "I've been teaching C++ for 15 years.",
<<<<<<< HEAD
      skills: ["C++", "CyberSecurity", "Binary Exploitation"],
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: 100 }}>
        Top Creators that teach "What you searched for"
      </h1>
      <SearchResults results={results} />
=======
      skills: "C++, CyberSecurity, Binary Exploitation",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]);

  const [input, setInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const onChange = (event) => {
    setInput(event.target.value);
    const filteredResults = results.filter((result) => {
      if (!input) {
        return result;
      } else if (
        result.headline.toLowerCase().includes(input.toLowerCase()) ||
        result.skills.toLowerCase().includes(input.toLowerCase())
      ) {
        return result;
      }
    });
    setFilteredResults(filteredResults);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: 50 }}>
        What are you looking to learn?
      </h1>
      <div className="search-bar-container">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            type="text"
            onChange={onChange}
            value={input}
            autoFocus
            style={{ width: "100%" }}
          />
        </Search>
      </div>
      <SearchResults filteredResults={filteredResults} />
>>>>>>> origin/main
    </div>
  );
}
