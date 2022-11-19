const Dark = ({ dispatch, changeMode }) => {
    return (
        <svg
            className="darkModeIcon"
            onClick={() => dispatch(changeMode())}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            data-name="Layer 2"
            viewBox="0 0 35 35"
        >
            <path d="M18.44 34.68a18.22 18.22 0 01-2.94-.24 18.18 18.18 0 01-15-20.86A18.06 18.06 0 019.59.63a2.42 2.42 0 012.61.16 2.39 2.39 0 011 2.41l-1.3-.1 1.23.22A15.66 15.66 0 0023.34 21a15.82 15.82 0 008.47.53A2.44 2.44 0 0134.47 25a18.18 18.18 0 01-16.03 9.68zM10.67 2.89a15.67 15.67 0 00-5 22.77A15.66 15.66 0 0032.18 24a18.49 18.49 0 01-9.65-.64A18.18 18.18 0 0110.67 2.89z"></path>
        </svg>
    )
}

export default Dark