import React, {PureComponent} from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Input} from "./Input";
import {TextBox} from "./TextBox";
import {Button} from "./Button";

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 10px;
    border-bottom: 2px solid;
`;

export class CommentForm extends PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {
            email: "",
            text: "",
            disabled: true,
        }
    }
    render() {
        return (
            <Form>
                <Input type="email" onChange={this.onEmailChange} value={this.state.email} placeholder="Email Address"/>
                <TextBox onChange={this.onTextChange} placeholder="Comment..." value={this.state.text}/>
                <Footer>
                    {} <Button width={90} onClick={this.onCommentSubmit} disabled={this.state.disabled}>Submit</Button>
                </Footer>
            </Form>
        );
    }

    onTextChange = event => {
        const text = event.target.value;
        const disabled = _.isEmpty(this.state.email) || _.isEmpty(text);
        this.setState({
            text,
            disabled,
        });
    };

    onEmailChange = event => {
        const email = event.target.value;
        const disabled = _.isEmpty(this.state.text) || _.isEmpty(email);
        this.setState({
            email,
            disabled,
        });
    };

    onCommentSubmit = () => {
        const { email, text } = this.state;
        const trimmedEmail = email.trim();
        const lowerEmail = trimmedEmail.toLowerCase();
        const hash = md5(lowerEmail);

        const comment = { email, text, created: Date.now(), avatar: `https://www.gravatar.com/avatar/${hash}`};

        this.props.onSubmit(comment);
        this.setState({
            email: "",
            text: "",
            disabled: true,
        });
    };
}

CommentForm.displayName = "CommentForm";

CommentForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};