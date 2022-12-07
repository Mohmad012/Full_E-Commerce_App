import Button from "@material-ui/core/Button";
import {
    WrapperIcon,
    DropDownBx
} from "./style";
const CustomDropdown = ({
    showMenu,
    handleToggle,
    isDark,
    Icon,
    Class = "iconOthersBtn",
    children,
    styleCs
}) => {
    return (
        <DropDownBx showMenu={showMenu}>
            <Button
                style={{ minWidth: "40px" }}
                className={Class}
                onClick={handleToggle}>
                <WrapperIcon isDark={isDark} type="list">
                    <Icon style={styleCs} />
                </WrapperIcon>
                {children}
            </Button>
        </DropDownBx>
    )
}

export default CustomDropdown