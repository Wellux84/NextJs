export default async function Profile() {
  const res = await fetch('http://localhost:3000/api/profile', { cache: 'no-store' });  // Always fetch fresh data
  const data = await res.json();
  console.log('Rendering profile on server')

  return <div>Welcome, {data.name}! Your age is {data.age}.</div>;
}