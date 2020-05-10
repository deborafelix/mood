import styled from 'styled-components';

export const Button = styled.button`
    background-color: #fff;
    width: 80px;
    height: 120px;
    margin: 30px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 0;
    transition: border-color 0.2s;

    &:hover {
        cursor: pointer;
        border-radius: 4px;
	    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    span {
        margin: 15px;
        font-weight: bold;
    }

    img {
        width: 50px;
        height: 50px;
        color:${props => props.status === 'none' && '#e6e6e6' };
    }

`;