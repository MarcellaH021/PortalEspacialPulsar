const API_KEY = "icagJpGX6YHSN1X6eutMW8UdWdaRinXeKFPCe9c2";

export async function fetchProjects() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`
  );
  const data = await res.json();

  return data.map((item, i) => ({
    id: i,
    title: item.title,
    image: item.url,
    description: item.explanation,
  }));
}