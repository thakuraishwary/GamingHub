import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params } : { params: {
    serverId: string
  }}
) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorised", { status: 401 })
    }

    if (!params.serverId) {
      return new NextResponse("Server ID Missing", { status: 400 })
    }

    const server = await db.server.update({
      where: {
        id: params.serverId
      },
      data: {
        members: {
          create: [
            {
              profileId: profile.id
            }
          ]
        }
      },
    })

    return NextResponse.json(server);
    
  } catch (error) {
    console.log("[SERVER_JOIN]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
