import React from 'react';
import TodoItem from './TodoItem';

function MainContent() {
    return (
        <div>
            <TodoItem listItem="item 1"/>
            <TodoItem listItem="item 2"/>
            <TodoItem listItem="item 3"/>
        </div>
    )
}

export default MainContent;