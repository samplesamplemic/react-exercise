import { useMemo } from "react";

const FilteredList = () => {
  const list = [
    { name: "mic", id: 1, age: 25 },
    { name: "alex", id: 2, age: 17 },
  ];
  const filtered = () => {
    const list_fil = list
      .filter((el) => el.age > 18)
      .map((el) => <p>{el.name}</p>);
    return list_fil;
  };

  const memoList = useMemo(() => filtered(), [list]);

  return (

    <>
    <h2 className="text-lg font-semibold pt-6 pb-2 border-t-2 ">Filter User (useMemo)</h2>
    {memoList}
    </>
  ) 
};

export default FilteredList;
