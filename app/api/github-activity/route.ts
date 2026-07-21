import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const username = request.nextUrl.searchParams.get("username") || "FacundoZin"
  const res = await fetch(`https://api.github.com/users/${username}/events/public?per_page=100`, {
    headers: { "User-Agent": "portfolio" },
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    return NextResponse.json([], { status: 200 })
  }

  const data = await res.json()
  return NextResponse.json(data)
}
