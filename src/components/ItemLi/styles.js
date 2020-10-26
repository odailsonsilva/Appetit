import styled from 'styled-components';
import CheckboxImg from '../../assets/imgs/client-selected/checkbox.svg'
import {Link} from 'react-router-dom'

export const Container = styled(Link)`
  cursor: pointer;     
  width: 90%;
  height: 56px;
  display: flex;
  margin: 16px 0 16px;
  align-items: center;
  color: #000;

  
  
  input[type="checkbox"]{
    display: none;

    &+label::before{
      content: "";
      width: 40px;
      height: 40px;
      background-image: url(${props=> props.src});
      vertical-align: middle;
      display: inline-block;
      margin: 0 8px 0 0;
      border-radius: 50%;
    }

    &:checked + label:before{
      content: "";
      width: 40px;
      height: 40px;
      background:#ff8822 url(${CheckboxImg}) no-repeat center center;
      vertical-align: middle;
      display: inline-block;
      margin: 0 8px 0 0;
      background-color: ;
      border-radius: 50%;
    }
  }

  label{
    cursor: pointer; 
    display: flex;
    flex: 1;
    align-items: center;
    padding: 16px;
  }
  
  `;



export const ContainerCheck = styled.div`
    background: #ff8822;
    width: 40px;
    height: 40px;
    border-radius: 50%;
`