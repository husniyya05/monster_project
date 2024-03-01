
const Search = ({ onChangeHendler,className , placeholder}) => {
    return <>
        <input className={className} onChange={onChangeHendler} type="search" placeholder={placeholder}  />
    </>
}
export default Search