import { auth } from "~/server/auth";
import { redirect } from "next/navigation";
import DashboardContent from "~/app/_components/DashboardContent"; // split to client component

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return <DashboardContent />;
}
