import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui massive text loader">{props.message}</div>
        </div>
    );
};
// can use "{props.message || 'Loading...'}" for defaulting input text, or ->
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;