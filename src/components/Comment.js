import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentWrap = styled.li`
    display: flex;
    width: 100%;
`;

const Avatar = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  padding-right: 10px;
`;

const Message = styled.div``;

const Title = styled.div`
    font-size: 16px;
    margin-bottom: 5px;
`;

const Email = styled.span`
    font-weight: bold;
    width: 200px;
    display: inline-block;
`;

const Elapsed = styled.span`
    font-style: italic;
    color: #ddd;
`;

const Body = styled.div``;


export const Comment = ({comment}) => {
    const elapsed = comment.created;
    return (
        <CommentWrap>
            <Avatar src={comment.avatar}/>
            <Message>
                <Title><Email>{comment.email}</Email><Elapsed>{elapsed} hours ago</Elapsed></Title>
                <Body>{comment.text}</Body>
            </Message>
        </CommentWrap>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        avatar: PropTypes.string,
        email: PropTypes.string,
        created: PropTypes.number,
        text: PropTypes.string,
    }).isRequired,
};