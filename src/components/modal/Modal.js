import React from 'react'
import styled from 'styled-components'
import githubImg from '../../utils/GITHUB.png'



const Modal = ({ children, modal, setModal, title, github }) => {

    /* const link = () => {
        window.location.href = github
    } */
    return (
        <>
            {
                modal &&

                <Overlay>
                    <ModalContainer>
                        <NavBarModal>
                            <h3> {title}</h3>
                            <button  type="button" class="btn btn-outline-primary">
                                <a href={github} target="_blank">
                                    <img style={{ width: "4vw" }} src={githubImg} />
                                </a>
                            </button>
                        </NavBarModal>
                        <BtnClose onClick={() => setModal(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </BtnClose>
                        {children}
                    </ModalContainer>
                </Overlay>
            }
        </>
    )
}

export default Modal;


const ModalContainer = styled.div`
    width: 700px;
    min-height: 100px;
    max-height: 470px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,110, 0.2) 0px 7px 29px 0px;
    padding: 20px;
    margin-top: 50px;


    @media only screen and ( max-width : 960px ) {
        width: 300px;
        max-height: 350px;   
    }

`;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0, .5 );
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;
const BtnClose = styled.div`
    position: absolute;
    top : 15px;
    right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766DC;

    &:hover {
        background: #f2f2f2;
    }

    svg {
        width: 100%;
        height: 100%;
    }
`;

const NavBarModal = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
margin-bottom: 10px;
padding-bottom: 10px;
border-bottom: 1px solid #E8E8E8;


h3 {
    font-weight: 500;
    font-size: 16px;
    color: #1766DC;
}

button {
    margin-left: 20px;
}
`;
