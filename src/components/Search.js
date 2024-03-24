import React, { useState } from "react";

function Search({ todoList }) {
    const [filteredList, setFilteredList] = useState(todoList)
    const [searchQuery, setSearchQuery] = useState("");

    //Search list of objects
    const handleSearch = (event) => {
        const query = event.target.value
        setSearchQuery(query)

        const searchList = todoList.filter((todo) => {
            return todo.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })

        setFilteredList(searchList)
    };

    return (
        <div className="container">
            <h2>Search Filter Array of Objects</h2>

            <div className="list-wrapper">
                <div className="filter-container">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>

                {filteredList.map((todo, index) => {
                    return (
                        <div style={{ display: "flex", alignItems: "center", columnGap: "20px" }}>
                            <p>{todo.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Search;