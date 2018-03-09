import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Input} from "./Input";
import {Comment} from "./Comment";

const CommentList = styled.ul`
  margin: 0;
  padding: 0;
  li {
    padding-bottom: 30px;
  }
  li:last-child {
     padding-bottom: 0;
  }
`;

export class Comments extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        filter: PropTypes.string,
    };

    constructor(props, context) {
        super(props, context);
        const comments = this.props.comments;
        this.state = {
            filter: '',
            filteredComments: comments,
        };
    }

    componentWillReceiveProps(nextProps) {
        if(!_.isEmpty(nextProps.comments)) {
            this.setState({
                filter: "",
                filteredComments: nextProps.comments,
            });
        }
    }

    render() {
        return (
            <div>
                <Input name="filter"
                       style={{ width: "100%", margin: "10px 0" }}
                       placeholder="Filter comments"
                       value={this.state.filter}
                       onChange={this.onFilterChange}/>
                <CommentList>
                    {this.state.filteredComments.map((comment, index) => {
                        return <Comment key={index} comment={comment}/>
                    })}
                </CommentList>
            </div>
        );
    }

    onFilterChange = event => {
        const filter = event.target.value;
        let comments = this.state.filteredComments;
        if (!_.isEmpty(filter)) {
            comments = comments.filter(item => item.text.includes(filter));
        } else {
            comments = this.props.comments;
        }

        this.setState({
            filter,
            filteredComments: comments,
        });
    }
}