import React, {Component} from "react";
import * as urls from "./config";
import {Main} from "./components/Main";
import {Box} from "./components/Box";
import {CommentForm} from "./components/CommentForm";
import {Comments} from "./components/Comments";
import {postComment, getComments} from "./utils/dataFetcher";

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            comments: [],
        };
    }

    async componentDidMount() {
        // const response = await fetch(urls.GET_COMMENTS_URL);
        // const comments = await response.json();

        const comments = await getComments(urls.GET_COMMENTS_URL);

        this.setState(() => ({
            comments,
        }));
    }

    render() {
        return (
            <Main>
                <Box>
                    <CommentForm onSubmit={this.onCommentSubmit} />
                    <Comments comments={this.state.comments} />
                </Box>
            </Main>
        );
    }

    onCommentSubmit = (comment) => {
        postComment(urls.POST_COMMENT_URL, { comment }).then(newComment => {
            let { comments } = this.state;

            comments.push(newComment.comment);
            this.setState(() => ({
                comments: _.orderBy(comments, ["created"], ["desc"]),
            }));
        });
    }
}

export default App;