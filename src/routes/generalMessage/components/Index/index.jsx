import T from 'utils/T';
import { PureComponent } from 'react';
import {  List, InputItem, Button, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import styles from './index.scss';

class H5NumberInputExample extends PureComponent {
    state = {
        // type: 'money',
        type: 'text',
    }

    submit = () => {
        this.props.form.validateFields((error, value) => {
            console.log(error, value);
        });
    }

    render() {
        let errors = [];
        const { getFieldProps, getFieldError } = this.props.form;

        return (
            <div className={styles["general-message"]}>
                <div className={styles["income"]}>

                </div>

            </div>
        );
    }
}

const H5NumberInputExampleWrapper = createForm()(H5NumberInputExample);


export default class Index extends PureComponent {
    render() {
        return (
            <H5NumberInputExampleWrapper />
        );
    }
}




