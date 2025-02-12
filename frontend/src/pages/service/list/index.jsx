import React from "react";
import { useNavigate } from "react-router-dom";
import { getServices, deleteService } from "../../../controls/service";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ServiceList() {
    const [services, setServices] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [itemsPerPage] = React.useState(8);
    const navigate = useNavigate();

    React.useEffect(() => {
        async function fetchServices() {
            await getServices().then((response) => {
                if (response) {
                    setServices(response);
                } else {
                    setServices([]);
                }
            });
        }

        fetchServices();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentServices = services.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        if (currentPage < Math.ceil(services.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleDelete = async (id) => {
        await deleteService(id).then((response) => {
            if (response) {
                const newServices = services.filter((service) => service.id !== id);
                setServices(newServices);
            }
        });
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-700 to-blue-500">
            <div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-0 left-2 mt-5 mr-5"
                    onClick={() => navigate(-1)}
                >
                    Voltar
                </button>
            </div>
            <header className="text-white text-3xl font-bold mb-8 mt-5">
                Lista de Serviços
            </header>
            <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg mb-6">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="border px-4 py-2">Nome</th>
                            <th className="border px-4 py-2">Descrição</th>
                            <th className="border px-4 py-2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentServices.map((service) => (
                            <tr key={service.id} className="hover:bg-gray-100">
                                <td className="border px-4 py-2">{service.name || '-----'}</td>
                                <td className="border px-4 py-2">{service.description || '-----'}</td>
                                <td className="border px-4 py-2 flex space-x-2">
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded"
                                        onClick={() => navigate(`/service/edit/${service.id}`)}
                                    >
                                        <FaEdit />
                                    </button>
                                    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDelete(service.id)}>
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                    >
                        Anterior
                    </button>
                    <button
                        onClick={nextPage}
                        disabled={currentPage === Math.ceil(services.length / itemsPerPage)}
                        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                    >
                        Próximo
                    </button>
                </div>
            </div>
        </div>
    );
}