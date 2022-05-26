import {styled} from "../../utils/ReactLibs";
import { mobile , tablet , smMobile } from '../../utils/responsive';

export const Container = styled.div`
  height:60vh;
  background-color:#7e403b;
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`


export const Title = styled.h1`
  font-size:70px;
  margin-bottom:20px;
  ${smMobile({ fontSize:"60px" })};
  
`


export const Desc = styled.div`
  font-size:24px;
  font-weight:300;
  margin-bottom:20px;
  ${mobile({ textAlign:"center" })};
  ${tablet({ textAlign:"center"})};
`


export const InputContainer = styled.div`
  width:50%;
  height:40px;
  background-color:white;
  display:flex;
  justify-content:space-between;
  border:1px solid lightgray;
  ${mobile({ width:"80%" })};
`


export const Input = styled.input`
  border:none;
  flex:8;
  padding-left:20px;
`


export const Button = styled.button`
  flex:1;
  border:none;
  background-color:#c88b77;
  color:white;
  cursor: pointer;
`

