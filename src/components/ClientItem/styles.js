import styled from 'styled-components';
import {Link } from 'react-router-dom'
// import {MdCheckBoxOutlineBlank} from 'react-icons/md'
// import CheckCircleOutline from 'material-ui/svg-icons/action/check-circle-  ';

export const InputClient = styled(Link)`
  cursor: pointer;     

  div.container-checkbox{
    width: 40px;
    height: 40px;
    background: #ff8822;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    img.checkbox{
      background: #ff8822;
      width: 20px;
      height: 20px;
    }
  }

  
  `;



export const ContainerCheck = styled.div`
    background: #ff8822;
    width: 40px;
    height: 40px;
    border-radius: 50%;
`