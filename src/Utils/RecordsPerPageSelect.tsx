export default function RecordsPerPageSelect(props: recordsPerPageSelectProps){
    return(
        <div className="mb-3" style={{width: '350px'}}>
        <label>No. of records to be shown: </label>
        <select className="form-select"
            defaultValue={3}
            onChange={e => { 
            props.onChange(parseInt(e.target.value, 10))
        }}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
    </div>
    )
}

interface recordsPerPageSelectProps{
    onChange(recordPerPage: number): void // when the recordPerPage changes, 
                                            //we are going to call this function
}