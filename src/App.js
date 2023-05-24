import { Routes, Route } from "react-router-dom";
import {Layout} from "antd";
import { Users, AddUser, EditUser } from "./pages";

export const App = () => {
    return (
        <Layout>
          <Layout.Header style={{ color: '#fff' }}>Crud Project</Layout.Header>
          <Layout.Content>
            <Routes>
                <Route path="/users" element={<Users />}/>
                <Route path="/users/add" element={<AddUser />}/>
                <Route path="/users/:id" element={<EditUser />}/>
            </Routes>
          </Layout.Content>
        </Layout>
    );
};

