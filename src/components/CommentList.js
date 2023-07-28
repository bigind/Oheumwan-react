import React, {useState} from "react";

const CommentList = props => {
    return (
        <div>
            <p>{props.username}</p>
            <div>{props.userComment}</div>
        </div>
    );
}

export default CommentList;