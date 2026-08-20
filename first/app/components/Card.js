export default function Card({ color }) {
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: color ? color : 'white',
        border: '1px solid #ccc',
        borderRadius: '10px',
      }}
    >
      <p>This is a card</p>
    </div>
  );
}