import React from 'react'
import { Page } from './style';

function Loading ({show}) {
    return (
        <Page show={show}>
           Carregando...
        </Page>
    )
}

export default Loading 
