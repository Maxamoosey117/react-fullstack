import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {useFactionsContext} from "../Factions/Factions";

export default function EditModal({rowData}) {
    const {handleUpdate} = useFactionsContext();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        let newName = document.getElementById("factionName").value;
        let newLeader = document.getElementById("factionLeader").value;
        let newMembers = document.getElementById("factionMembers").value;

        let newData = {
            id: rowData.id,
            faction_name: newName,
            leader: newLeader,
            members: newMembers
        }
        handleUpdate(newData);
        setShow(false);
    }
    return (
        <>
            <Button
                type="button"
                className="btn bi-pencil-square btn-primary edit-row"
                onClick={() => setShow(true)}
            />

            <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit {rowData.faction_name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Faction Name</Form.Label>
                            <Form.Control defaultValue={rowData.faction_name} id="factionName" autoFocus/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Faction Leader</Form.Label>
                            <Form.Control defaultValue={rowData.leader} id="factionLeader"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Faction Members</Form.Label>
                            <Form.Control as="textarea" rows={3} defaultValue={rowData.members} id="factionMembers"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}