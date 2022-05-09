import React from 'react'

const Tabs = (props) => {

    const onClickHandler = (e, item) => {
        props.active(item)
    }

    return props.content.map( (item, i) => {
        return <button style={{padding: "10px 30px",  margin: "0 5px"}}
        onClick={(e) => onClickHandler(e, item)}>Tab {i+1}</button>
    } )
}

export default Tabs