import React from "react";
import { useState } from "react";

export default {
    title: "React.memo demo",
};

const NewMEssagesCounter = (props: any) => {
    return <div>{props.count}</div>;
};

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("users");
    return (
        <div>
            {props.users.map((u, i) => (
                <div key={i}>{u}</div>
            ))}
        </div>
    );
};

const Users = React.memo(UsersSecret);

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Nikita", "Misha", "Gleb"]);

    const adduser = () => {
        const newUsers = [...users];
        newUsers.push("RANDOM");
        setUsers(newUsers);
    };

    return (
        <div>
            <button
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                +
            </button>
            <button onClick={adduser}>add user</button>
            <NewMEssagesCounter count={counter} />
            <Users users={users} />
        </div>
    );
};
