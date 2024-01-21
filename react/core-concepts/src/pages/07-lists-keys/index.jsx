export default function ListKeysPage() {
  const list = ["item 1", "item 2", "item 3"];

  return (
    <div>
      {list.map((item, index) => {
        return <div key={`${index}-${item}`}>{item}</div>;
      })}
    </div>
  );
}
