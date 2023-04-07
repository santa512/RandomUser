import React from 'react';

const Nav = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Random User App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav></>;
}


export default Nav;