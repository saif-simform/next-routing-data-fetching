// export const dynamic = "force-dynamic"; // defaults to auto
// export const fetchCache = 'auto'
// export const revalidate = 10

export async function GET() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5",
    // {
    //   cache: "force-cache",
    // },
    // {
    //   next: { revalidate: 10 }, // Revalidate every 10 seconds
    // }
  );
  const data = await res.json();

  return Response.json({ data });
}
