import React, { useCallback, useMemo } from "react";
import { useState } from "react";

export default {
    title: "useMemo",
};

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(4);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResult = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResult = tempResult * i;
        }
        return tempResult;
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return (
        <div>
            <input
                value={a}
                onChange={(e) => setA(Number(e.currentTarget.value))}
            />
            <input
                value={b}
                onChange={(e) => setB(Number(e.currentTarget.value))}
            />
            <hr />
            <div>
                ResultA : {resultA}
                <hr />
                ResultB : {resultB}
            </div>
        </div>
    );
};

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("users secret");
    return (
        <div>
            {props.users.map((u, i) => (
                <div key={i}>{u}</div>
            ))}
        </div>
    );
};

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo rendering");
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Nikita", "Misha", "Gleb"]);

    const newArray = useMemo(() => {
        const newArray = users.filter((u) => u.toLowerCase().indexOf("a") > 0);
        return newArray;
    }, [users]);

    const adduser = () => {
        const newUsers = [...users];
        newUsers.push("Sveta");
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
            <button
                onClick={() => {
                    adduser();
                }}
            >
                add user
            </button>
            {counter}
            <Users users={newArray} />
        </div>
    );
};

export const LikeUseCallback = () => {
    console.log("LikeUseCallback rendering");
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["React", "Js", "CSS", "HTML", "REDUX"]);

    const memorizedAddBook = useMemo(() => {
        return () => {
            const newUsers = [...books];
            newUsers.push("Angular");
            setBooks(newUsers);
        };
    }, [books]);

    const memorizedAddBook2 = useCallback(() => {
        console.log(books);
        const newUsers = [...books];
        newUsers.push("Angular");
        setBooks(newUsers);
    }, [books]);

    return (
        <div>
            <button
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                +
            </button>

            {counter}
            <Books addBook={memorizedAddBook2} />
        </div>
    );
};

type BooksSecretPropsType = {
    addBook: () => void;
};

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log("books secret");
    return (
        <div>
            <button
                onClick={() => {
                    props.addBook();
                }}
            >
                add book
            </button>
        </div>
    );
};

const Books = React.memo(BooksSecret);
