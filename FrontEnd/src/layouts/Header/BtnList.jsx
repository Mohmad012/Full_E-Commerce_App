import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";

const BtnList = ({
  ClassList = "",
  classes,
  anchorBtn,
  openBtn,
  setOpenBtn,
  WrapperIcon,
  isDark,
  handleToggle,
  width = "2.2rem",
  height = "2.2rem",
  IconBtn,
  children,
  BtnListBx,
  type = "",
}) => {
  return (
    <BtnListBx className={`${classes.root} ${ClassList}`} type={type}>
      <div>
        <Button
          style={{ minWidth: "40px" }}
          ref={anchorBtn}
          aria-controls={openBtn ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={() => handleToggle(setOpenBtn)}>
          <WrapperIcon isDark={isDark} type={type}>
            <IconBtn style={{ width, height }} />
          </WrapperIcon>
        </Button>
        <Popper
          className="listOfBtns"
          style={{
            zIndex: 1,
          }}
          open={openBtn}
          anchorEl={anchorBtn.current}
          role={undefined}
          transition
          disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}>
              <Paper>{children}</Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </BtnListBx>
  );
};

export default BtnList;
