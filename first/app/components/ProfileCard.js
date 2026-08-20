export default function ProfileCard({ name, age, color, height, width }) {
  return (
    <div
    style={{
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: color ? color : 'white',
        height: height ? height : 'auto',
        width: width ? width : 'auto',
      }}
    >
    <div className="text-blue-700 p-10 rounded">
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
    </div>
  );
}