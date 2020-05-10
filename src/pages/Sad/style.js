import styled from 'styled-components';

export const Page = styled.div`
    height: 100%;
    width: 100%; 
    background-color: #fff; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h3 {
        padding-bottom: 10px;
    }

    img {
        height: 500px;
        width: 500px;
        opacity: ${props => props.showImage === true ? '100%' : '0%'};
    }

    button {
        background: transparent;
        border: none;
        margin-right: 20px;
    }

    button:hover{
        cursor: pointer;
    }

    .menu {
        margin: 20px;
    }
`