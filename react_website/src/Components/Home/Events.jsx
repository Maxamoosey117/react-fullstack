import {Row} from "react-bootstrap";

function Events() {
    return (
        <div className="container section rounded">
            <Row>
                <div className="col-md-8">
                    <p>Check out our upcoming events to see if you're available!</p>
                </div>
                <div className="col-md-4">
                    <button
                        className="btn btn-dark border"
                        type="button"
                        onClick={() => {
                            let currDisplay = document.getElementById("event-content");
                            if (currDisplay.style.display === "none") {
                                currDisplay.style.display = "block";
                            } else {
                                currDisplay.style.display = "none";
                            }
                        }}
                    >
                        Events
                    </button>
                </div>
            </Row>
            <div id="event-content" style={{display: "none"}}>
                <h2>Upcoming Events:</h2>
                <table className="table table-hover table-dark table-striped">
                    <thead>
                    <tr>
                        <th>Game Mode</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Pilots v. Pilots</td>
                        <td>Feb 12</td>
                        <td>6:00pm</td>
                    </tr>
                    <tr>
                        <td>Attrition</td>
                        <td>Feb 16</td>
                        <td>5:00pm</td>
                    </tr>
                    <tr>
                        <td>Frontier Defense</td>
                        <td>Feb 18</td>
                        <td>7:00pm</td>
                    </tr>
                    <tr>
                        <td>Attrition</td>
                        <td>Feb 20</td>
                        <td>6:00pm</td>
                    </tr>
                    <tr>
                        <td>Frontier Defense</td>
                        <td>Feb 22</td>
                        <td>8:00pm</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Events;