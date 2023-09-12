import { getUsers } from "@/app/functions/handlerAcessAPI";
import Header from "@/app/components/Header";
import './dash.css'

export default async function Dashboard() {
   const users = await getUsers();
    return (
        <div className="dashboard">
            <Header />
            <h1>Dashboard</h1>
            <div className="container">
                {users?.map((user, index) =>
                    <div key={index} className="card">
                        <div className="cardzinho">
                            <img src="../exemplo.png"/>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};