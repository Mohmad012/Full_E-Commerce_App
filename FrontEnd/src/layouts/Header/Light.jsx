const Light = ({ dispatch, changeMode }) => {
    return (
        <svg
            className="lightModeIcon"
            onClick={() => dispatch(changeMode())}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            enableBackground="new 0 0 400 400"
            version="1.1"
            viewBox="0 0 400 400"
            xmlSpace="preserve"
            fill="gray"
        >
            <g>
                <path d="M213.3 26.7L213.3 0 186.7 0 186.7 26.7 186.7 53.3 213.3 53.3z"></path>
                <path d="M53.3 53.3H80V80H53.3z"></path>
                <path d="M320 53.3H346.7V80H320z"></path>
                <path d="M80 80H106.7V106.7H80z"></path>
                <path d="M213.3 106.7L240 106.7 240 80 213.3 80 186.7 80 160 80 160 106.7 186.7 106.7z"></path>
                <path d="M293.3 80H320V106.7H293.3z"></path>
                <path d="M133.3 106.7H160V133.4H133.3z"></path>
                <path d="M240 106.7H266.7V133.4H240z"></path>
                <path d="M106.7 133.3H133.4V160H106.7z"></path>
                <path d="M266.7 133.3H293.4V160H266.7z"></path>
                <path d="M53.3 186.7L26.7 186.7 0 186.7 0 213.3 26.7 213.3 53.3 213.3z"></path>
                <path d="M106.7 186.7L106.7 160 80 160 80 186.7 80 213.3 80 240 106.7 240 106.7 213.3z"></path>
                <path d="M293.3 213.3L293.3 240 320 240 320 213.3 320 186.7 320 160 293.3 160 293.3 186.7z"></path>
                <path d="M373.3 186.7L346.7 186.7 346.7 213.3 373.3 213.3 400 213.3 400 186.7z"></path>
                <path d="M106.7 240H133.4V266.7H106.7z"></path>
                <path d="M266.7 240H293.4V266.7H266.7z"></path>
                <path d="M133.3 266.7H160V293.4H133.3z"></path>
                <path d="M240 266.7H266.7V293.4H240z"></path>
                <path d="M80 293.3H106.7V320H80z"></path>
                <path d="M186.7 293.3L160 293.3 160 320 186.7 320 213.3 320 240 320 240 293.3 213.3 293.3z"></path>
                <path d="M293.3 293.3H320V320H293.3z"></path>
                <path d="M53.3 320H80V346.7H53.3z"></path>
                <path d="M320 320H346.7V346.7H320z"></path>
                <path d="M186.7 373.3L186.7 400 213.3 400 213.3 373.3 213.3 346.7 186.7 346.7z"></path>
            </g>
        </svg>
    )
}

export default Light