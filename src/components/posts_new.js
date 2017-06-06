import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
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
            </div>
        );
    }

    render() {
        return (
            <form>
                <Field name="title" label="Title" component={this.renderField} />
                <Field name="tags" label="Tags" component={this.renderField} />
                <Field name="content" label="Post Content" component={this.renderField} />
            </form>
        );
    }
}

// this enables the redux form communicate with the reducer
export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);