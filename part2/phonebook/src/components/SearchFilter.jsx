const SearchFilter = ({filter, onChangeFilter}) => {
    return (
        <>
            filter shown with: <input value={filter} onChange={onChangeFilter}/>
        </>
    )
}

export default SearchFilter