import Button from "@material-ui/core/Button";
import {
    WrapperIcon,
    DropDownBx
} from "./style";
const CustomDropdown = ({
    showMenu,
    handleToggle,
    width = "2.2rem",
    height = "2.2rem",
    isDark,
    Icon,
    Class = "iconOthersBtn",
    children
}) => {
    return (
        <DropDownBx showMenu={showMenu}>
            <Button
                style={{ minWidth: "40px" }}
                className={Class}
                onClick={handleToggle}>
                <WrapperIcon isDark={isDark} type="list">
                    <Icon style={{ width, height }} />
                </WrapperIcon>
                {children}
            </Button>
        </DropDownBx>
    )
}

export default CustomDropdown