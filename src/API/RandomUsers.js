"use strict";

const getRandomUsers = async (props) => {
    try {
        let url = `https://randomuser.me/api/1.4/?&results=${props.results}&inc=gender,name,email,phone,picture,nat`;

        if (props.nat) url += `&nat=${props.nat}`;
        if (props.gender) url += `&gender=${props.gender}`;

        const response = await fetch(url);
        return await response.json();
    } 
    catch (error) {
        console.log(`Error Fetching Random User: ${error}`);
    }
}

export default getRandomUsers;