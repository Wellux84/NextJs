export const revalidate = 10;

export default async function Posts() {
  const res = await fetch('http://localhost:3000/api/posts', { next: { revalidate: 10 } });  // Always fetch fresh data
  const data = await res.json();

  const post = data[Math.floor(Math.random() * data.length)];
  return (
    <div>
      <h1 style={{ color: 'blue', fontSize: '24px' }}>Posts</h1>
      <ul>
        {data.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
        <h2>Random Post</h2>
        <p>{post.title}</p>
    </div>
  );
}