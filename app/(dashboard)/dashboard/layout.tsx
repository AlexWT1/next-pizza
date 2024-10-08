import type { Metadata } from "next";
import { Header } from "@/shared/components/shared/header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="min-h-screen">{children}</main>;
}
