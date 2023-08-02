import { redirect } from "next/navigation";

export default function DefaultRedirect() {
  redirect("/frontpage");
}
