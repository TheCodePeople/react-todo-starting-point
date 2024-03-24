const ListTask = ({ filterTodo, getToDo }) => {
  return (
    <form action="">
      <select name="" id="" onChange={(e) => filterTodo(e.target.value)}>
        <option value="1">Active</option>
        <option value="2">Completed </option>
        <option value="3">All</option>
      </select>
    </form>
  );
};

export default ListTask;
