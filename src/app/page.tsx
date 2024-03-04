import Image from "next/image";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Widget from "@/components/Widget";

export default function Home() {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Header />
      <main className="flex ">
        <Sidebar />
        <Feed />
        <Widget />
      </main>
    </div>
  );
}
