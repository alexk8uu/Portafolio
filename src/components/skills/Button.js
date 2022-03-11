import React from 'react'
import './Button.css'
import styled from 'styled-components'


const Button = (params) => {
    console.log("Esto es lo que le llega x params:", params)
    const { image, name } = params
    console.log("Esto es image:", image)
    return (
        <BtnContainer >
            <BtnBorder>
                <img src={image} />
                {/* <p>{name}</p> */}
            </BtnBorder>
        </BtnContainer>

    )
}

export default Button

const BtnContainer = styled.div`
    flex: 1;
    width: 100%;
    max-width: 120px;
    margin: 20px;
    
`;

const BtnBorder = styled.div`
    width: 140px;
    border-radius: 8px;
    height: 120px;
    box-shadow: 0 2px 2px rgba(213, 9, 9, 0.788);
    text-align: center;
    transition: all 0.25s;
    background:rgba(181, 56, 56, 0.1);
    backdrop-filter: blur(20px);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        max-width: 80px;
       padding: 2px;
    }
    
    &:hover {
        transform: translateY(-15px);
        box-shadow: 0 2px 2px rgba(213, 9, 9, 0.788);
        background-color:rgba(156, 13, 24, 0.8)
    }


    @media only screen and (max-width : 970px) {
       
        & {
            width: 60px;
            height: 60px;
            
        }

        img {
        max-width: 40px;
         padding: 2px;
    }
    }
`;