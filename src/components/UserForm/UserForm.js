import {Form, Input, Select, Button} from 'antd';

export const UserForm = (props) => {
    const { onFinish, initialValues = {role: 'developer'} } = props;

    const selectOptions = [
        {value: 'developer',label: 'developer'},
        {value: 'disayner',label: 'disayner'},
        {value: 'meneger',label: 'meneger'},
        {value: 'testmen',label: 'testmen'},
    ];

    const btnText = props.initialValues ? 'save' : 'add';

    return (
        <Form onFinish={onFinish} initialValues={initialValues}>
                <Form.Item name="firstName" label='firstName' required>
                    <Input placeholder='input firstName' required/>
                </Form.Item>
                <Form.Item name="lastName" label='lastName' required>
                    <Input placeholder='input lastName' required/>
                </Form.Item>
                <Form.Item name="role" label='role' required>
                    <Select 
                        options={selectOptions} 
                        placeholder='choos role' 
                    />
                </Form.Item>
                <Button type='primary' htmlType='submit'> {btnText} </Button>
            </Form>
    );
};