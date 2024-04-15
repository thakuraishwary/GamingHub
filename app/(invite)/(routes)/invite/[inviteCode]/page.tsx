import JoinServerModal from "@/components/modals/join-server-modal";
import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { notFound, redirect } from "next/navigation";

interface InvitePageParams {
  params: {
    inviteCode: string
  }
}

const InvitePage = async ({ params }: InvitePageParams) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  if (!params.inviteCode) {
    return redirect("/dashboard")
  }

  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: params.inviteCode,
    },
    include: {
      members: true
    }
  });

  if (!existingServer) {
    return notFound();
  }

  const isMember = existingServer.members.find((member) => member.profileId === profile.id);

  if (isMember) {
    return redirect(`/servers/${existingServer.id}`);
  }

  return (
    <JoinServerModal server={existingServer} />
  )
}

export default InvitePage;
