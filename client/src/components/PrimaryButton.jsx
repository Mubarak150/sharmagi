import React from "react";
import classNames from 'classnames';

export default function (props) {
    return (
        <a href={props.href}>
            <button className={classNames('lg:px-4 py-2 rounded-3xl text-sm min-w-28', props.buttonClass)}>
                {props.text}
            </button>
        </a>
        
    )
}