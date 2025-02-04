import { useState, useEffect } from "react";
import getRandomUsers from "../API/RandomUsers";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const RandomUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [gender, setGender] = useState("");
    const [nat, setNat] = useState("");
    const [numUsers, setNumUsers] = useState(0);
    const [hasMore, setHasMore] = useState(false);

    const fetchUsers = async () => {
        setUsers([]);
        setHasMore(false);
        if (numUsers <= 0) return;
        setLoading(true);
        try {
            const remainingUsers = numUsers - users.length;
            const res = await getRandomUsers({ nat, gender, results: Math.min(12, remainingUsers)});
            setUsers(res.results);
            setHasMore(users.length + res.results.length < numUsers);
        } catch (err) {
            console.error("Error Fetching Users:", err);
        }
        setLoading(false);
    };

    const fetchMoreData = async () => {
        try {
            const remainingUsers = numUsers - users.length;
            const res = await getRandomUsers({ nat, gender, results: Math.min(12, remainingUsers) });
            setUsers([...users, ...res.results]);
            setHasMore(users.length + res.results.length < numUsers);
        } catch (err) {
            console.error("Error Fetching More Users:", err);
        }
    };

    return (
        <div className="container">
            <h1 className="mt-3">Random Users</h1>
            <div className="my-3 mb-4 row g-3 align-items-center justify-content-center">
                <div className="col-auto">
                    <select className="form-select" value={nat} onChange={(e) => setNat(e.target.value)}>
                        <option value="">Select Country</option>
                        <option value="au">Australia</option>
                        <option value="br">Brazil</option>
                        <option value="ca">Canada</option>
                        <option value="dk">Denmark</option>
                        <option value="fi">Finland</option>
                        <option value="fr">France</option>
                        <option value="de">German</option>
                        <option value="ie">Ireland</option>
                        <option value="ch">Switzerland</option>
                        <option value="es">Spain</option>
                        <option value="gb">UK</option>
                        <option value="us">US</option>
                    </select>
                </div>
                <div className="col-auto">
                    <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="col-auto">
                    <input type="number" className="form-control" min={1} max={1000} value={numUsers} onChange={(e) => setNumUsers(Number(e.target.value))} />
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary" onClick={fetchUsers}>Display</button>
                </div>
            </div>

            <InfiniteScroll
                dataLength={users.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<Loader />}
            >
                {loading && <Loader />}
                <div className="row">
                    {users.map((user) => (
                        <div className="my-3 card-container" key={user.email}>
                            <div className="card-content">
                                <img src={user.picture.medium} alt="User" className="random-user-img" />
                                <div className="name">{user.name.first} {user.name.last}</div>
                                <div>Email: {user.email}</div>
                                <div>Phone: {user.phone}</div>
                                <div>Gender: {user.gender}</div>
                                <div>Country: {user.nat}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default RandomUsers;