//another approach follow rules of react documentation
//lists-01 ex
const Items = (props) => {
  return <li>{props.value}</li>;
};

const Colors = (props) => {
  const items = [
    {id: 1, name: 'red'},
    {id: 2, name: 'green'},
    {id: 3, name: 'blue'},
    {id: 4, name: 'yellow'}
  ]
  const list = items.map((item) => 
  <Items key={item.id} value={item.name} />);
  return (
    <>
      <div>
        <p className="text-xl font-bold pt-4 my-4 border-t-2">Lists</p>
        <ul>{list}</ul>
      </div>
    </>
  );
};

export default Colors;
