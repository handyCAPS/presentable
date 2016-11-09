
import React from 'react';

const InfoText = ({
    label,
    text,
    classNamesWrap = [],
    classNamesLabel = [],
    classNamesValue = []
}) => (
    <p className={['info__text', ...classNamesWrap].join(' ')}>
        <span className={['info__label', ...classNamesLabel].join(' ')}>{label}:</span>
        <span className={['info__value', ...classNamesValue].join(' ')}> {text}</span>
    </p>
    );

export default InfoText;