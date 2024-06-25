const countries = [
  {
    id: 1,
    name: "India",
  },
  {
    id: 2,
    name: "America",
  },
  {
    id: 3,
    name: "Canada",
  },
  {
    id: 4,
    name: "Australia",
  },
];

export default function ListCountry() {
  function listClicked(id, name) {
    console.log("list clicked", id, name);
  }
  const listItems = countries.map((item) => (
    <li key={item.id} onClick={() => listClicked(item.id, item.name)}>
      {item.name === "India" ? item.name + " gg " : item.name}
    </li>
  ));
  return <ul>{listItems}</ul>;
}
