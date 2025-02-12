import React from "react";
import { getServiceById, updateService } from "../../../controls/service";
import { useNavigate } from "react-router-dom";


export default function EditService({id}) {

    const [service, setService] = React.useState(null);
    const navigate = useNavigate();


    React.useEffect(() => {
        getServiceById(id).then((data) => {
            console.log(data);
            if (data.status === 200) {
                setService(data.data);
            } else {
                navigate("/service/list");
            }
        }).catch((error) => {
            navigate("/service/list");
        });
    }, [id]);

    return (
        <div>
            <h1>Edit Service</h1>
        </div>
    );
}