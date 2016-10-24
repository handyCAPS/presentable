
import React from 'react';

import Forminput from './Forminput';

const Form = React.createClass({
    render() {
        return (
            <div className="form ">
                {this.props.inputs.map((input, index) => {
                    const { name, label, type = 'text' } = input;
                    return (
                        <Forminput
                            key={index}
                            name={name}
                            label={label}
                            type={type} />
                    );
                })}
                {this.props.buttons.map((button, index) => {
                    const { label, classNames = [], type = 'submit' } = button;
                    const classList = [
                        'btn',
                        'btn--success',
                        'btn--' + type,
                        'form__button',
                        'form__button--' + type,
                        ...classNames
                    ];
                    return (
                        <button
                            key={index}
                            type="button"
                            onClick={this.props.handleSubmit}
                            className={classList.join(' ')}>{label}
                        </button>
                        );
                })}
            </div>
        );
    }
});

export default Form;