import styled from 'styled-components';

export const Page = styled.div`
    position: absolute;
    opacity: ${props => props.show === true ? '100%' : '0%'};
`
