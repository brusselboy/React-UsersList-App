import React, {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/reducers/users/asyncActions";
import {Card, Collapse, Descriptions, Layout} from "antd";
import 'antd/dist/antd.css';
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { LoadingOutlined, MinusCircleOutlined } from '@ant-design/icons';
import {UserActionEnum} from "../store/reducers/users/types";

const UsersList: FC = () => {
    const dispatch = useDispatch()
    const {users, isLoading, error} = useTypedSelector(state => state.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (error) {
        return <h1>{error}</h1>
    }

    function removeUser(user: any) {
        dispatch({type: UserActionEnum.REMOVE_USER, payload: user.id})
    }

    return (
        <Layout>
            {isLoading ? <LoadingOutlined style={{fontSize: '72px', marginTop: '5rem'}} /> : <></>}
            {users.map((user, index) =>
                <div className={'wrapper-cards'} key={user.id}>
                    <MinusCircleOutlined className={'delete-card'} onClick={() => removeUser(user)} />
                    <Card
                        title={(index + 1) + ". " + user.name}
                        bordered={false}
                        style={{ width: 600 }}
                        className={'shadow-card'}
                    >
                        <Collapse accordion>
                           <CollapsePanel key={'1'} header={'Информация о пользователе:'}>
                                <Descriptions layout={'vertical'} >
                                    <Descriptions.Item label="Имя" span={1}>{user.name}</Descriptions.Item>
                                    <Descriptions.Item label="Телефон" span={1}>{user.phone}</Descriptions.Item>
                                </Descriptions>
                                <hr/>
                                <Descriptions layout={'vertical'} >
                                    <Descriptions.Item label="Город проживания" span={1}>{user.address.city}</Descriptions.Item>
                                    <Descriptions.Item label="Улица" span={1}>{user.address.street} {user.address.suite}</Descriptions.Item>
                                </Descriptions>
                                <hr/>
                                <Descriptions layout={'vertical'} >
                                    <Descriptions.Item label="Место работы" span={1}>{user.company.name}</Descriptions.Item>
                                    <Descriptions.Item label="Род деятельности" span={1}> {user.company.bs}</Descriptions.Item>
                                </Descriptions>
                            </CollapsePanel>
                        </Collapse>
                    </Card>
                </div>
            )}
        </Layout>
    );
};

export default UsersList;