import React from 'react';

function TodoItem(props) {
    // let x = [0, 1, 2, 3, 4, 5]
    // const doubled = x.map(function (element) {
    //     return element * 2;
    // });

    // const tripled = x.map(Math.sqrt);

    return (
        <li><span><input type="checkbox" /></span>{props.listItem}</li>
    )
}

export default TodoItem;