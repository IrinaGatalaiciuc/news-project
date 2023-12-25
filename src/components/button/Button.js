import React from 'react'
import styled from 'styled-components'

 export const ButtonComponent = styled.button`
 height: 35px;
 background-color: rgb(142, 142, 231);
 color: black;
 font-size: 20px;
 cursor: pointer;
 padding: 0 15px;
`

export const BlueButton = styled(ButtonComponent)`
background-color: #22303E;
color: white;
padding: 10px 15px;
text-align: center;
height: 55px;
`