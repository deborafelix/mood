import React from 'react';
import { Button } from './style';

const Emoji = ({ img, OnClick, label, value, status}) => {
    const handleOnChoose = (e) => {
        e.preventDefault();
        OnClick(value);
    }
    return (
        <Button onClick={handleOnChoose} value={value} status={status}>
            <img src={img} alt="" />
            <span>
                {label}
            </span>
        </Button>
    )
};

export default Emoji;