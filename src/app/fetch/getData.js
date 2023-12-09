export default async function getData() {
  const res = await fetch(
    `https://randomuser.me/api?results=9&inc=name,email,phone,id,picture&nat=us,gb&seed=53db8ecb16249f78
    `
  );
  console.log(res.data);
  const data = await res.json();
  return data.results;
}
