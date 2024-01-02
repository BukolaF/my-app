const clothes = [
    { title: "Tops", isAvailable: true, id: 1 },
    { title: "Dresses", isAvailable: false, id: 2 },
    { title: "Jeans", isAvailable: false, id: 3 },
    { title: "Skirts", isAvailable: true, id: 4 },
  ];
  
  export default function ShoppingLists() {
    const myList = clothes.map((cloth) => (
      <li
        className="Lists"
        key={cloth.id}
        style={{ color: cloth.isAvailable ? "darkblue" : "darkmagenta" }}
      >
        {cloth.title}
      </li>
    ));
  
    return (
      <ul style={{ background: "darkgrey", margin: "0 70px;" }}>{myList}</ul>
    );
  }