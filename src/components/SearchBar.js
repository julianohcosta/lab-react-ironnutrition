import { Divider } from 'antd';
import Input from 'antd/es/input/Input';


const SearchBar = (props) => {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={props.search} type="text" onChange={(e) => props.setSearch(e.target.value)} />
    </>
  );
};

export default SearchBar;