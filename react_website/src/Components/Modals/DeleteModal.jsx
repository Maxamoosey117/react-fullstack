import {useFactionsContext} from "../Factions/Factions";
import {Button, Modal} from "react-bootstrap";
import {useState} from "react";

export default function DeleteModal({id, name}) {

    const {handleDelete} = useFactionsContext();
    const [show, setShow] = useState(false);

    const handleDeleteClick = () => {
        handleDelete(id);
        setShow(false);
    }

    return (
        <>
            <Button
                type="button"
                className="btn bi-trash btn-danger"
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
                        Delete {name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete {name}?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
                    <Button variant="danger" onClick={handleDeleteClick}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}