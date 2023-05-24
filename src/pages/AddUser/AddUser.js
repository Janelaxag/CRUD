import { useNavigate } from 'react-router-dom';
import { UserForm } from '../../components';
import styles from './styles.module.css'


const USERS_ENDPOINT = `${process.env.REACT_APP_API}/users`;

export const AddUser = () => {

    const navigate = useNavigate();

    const onSubmit = (values) => {
        fetch(USERS_ENDPOINT, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: values.firstName || '',
                lastName: values.lastName || '',
                role: values.role || '',
            }),
        }).then(()=>{
            navigate('/users');
        })
    };

    return(
        <div className={styles.container}>
            <UserForm onFinish={onSubmit}/>
        </div>
    );
};