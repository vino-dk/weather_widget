import { useState } from "react";

export default function SearchBar({ searchPlaceHolder, getSearchTerm }) {
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleChange = (evt) => {
        setSearchTerm(evt.target.value)
    }

    const handleSubmit = () => {
        getSearchTerm(searchTerm);
        setSearchTerm("");
    }

    return (
        <div className="SearchBar">
            <input
                type="text"
                placeholder={searchPlaceHolder}
                value={searchTerm}
                onChange={handleChange}
            >
            </input>
            <button onClick={handleSubmit}>Search</button>
        </div>
    )
}