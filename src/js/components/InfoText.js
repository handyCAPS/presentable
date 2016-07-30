
import React from 'react';

const InfoText = ({
    label,
    text
}) => (
    <p className="info__text">
        <span className="info__label">{label}:</span>
        <span className="info__value"> {text}</span>
    </p>
    );

export default InfoText;