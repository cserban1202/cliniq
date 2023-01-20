import './MultipleSelector.css';
export default function MultipleSelector(props: multipleSelectorProps){

    function select(item: multipleSelectorModel){
        const selected = [...props.selected, item]; //concatenare the parameters with the selected array with the selected items
        const nonSelected = props.nonSelected.filter(value => value !== item); //filter the nonSelected array with the items that have the same key as the item
        props.onChange(selected, nonSelected);

    }
    function deselect(item: multipleSelectorModel){
        const nonSelected = [...props.nonSelected, item]; //concatenare the parameters with the selected array with the selected items
        const selected = props.selected.filter(value => value !== item); 
        props.onChange(selected, nonSelected);
    }

    function selectAll(){
        const selected = [...props.selected, ...props.nonSelected]; // concatenating selected with non selected
        const nonSelected: multipleSelectorModel[] = []; //empty array  of type multipleSelectorModel
        props.onChange(selected, nonSelected); // calling the onChange function with the selected and nonSelected arrays as parameters
    }

    function deselectAll() {
        const nonSelected = [...props.nonSelected, ...props.selected];
        const selected: multipleSelectorModel[] = [];
        props.onChange(selected, nonSelected);
    }
    return (
        <div className="mb-3">
            <label>{props.display}</label>
            <div className="multiple-selector">
                    <ul>
                        {props.nonSelected.map(item => 
                            <li key = {item.key} onClick ={() =>select(item)}>{item.value}</li>)}
                    </ul>
                    <div className="multiple-selector-buttons">
                        <button type="button" onClick={selectAll}>{'>>'}</button>
                        <button type="button" onClick={deselectAll}>{'<<'}</button>
                    </div>
                    <ul>
                        {props.selected.map(item => 
                            <li key = {item.key} onClick ={() =>deselect(item)}>{item.value}</li>)}
                    </ul>
        </div>
        </div>
        
    )
}

interface multipleSelectorProps {
    display: string;
    selected: multipleSelectorModel[];
    nonSelected: multipleSelectorModel[];
    onChange(selected: multipleSelectorModel[],
        nonSelected: multipleSelectorModel[]): void; //function that takes 2 parameters of type multipleSelectorModel[] and returns void
}

export interface multipleSelectorModel {
    key: number;
    value: string; 
}
