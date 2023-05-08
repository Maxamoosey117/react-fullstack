import EditModal from "../Modals/EditModal";
import DeleteModal from "../Modals/DeleteModal";

export default function FactionsRow({rowData}) {
    return (
        <tr id={rowData.id}>
            <td>{rowData.faction_name}</td>
            <td>{rowData.leader}</td>
            <td>{rowData.members}</td>
            <td>
                <EditModal rowData={rowData}/>
                <DeleteModal id={rowData.id} name={rowData.faction_name}/>
            </td>
        </tr>
    );
}