import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    // instead of
                    // onChange={field.input.onChange}
                    // onFocus={field.input.onFocus}
                    // onBlur={field.input.onBlur}
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        // "handleSubmit" is from "reduxForm(...)(PostsNew) wiring"
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="title" label="Title" component={this.renderField} />
                <Field name="categories" label="Categories" component={this.renderField} />
                <Field name="content" label="Post Content" component={this.renderField} />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

// "validate" gets called automatically by reduxForm since we wired it in the export statement
// "values" contains values that user Enter some content please! in the form
function validate(values) {
    // console.log(values) => {title: 'asdf', categories: 'aaa', content: 'xxx' }
    const errors = {};

    // validate the inputs from 'values'
    if (!values.title) {
        // ".title" should match "Field.name"
        errors.title = "Enter a title";
    }

    if (!values.categories) {
        errors.categories = "Enter categories";
    }

    if (!values.content) {
        errors.content = "Enter some content please!";
    }

    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, then redux assumes form is invalid.
    return errors;
}

// this enables the redux form communicate with the reducer
export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
    );


