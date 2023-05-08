import {useState} from "react";
import {useFactionsContext} from "./Factions";
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function SortButton({col, initDirection}) {
    const {handleSort} = useFactionsContext();
    const [sortDirection, setSortDirection] = useState(initDirection);

    const handleButtonSort = () => {
        if (sortDirection === "up") {
            setSortDirection("down");
        } else {
            setSortDirection("up");
        }

        handleSort(col, sortDirection);
    }

    return (
        <button
            type="button"
            className={`btn bi-arrow-${sortDirection} btn-secondary sort-button`}
            id={`${col}-button`}
            onClick={handleButtonSort}
        >
        </button>
    );
}