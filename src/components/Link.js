import React from 'react'

const Link = (props) => {
    console.log('link props', props)
    if (props.active) {
        return <span>{props.children}</span>
    }

    return (
        <a
            href=""
            onClick={e => {
                e.preventDefault()
                props.onClick()
            }}
            >
            {props.children}
        </a>
    )
}

export default Link