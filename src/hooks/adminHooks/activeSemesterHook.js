import { useCallback, useContext, useEffect, useState } from "react";
import { headers, url } from "../../configs/config";
import { UserContext } from "../../context";

export const useActiveSemester = () => {
    const { semActive, registerActive } = useContext(UserContext);
    const [FirstButton, setFirstButton] = useState("");
    const [SecondButton, setSecondButton] = useState("");
    const [ThirdButton, setThirdButton] = useState("");

    useEffect(() => {
        fetch(`${url}/semester/state-partials`, {
            method: "GET",
            headers: headers()
        })
            .then(res => res.json())
            .then(data => {
                const { first, second, third } = data;
                setFirstButton(first);
                setSecondButton(second);
                setThirdButton(third);
            })
    }, [])

    const handleFirstButton = useCallback(
        () => {
            fetch(`${url}/semester/first-partial`, {
                method: "GET",
                headers: headers()
            })
                .then(res => res.json())
                .then(data => {
                    setFirstButton(data.message);
                })
        },
        [],
    )

    const handleSecondButton = useCallback(
        () => {
            fetch(`${url}/semester/second-partial`, {
                method: "GET",
                headers: headers()
            })
                .then(res => res.json())
                .then(data => {
                    setSecondButton(data.message);
                })
        },
        [],
    )

    const handleThirdButton = useCallback(
        () => {
            fetch(`${url}/semester/third-partial`, {
                method: "GET",
                headers: headers()
            })
                .then(res => res.json())
                .then(data => {
                    setThirdButton(data.message);
                })
        },
        [],
    )


    return {
        FirstButton,
        SecondButton,
        ThirdButton,
        semActive,
        registerActive,
        handleFirstButton,
        handleSecondButton,
        handleThirdButton
    }
}