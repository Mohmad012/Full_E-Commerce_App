const Dark = ({ dispatch, changeMode }) => {
    return (
        <svg
            className="darkModeIcon"
            onClick={() => dispatch(changeMode())}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
            fill="#fff"
        >
            <path
                fill="#fff"
                d="M204.528 307.578c-79.012-79.311-100.359-194.572-64.069-293.324 3.522-9.585-7.331-18.108-15.829-12.428-15.85 10.594-30.853 22.998-44.716 37.223C-26.473 148.211-25.111 323.73 82.906 431.284c108.354 107.89 283.322 107.62 391.342-.81a278.988 278.988 0 0034.949-42.805c5.643-8.516-2.914-19.31-12.504-15.761-98.368 36.402-213.167 14.968-292.165-64.33z"
            ></path>
            <path
                fill="#fff"
                d="M496.693 371.909a276.487 276.487 0 01-61.709 15.043c-108.66 93.429-272.253 88.776-375.437-13.966C39.788 353.312 23.615 331.357 11 307.957c12.419 45.273 36.398 87.973 71.906 123.329 108.354 107.89 283.322 107.62 391.342-.81a278.988 278.988 0 0034.949-42.805c5.643-8.517-2.914-19.311-12.504-15.762z"
            ></path>
            <path
                fill="#fff"
                d="M368.687 128.801l40.471 5.903c7.074 1.032 9.906 9.704 4.8 14.7l-29.345 28.713a8.617 8.617 0 00-2.47 7.613l6.919 40.495c1.205 7.055-6.221 12.424-12.559 9.079l-36.11-19.056a8.653 8.653 0 00-8.078 0l-36.11 19.056c-6.338 3.345-13.764-2.024-12.559-9.079l6.919-40.495a8.62 8.62 0 00-2.47-7.613l-29.345-28.713c-5.106-4.996-2.274-13.668 4.8-14.7l40.471-5.903a8.641 8.641 0 006.509-4.736l18.065-36.742c3.164-6.435 12.353-6.435 15.517 0l18.065 36.742a8.647 8.647 0 006.51 4.736z"
            ></path>
            <path
                fill="#fff"
                d="M413.959 149.403c5.106-4.996 2.274-13.668-4.8-14.7l-30.418-4.437-8.404 8.223a32.849 32.849 0 00-9.414 29.015l1.823 10.671c2.414 14.129-12.459 24.88-25.151 18.182l-9.204-4.857a32.989 32.989 0 00-30.789 0l-8.816 4.652-5.138 30.072c-1.205 7.055 6.221 12.424 12.559 9.079l36.11-19.056a8.653 8.653 0 018.078 0l36.11 19.056c6.338 3.345 13.764-2.024 12.559-9.079l-6.919-40.495a8.62 8.62 0 012.47-7.613z"
            ></path>
        </svg>
    )
}

export default Dark