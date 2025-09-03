import { signOut } from "@/auth"

export default function SignOutButton() {
  return (
    <div>
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  )
}