import React from "react";
import { login } from "../../controls/login";
import img from '../../assets/img.png';
import { useNavigate } from 'react-router-dom';
import Messages from "../../components/messages";
import { handleErrors } from "../../controls/functions";

export default function Login() {
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();
    const [errorUsername, setErrorUsername] = React.useState(false);
    const [errorPassword, setErrorPassword] = React.useState(false);
    const [message, setMessage] = React.useState({});

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === "username" && errorUsername) {
            setErrorUsername(false);
        }
        if (name === "password" && errorPassword) {
            setErrorPassword(false);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (!formData.username) {
            setErrorUsername(true);
            return;
        }
        if (!formData.password) {
            setErrorPassword(true);
            return;
        }

        try {
            const response = await login(formData);

            if (response.status === 200) {
                setMessage({
                    type: "success",
                    message: "Login efetuado com sucesso!",
                });
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            }
            else {
                setMessage({
                    type: "error",
                    message: handleErrors(response.response.data),
                });
            }
        } catch (error) {
            console.log(error);
            setMessage({
                type: "error",
                message: handleErrors(error.response.data),
            });
        }
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center">
            <img src={img} className="absolute inset-0 w-full h-full object-cover" alt="img" />
            <div>
                <button className="absolute top-4 left-4 bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => navigate('/')}>
                    Voltar
                </button>
            </div>
            <div className="relative bg-white p-8 rounded-md w-full max-w-md mx-4 sm:mx-auto">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Usuario"
                            className={`mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none ${errorUsername ? 'border-2 border-red-500' : ''}`}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="current-password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Senha"
                            className={`mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none ${errorPassword ? 'border-2 border-red-500' : ''}`}
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-2 w-full bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                </form>
            </div>
            {message.message && <Messages type={message.type} message={message.message} setMessage={setMessage} />}

        </div>
    );
}