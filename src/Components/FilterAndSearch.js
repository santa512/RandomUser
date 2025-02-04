import React from 'react';

const FilterAndSearch = ({ handleCountry, handleGender, handleSearch, handleSortAtoZ, handleSortZtoA, fetchUsers, nat, gender, searchTerm, numUsers }) => {
    return (
        <div className="my-3 mb-4 row g-3 align-items-center justify-content-center">
            <div className="col-auto">
                <select className="form-select form-select-md" aria-label="Country Select" value={nat} onChange={handleCountry}>
                    <option value="All">Select Country</option>
                    <option value="au">Australia</option>
                    <option value="us">US</option>
                </select>
            </div>
            <div className="col-auto">
                <select className="form-select form-select-md" aria-label="Gender Select" value={gender} onChange={handleGender}>
                    <option value="All">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className="col-auto">
                <input type="text" className="form-control" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
            </div>
            <div className="col-auto">
                Sort:
                <button type="button" className="btn btn-primary btn-sm mx-2" onClick={handleSortAtoZ} title="Sort By Ascending">A to Z</button>
                <button type="button" className="btn btn-primary btn-sm" onClick={handleSortZtoA} title="Sort By Descending">Z to A</button>
            </div>
            <div className="col-auto">
                <input type="number" className="form-control" min={1} max={1000} value={numUsers} />
            </div>
            <div className="col-auto">
                <button className="btn btn-secondary" onClick={fetchUsers}>Display</button>
            </div>
        </div>
    );
};

export default FilterAndSearch;