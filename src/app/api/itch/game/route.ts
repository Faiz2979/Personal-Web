export async function GET() {
  const res = await fetch(
    `https://itch.io/api/1/${process.env.ITCHIO_KEY}/my-games`
  );

  if (!res.ok) {
    return Response.json({ error: "Failed to fetch games" }, { status: 500 });
  }

  const data = await res.json();

  return Response.json(data);
}