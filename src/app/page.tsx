import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import HomePage from "./HomePage/page";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return <HydrateClient children={<HomePage />}></HydrateClient>;
}
