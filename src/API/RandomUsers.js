"use strict";

const getRandomUsers = async (props) => {
    try {
        const response = await fetch(`https://randomuser.me/api?page=${props.page}&results=12&seed=random&inc=gender,name,email,phone,picture`);
        return await response.json();
    } 
    catch (error) {
        console.log(`Error Fetching Random User: ${error}`);
    }
}

export default getRandomUsers;