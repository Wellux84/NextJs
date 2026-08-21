export const revalidate = 10;

export default async function Page() {
  const postsRes = await fetch('http://localhost:3000/api/posts', {
    next: { revalidate: 10 }
  });

  const posts = await postsRes.json();

  const profileRes = await fetch('http://localhost:3000/api/profile', {
    cache: 'no-store'
  });

  const profile = await profileRes.json();

  const post = posts[Math.floor(Math.random() * posts.length)];
  
  return (
    <div>
      <h1 style={{ color: 'blue', fontSize: '24px' }}>
        Posts
      </h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
      <h2>Random Post</h2>
      <p>{post.title}</p>
      <h2>Profile</h2>
      <p>
        Welcome, {profile.name}! Your age is {profile.age}.
      </p>
    </div>
  );
}

