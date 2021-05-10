import { useState } from "react";
import { useLocation } from "react-router";

export const useStateSidenavHook = () => {


    const { pathname } = useLocation();
    let url = pathname.split('/');

    const [sidenav, setSidenav] = useState(true);

    const handleSidenav = () => {
        if (sidenav) {
            const sidenavRef = document.getElementById('sidenav')
            const mainRef = document.getElementById('main');
            mainRef.classList.add('show-main');
            sidenavRef.classList.add('hidden-sidenav');
        } else {
            const sidenavRef = document.getElementById('sidenav');
            const mainRef = document.getElementById('main');
            console.log();
            sidenavRef.classList.remove('hidden-sidenav');
            mainRef.classList.remove('show-main');
        }
        setSidenav(!sidenav);
    }

    return {
        url,
        handleSidenav
    }
}