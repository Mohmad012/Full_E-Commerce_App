import {styled} from "../../../../utils/ReactLibs";
import { mobile, lap } from '../../../../utils/responsive';

export const Container = styled.div`
  flex:1;
  margin:3px;
  height:70vh;
  position:relative;

`
export const Image = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  ${mobile({ height:"65vh" })};
`
export const Info = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`
export const Title = styled.h1`
  color:white;
  margin-bottom:20px;
  ${lap({ textAlign: "center" })};
`
export const Button = styled.button`
  border:none;
  padding:10px;
  background-color:white;
  color:gray;
  cursor:pointer;
  font-weight:600;
  
  width: 150px;
  height: 50px;
  border: 2px solid #b96f7a;
  font-family: 'Cinzel', serif;
  font-size: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  transition: 0.8s;
  background-color:#eee;

  &:before, &:after {
    position: absolute;
    background: #eee;
    z-index: -1;
    transition: 0.3s;
    content: '';
  }

  &:before {
    height: 50px;
    width: 130px;
  }
  
  &:after {
    width: 150px;
    height: 30px;
  }

  .noselect {
    -webkit-touch-callout: none;
      -webkit-user-select: none;
       -khtml-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
  }
  
  &:hover::before {
    width: 0px;
    background: #4a2f26;
  }
  
  &:hover::after {
    height: 0px;
    background: #4a2f26;
  }
  
  &:hover {
    background: #4a2f26;
  }
`