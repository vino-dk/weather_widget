import { ChangeEvent, FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom"
import './SearchBar.css'

interface SearchBarProps {
    searchPlaceHolder: string;
    getSearchTerm: (term: string) => void;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({ searchPlaceHolder, getSearchTerm }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        getSearchTerm(searchTerm);
        navigate(`/weather?city=${searchTerm}`);
        setSearchTerm("");
    }

    return (
        <div className="SearchBar">
            <form action="" method="get">
                <input
                    type="text"
                    placeholder={searchPlaceHolder}
                    value={searchTerm}
                    onChange={handleChange}
                ></input>
                <button className="searchButton" onClick={handleSubmit}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;