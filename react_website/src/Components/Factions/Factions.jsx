import FactionsData from "./FactionsData";
import SortButton from "./SortButton";
import {createContext, useContext, useEffect, useState} from "react";
import AddModal from "../Modals/AddModal";
import {apiHandler} from "../../storage/api_storage_handler";

const FactionsContext = createContext(undefined);
export default function Factions() {

    const apiService = new apiHandler("titanfallgames.duckdns.org:3003");
    const [data, setData] = useState([]);
    // init table
    useEffect(() => {
        updateData().then(r => console.log("Data initialized"));
    }, []);

    // sorting
    const [sortCol, setSortCol] = useState("faction_name");
    const [sortDir, setSortDir] = useState("down");

    async function updateData() {
        apiService.list()
            .then(retData => {
                setData(retData);
            });
        await handleSort(sortCol, sortDir);
    };

    const handleAdd = async (newRow) => {
        await apiService.create(newRow);
        await updateData();
    }

    const handleDelete = async (id) => {
        await apiService.delete(id);
        await updateData();
    }

    const handleUpdate = async (newData) => {
        await apiService.update(newData);
        await updateData();
    }

    const handleSort = async (col, direction) => {
        setSortCol(col);
        setSortDir(direction);
        let sortedData = [...data];
        if (direction === "up") {
            sortedData.sort((a, b) => (a[col].toLowerCase() > b[col].toLowerCase()) ? 1 : -1);
        } else {
            sortedData.sort((a, b) => (a[col].toLowerCase() < b[col].toLowerCase()) ? 1 : -1);
        }
        setData(sortedData);
    }

    const handleSearch = async (searchTerm) => {
        let tableData = await apiService.list();
        let filteredData = tableData.filter((obj) =>
            Object.values(obj).some(
                (value) =>
                    typeof value === 'string' &&
                    value.toLowerCase().includes(searchTerm.toLowerCase())
            ));
        setData(filteredData);
    }

    return (
        <div className="container rounded section">
            <FactionsContext.Provider value={{data, handleAdd, handleDelete, handleUpdate, handleSort}}>
                <div className="row" style={{paddingTop: 10}}>
                    <div className="col-sm-6">
                        <h2>Factions</h2>
                    </div>
                </div>
                <div className="row" style={{paddingTop: 10}}>
                    <div className={"col-md-6"}>
                        <AddModal/>
                    </div>
                    <div className={"col-md-6"}>
                        <div className="input-group mb-3">
                            <button
                                className="btn btn-secondary"
                                type="button"
                                id="clearSearchButton"
                                onClick={() => {
                                    document.getElementById("searchBar").value = "";
                                    updateData();
                                }}
                            >
                                Clear
                            </button>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                id="searchBar"
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <table
                        id="titanfallTable"
                        className="table table-hover table-dark table-responsive"
                    >
                        <thead>
                        <tr>
                            <th>
                                Faction Name
                                <SortButton col={"faction_name"} initDirection={"up"}/>
                            </th>
                            <th>
                                Faction Leader
                                <SortButton col={"leader"} initDirection={"up"}/>
                            </th>
                            <th>
                                Faction Members
                                <SortButton col={"members"} initDirection={"up"}/>
                            </th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <FactionsData/>
                    </table>
                </div>
            </FactionsContext.Provider>
        </div>
    )
        ;
}

export function useFactionsContext() {
    return useContext(FactionsContext);
}