const SearchBar = ({ search, setSearch,department,sort }) => {

    return (

        <div className="row">

    <div className="col-md-5">

        <input
            type="text"
            className="form-control"
            placeholder="Search Employee..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />

    </div>

    <div className="col-md-3">

        <select
            className="form-select"
            value={department}
            onChange={(e)=>setDepartment(e.target.value)}
        >

            <option value="">All Departments</option>
            <option>IT</option>
            <option>HR</option>
            <option>Finance</option>
            <option>Marketing</option>
            <option>AI</option>
            <option>Non IT</option>

        </select>

    </div>

    <div className="col-md-2">

        <select
            className="form-select"
            value={sort}
            onChange={(e)=>setSort(e.target.value)}
        >

            <option value="">Sort By</option>

            <option value="name">Name</option>

            <option value="salary">Salary</option>

            <option value="department">Department</option>

            <option value="date">Join Date</option>

        </select>

    </div>

</div>

    );

};

export default SearchBar;