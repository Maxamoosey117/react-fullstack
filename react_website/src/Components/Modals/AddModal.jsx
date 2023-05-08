import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {useFactionsContext} from "../Factions/Factions";

export default function AddModal() {
    const {handleAdd} = useFactionsContext();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        let newName = document.getElementById("factionName").value;
        let newLeader = document.getElementById("factionLeader").value;
        let newMembers = document.getElementById("factionMembers").value;

        let newRow = {
            id: -1,
            faction_name: newName,
            leader: newLeader,
            members: newMembers
        }
        handleAdd(newRow);
        setShow(false);
    }
    return (
        <>
            <Button
                id="addRowBtn"
                className="btn btn-secondary border"
                style={{marginBottom: 15}}
                onClick={() => setShow(true)}
            >
                Add Faction
            </Button>

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
                        Add New Faction
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Faction Name</Form.Label>
                            <Form.Control id="factionName" autoFocus/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Faction Leader</Form.Label>
                            <Form.Control id="factionLeader"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Faction Members</Form.Label>
                            <Form.Control as="textarea" rows={3} id="factionMembers"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}