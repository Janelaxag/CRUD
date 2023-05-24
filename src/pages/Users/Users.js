import { useCallback, useEffect, useMemo, useState } from 'react';
import { Table,Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Users.module.css'

const USERS_ENDPOINT = `${process.env.REACT_APP_API}/users`;


export const Users = () => {
    const [users, setUsers] = useState([]);


    const fetchUsers = useCallback(async function(){
      try {
        const response = await fetch(USERS_ENDPOINT, {method: 'GET'});
        const data = await response.json();
        setUsers(data)
      } catch (error) {
        console.log(error.message);
      }
    },[])


    const onUsersDelete = useCallback(async(userId) => {
      try{
        await fetch(`${process.env.REACT_APP_API}/users/${userId}`,{
          method: "DELETE",
        });
        fetchUsers();
      } catch (error){
        console.log(error.message);
      }
    },[fetchUsers]
    );

    const colums = useMemo(() => {
      return [
        {
          key: 'lastName',
          title: 'lastname',
          dataIndex: 'lastName',
          align: 'center'
        },
        {
          key: 'firstName',
          title: 'name',
          dataIndex: 'firstName',
          align: 'center'
        },
        {
          key: 'role',
          title: 'roles',
          dataIndex: 'role',
          align: 'center'
        },
        {
          key: 'buttons',
          dataIndex: 'id',
          align: 'center',
          width: 300,
          render: (id) => {
            return(
              <>
              <Button onClick={() => onUsersDelete(id)} type='link' style={{color: "red"}}>delete</Button>
              <Link to={`/users/${id}`}>Редактрировать</Link>
              </>
            );
          },
        }
    ];
    }, [onUsersDelete]);

    

    useEffect(() => {
      fetchUsers();
    }, [fetchUsers]);
  

    return (
            <div className={styles.container}>
              <Button type='primary'> 
                <Link to="/users/add">
                  add users
                </Link>
              </Button>
              <Table rowKey='id' dataSource={users} className={styles.table} columns={colums} />
            </div>
      );
 }