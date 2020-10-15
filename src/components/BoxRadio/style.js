import React from 'react'
import styled from 'styled-components'

import IconBefore from '../../assets/imgs/radio/radio_button_off.svg'
import IconActive from '../../assets/imgs/radio/radio_button_on.svg'

export const Container = styled.div`
  display: block;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 90%;
  height: 56px;
  margin-top: 16px;
  

  display: flex;
  align-items: center;
  padding: 19px;

  input[type="radio"]{
    display: none;

    &+label::before{
      content: "";
      width: 25px;
      height: 25px;
      background-image: url(${IconBefore});
      background-position: 0 -72px;
      vertical-align: middle;
      display: inline-block;
      margin: 0 8px 0 0;
    }

    &:checked + label:before{
      content: "";
      width: 25px;
      height: 25px;
      background-image: url(${IconActive});
      background-position: 0 -72;
      vertical-align: middle;
      display: inline-block;
      margin: 0 8px 0 0;
    }
  }
  
  label{
    margin-left: 8px;
    width: 100%;
    cursor: pointer;
  }
`