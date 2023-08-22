import { ChangeEvent, FunctionComponent, useState } from "react";
import React from "react";
// import { useNavigate } from "react-router-dom"
import './SearchBar.css'

interface SearchBarProps {
    searchPlaceHolder: string;
    getSearchTerm: (term: string) => void;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({ searchPlaceHolder, getSearchTerm }) => {
    // const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        getSearchTerm(searchTerm);
        // navigate(`/weather?city=${searchTerm}`);
        setSearchTerm("");
        e.preventDefault();
    }

    return (
        <form action={`/weather?city=${searchTerm}`} onSubmit={handleSubmit} className="SearchBar" method="get">
            <input
                type="text"
                placeholder={searchPlaceHolder}
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
            ></input>
            <button className="searchButton" type="submit">Search</button>
        </form>
    )
}

export default SearchBar;