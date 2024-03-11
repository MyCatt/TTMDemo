import './styles/navigation.css';

function Navigation() {
    const links = {
        "LIBRARY": {active: true, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.66 18.66"><path class="cls-1" d="M0,12H5.33V6.67H0Zm0,6.66H5.33V13.33H0ZM0,5.33H5.33V0H0ZM6.67,12h16V6.67h-16Zm0,6.66h16V13.33h-16ZM6.67,0V5.33h16V0Z" fill="#588D9F"></path></svg>},
        "TEST PLANS": {active: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 21.85"><path class="cls-1" d="M29,4.45H16v2.9H29Zm0,11.6H16V19H29ZM5.13,10.25,0,5.12,2,3.07,5.12,6.15,11.27,0l2,2Zm0,11.6L0,16.72l2-2,3.08,3.08,6.15-6.15,2,2Z" fill="#588D9F"></path></svg>},
        "RESULTS": {active: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.66 24"><path class="cls-1" d="M24,0H2.67A2.68,2.68,0,0,0,0,2.67V21.33A2.68,2.68,0,0,0,2.67,24H24a2.67,2.67,0,0,0,2.66-2.67V2.67A2.67,2.67,0,0,0,24,0ZM10.67,18.66H4V16h6.67Zm0-5.33H4V10.67h6.67Zm0-5.33H4V5.33h6.67Zm6.42,8-3.76-3.79,1.88-1.88,1.88,1.9L21.32,8l1.89,1.89Z" fill="#588D9F"></path></svg>},
        "VARIABLES": {active: false, icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.66 26.66"><path class="cls-1" d="M13.33,0a13.33,13.33,0,0,0,0,26.66H20V24H13.33A10.8,10.8,0,0,1,2.67,13.33,10.8,10.8,0,0,1,13.33,2.67,10.8,10.8,0,0,1,24,13.33v1.91a2.16,2.16,0,0,1-2,2.09,2.15,2.15,0,0,1-2-2.09V13.33A6.67,6.67,0,1,0,18.05,18,5,5,0,0,0,22,20a4.69,4.69,0,0,0,4.66-4.76V13.33A13.33,13.33,0,0,0,13.33,0Zm0,17.33a4,4,0,1,1,4-4A4,4,0,0,1,13.33,17.33Z" fill="#588D9F"></path></svg>},
        "SCHEDULE": {active: false, icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-calendar-check" viewBox="0 0 16 16"><path class="cls-1" fill="#588d9f" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path><path class="cls-1" fill="#588d9f" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path></svg>},
        "SUPPORT": {active: false, icon: <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1"><g id="Icons" fill="none"><g id="Rounded" transform="translate(-544.000000, -288.000000)"><g id="Action" transform="translate(100.000000, 100.000000)"><g id="-Round-/-Action-/-help" transform="translate(442.000000, 186.000000)"><g><polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon><path fill="#588D9F" d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M13,19 L11,19 L11,17 L13,17 L13,19 Z M15.07,11.25 L14.17,12.17 C13.67,12.68 13.31,13.14 13.13,13.86 C13.05,14.18 13,14.54 13,15 L11,15 L11,14.5 C11,14.04 11.08,13.6 11.22,13.19 C11.42,12.61 11.75,12.09 12.17,11.67 L13.41,10.41 C13.87,9.97 14.09,9.31 13.96,8.61 C13.83,7.89 13.27,7.28 12.57,7.08 C11.46,6.77 10.43,7.4 10.1,8.35 C9.98,8.72 9.67,9 9.28,9 L8.98,9 C8.4,9 8,8.44 8.16,7.88 C8.59,6.41 9.84,5.29 11.39,5.05 C12.91,4.81 14.36,5.6 15.26,6.85 C16.44,8.48 16.09,10.23 15.07,11.25 Z" id="🔹Icon-Color"></path></g></g></g></g></g></svg>}
    }
  return (
    <div id="navigation">
        <div className="sidebar__inner--top">
            <img id="logo" src="https://pre-prod-new.thetestmart.com/static/media/TTM_Logo-IconOnly-ForDarkBackgrounds.6df0d361.svg" />
        </div>
        <div className="sidebar__inner__main">
            {
                Object.keys(links).map(link => <div>
                    <a href="" className={links[link].active ? "sidebar__inner--item active" : "sidebar__inner--item"}>
                        {links[link].icon}
                        <p>{link}</p>
                    </a>
                </div>)
            }
        </div>
    </div>
  );
}

export default Navigation;
