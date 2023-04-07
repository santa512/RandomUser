import React from 'react';

const FilterAndSearch = (props) => {
    return (<>
        <div className="my-3 mb-4 row g-3 align-items-center justify-content-center">
            <div className="col-auto">
                <select className="form-select form-select-md" aria-label=".form-select-sm" onChange={props.handleGender}>
                    <option value="All">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className="col-auto">
                <input type="text" className="form-control" placeholder="Search..." onChange={props.handleSearch} />
            </div>
            <div className="col-auto">
                Sort :
                <button type="button" className="btn btn-primary btn-sm mx-2" onClick={props
                    .handleSortAtoZ} title="Sort By Ascending">A to Z</button>
                <button type="button" className="btn btn-primary btn-sm" onClick={props
                    .handleSortZtoA} title="Sort By Descending">Z to A</button>
            </div>
        </div>
    </>);
}

export default FilterAndSearch;