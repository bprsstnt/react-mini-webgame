import React, { memo } from 'react';

const Attempt = memo((props) => {
    return (
        <li>
            <div>
                {props.attemptInfo.attempt}
            </div>
            <div>
                {props.attemptInfo.result}
            </div>
        </li>
    )
});
Attempt.displayName = 'Attempt';

export default Attempt;