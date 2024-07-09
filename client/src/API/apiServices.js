import axios from "axios"

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',
});

export const getToken = async () => {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJrb3Nhcl8iLCJleHAiOjE3MjA1MDYzODF9.zrWBrR3bSS9HArXajyxM0u5fq2ThD81RlG-EendPpUs";
    let token = await localStorage.getItem("token");

    if (!token) {
        return;
    }

    return token;
}

export const create_Project = async (title, description) => {
    try {
        let token = await getToken();

        if (!token) {
            return false;
        }

        let body = {
            title,
            description
        }
        let url = "/Project/CreateProjects"
        let result = await api.post(url, body, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        if (result.status !== 200) {
            return false;
        }

        return result.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function Get_Project() {
    try {
        let token = await getToken();

        if (!token) {
            return false;
        }

        let url = "/Project/GetProjects"
        let result = await api.get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        if (result.status !== 200) {
            return false;
        }

        return result.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}
export async function Get_All_Task_In_Project(Project_id) {
    try {
        let token = await getToken();

        if (!token) {
            return false;
        }

        let body = {
            Project_id,
        }
        let url = "/Project/GetALLTask"
        let result = await api.post(url, body, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        if (result.status !== 200) {
            return false;
        }

        return result.data;

    } catch (error) {
        console.error(error);
        return false;
    }
}
export async function create_User(username, password, email, name) {
    try {
        let body = {
            username,
            password,
            email,
            name
        }
        let url = "/users/CreateUser"
        let result = await api.post(url, body);

        if (result.status !== 200) {
            return false;
        }

        return result.data;


    } catch (error) {
        console.error(error);
        return false;
    }
}
export async function Get_User() {
    try {
        let token = await getToken();

        if (!token) {
            console.log(123);
            return false;
        }
        let url = "/users/GetUser"
        let result = await api.get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        if (result.status !== 200) {
            console.log(result.data);
            return false;
        }

        return result.data;

    } catch (error) {
        console.error(error);
        return false;
    }
}
export async function Get_token(username, password) {
    try {
        let body = {
            username,
            password
        }
        console.log(body);
        let url = "/token"
        let result = await api.post(url, body, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        if (result.status !== 200) {
            return false;
        }

        return result.data.access_token;

    } catch (error) {
        console.error(error);
        return false;
    }
}
export async function Get_Request_Task() {
    try {
        let url = "/Tasks/GetRequest";
        let token = await getToken()

        if (!token) {
            return false;
        }

        let result = await api.get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        if (result.status !== 200) {
            return false;
        }

        return result.data;
    } catch (error) {
        console.error(error);
        return false;
    }

}

export async function Get_Tasks() {
    try {
        let url = "/Tasks/GetTask"
        let token = await getToken()

        if (!token) {
            return false;
        }
        let result = await api.get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        if (result.status !== 200) {
            return false;
        }

        return result.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}
export async function Get_Completed_Task() {
    try {
        let url = "/Tasks/GetCompletedTask"
        let token = await getToken()

        if (!token) {
            return false;
        }
        let result = await api.get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        if (result.status !== 200) {
            return false;
        }

        return result.data;

    } catch (error) {
        console.error(error);
        return false;
    }
}
export async function Accept_Task(task_id, project_id) {
    try {
        let body = {
            task_id,
            project_id
        }
        let url = "/Tasks/AcceptTask"
        let token = await getToken()

        if (!token) {
            return false;
        }
        let result = await api.post(url, body, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        if (result.status !== 200) {
            return false;
        }

        return result.data;

    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function create_Task(title, description, user_id, project_id) {
    try {
        let token = await getToken();

        if (!token) {
            return false;
        }

        let body = {
            title,
            description,
            user_id,
            project_id
        }
        let url = "/Tasks/CreateTask"
        let result = await api.post(url, body, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        if (result.status !== 200) {
            return false;
        }

        return result.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}

(async () => {

    // console.log(await Get_token("kosar_", "123"))
    console.log(await Get_Tasks());

})()