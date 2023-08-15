import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function SearchBar({ searchPlaceHolder, getSearchTerm }) {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (evt) => {
        setSearchTerm(evt.target.value)
        
    }

    const handleSubmit = () => {
        getSearchTerm(searchTerm);
        navigate(`/weather?city=${searchTerm}`);
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