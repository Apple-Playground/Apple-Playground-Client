import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { auth } from "@/auth"

export default async function UserAvatar() {
  const session = await auth()
  if (!session?.user?.image) return null

  return (
    <Avatar>
      <AvatarImage
        className="rounded-full w-8 h-8"
        src={session?.user?.image}
        alt="User Avatar"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}