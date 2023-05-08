import FactionsRow from "./FactionsRow";
import {useFactionsContext} from "./Factions";

export default function FactionsData() {

    const {data} = useFactionsContext();

    let rows = [];
    for (let i = 0; i < data.length; i++) {
        rows.push(<FactionsRow key={data[i].id} rowData={data[i]}/>)
    }

    return (
        <tbody>
        {rows}
        </tbody>
    );
}

