import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const username = request.nextUrl.searchParams.get("username") || "FacundoZin"
  const res = await fetch(`https://github-contributions-api.deno.dev/${username}.json`, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    return NextResponse.json({ contributions: [] }, { status: 200 })
  }

  const data = await res.json()
  return NextResponse.json(data)
}
