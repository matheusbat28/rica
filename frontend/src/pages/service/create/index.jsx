import React from "react";
import { createService } from '../../../controls/service';
import { useNavigate } from 'react-router-dom';
import Messages from '../../../components/messages';
import { handleErrors } from '../../../controls/functions';

export default function CreateService() {

    const [formData, setFormData] = React.useState({
        img: "",
        name: "",
        description: "",
    });
    const navigate = useNavigate();
    const [message, setMessage] = React.useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('img', formData.img);
        data.append('name', formData.name);
        data.append('description', formData.description);

        console.log(data);
        await createService(data).then((response) => {
            if (response.status === 201) {
                setMessage({
                    type: "success",
                    message: "Serviço criado com sucesso!",
                });
            } else {
                setMessage({
                    type: "error",
                    message: handleErrors(response.response.data),
                });
            }

        }).catch((error) => {
            setMessage({
                type: "error",
                message: handleErrors(error.response.data),
            });
        });
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-700 to-blue-500">
            <div className="absolute top-4 left-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate(-1)}>
                    Voltar
                </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
                <h1 className="text-2xl font-bold text-center mb-6">Criar Serviço</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="file"
                            name="img"
                            id="img"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            onChange={(e) => setFormData({ ...formData, img: e.target.files[0] })}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nome"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            name="description"
                            id="description"
                            placeholder="Descrição"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Criar
                        </button>
                    </div>
                </form>
            </div>
            {message.message && <Messages type={message.type} message={message.message} setMessage={setMessage} />}
        </div>
    );
}