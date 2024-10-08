export async function POST(req: Request) {
  const body = await req.json();

  return new Response(
    JSON.stringify({
      message: "Poll saved successfully",
      data: body,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
