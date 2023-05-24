import { useNavigate, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { UserForm } from '../../components';
import styles from './styles.module.css'


const USERS_ENDPOINT = `${process.env.REACT_APP_API}/users`;

export const EditUser = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [user,setUser] = useState(null); 

    useEffect(() => {
        async function fetchUser() {
            const respons = await fetch(`${USERS_ENDPOINT}/${id}`);
            const data = await respons.json();
            setUser(data);
        }

        fetchUser();
    }, [id]);

    const onSubmit = (values) => {
        fetch(`${USERS_ENDPOINT}/${id}`, {
            method: "PUT",
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
            {!user && <Spin/>}
            {user && (
                <>
                    <h1>users id - {id}</h1>
                    <UserForm onFinish={onSubmit} initialValues={user}/>
                </>
            )}
        </div>
    );
};