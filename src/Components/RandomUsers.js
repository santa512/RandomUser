import { useState, useEffect } from "react";
import getRandomUsers from "../API/RandomUsers";
import Loader from "./Loader";
import FilterAndSearch from "./FilterAndSearch";
import InfiniteScroll from "react-infinite-scroll-component";

const RandomUsers = (props) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [searchParam] = useState(["fname", "lname", "phone", "email"]);
    const [q, setQ] = useState("");
    const [sort, setSort] = useState("none");
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const handleGender = (e) => {
        setFilterParam(e.target.value);
    }

    const handleSearch = (e) => {
        setQ(e.target.value);
    }

    const handleSortAtoZ = (e) => {
        setSort("ascending");
    }

    const handleSortZtoA = (e) => {
        setSort("descending");
    }

    useEffect(() => {
        setLoading(true);
        getRandomUsers(props).then((res) => {
            setLoading(false);
            setUsers(res.results);
        }).catch((err) => {
            console.error('Error:', err);
        });
    }, []);

    const fetchMoreData = async () => {
        getRandomUsers({ page: page + 1 }).then((res) => {
            setPage(page + 1);
            setLoading(false);
            setUsers(users.concat(res.results));
            setTotalResults(res.totalResults)
        }).catch((err) => {
            console.error('Error:', err);
        });
    };

    const sortMethods = {
        none: { method: () => null },
        ascending: { method: (a, b) => (a.name.first > b.name.first ? 1 : -1) },
        descending: { method: (a, b) => (a.name.first > b.name.first ? -1 : 1) },
    };

    let usersData = Object.values(users);
    const filterSearch = (items) => {
        let n;
        return items.sort(sortMethods[sort].method).filter((item) => {
            if (item.gender === filterParam) {
                return searchParam.some((newItem) => {
                    if (newItem === 'fname') {
                        n = item['name']['first'];
                    }
                    else if (newItem === 'lname') {
                        n = item['name']['last'];
                    }
                    else {
                        n = item[newItem];
                    }
                    return (
                        n
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newItem) => {
                    if (newItem === 'fname') {
                        n = item['name']['first'];
                    }
                    else if (newItem === 'lname') {
                        n = item['name']['last'];
                    }
                    else {
                        n = item[newItem];
                    }
                    return (
                        n
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }

    return (
        <>
            <div className="container">
                <h1 className="mt-3">Random Users</h1>
                <FilterAndSearch handleGender={handleGender} handleSearch={handleSearch} handleSortAtoZ={handleSortAtoZ} handleSortZtoA={handleSortZtoA} />
                <InfiniteScroll
                    dataLength={usersData.length}
                    next={fetchMoreData}
                    hasMore={usersData.length !== totalResults}
                    loader={<Loader />}
                    style={{overflow: "none"}}
                >
                    {loading && <Loader />}
                    <div className="row">
                        {filterSearch(usersData).map((user) => {
                            return <div className="col-md-4 my-3" key={user.email}>
                                <div><img src={user.picture.medium} alt="" className="random-user-img" /></div>
                                <div className="my-1"> {user.name.first}</div>
                                <div>{user.email}</div>
                                <div>{user.phone}</div>
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        </>
    );
}
RandomUsers.defaultProps = {
    page: 1,
    noOfResults: 12
}

export default RandomUsers;