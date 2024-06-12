import { cookies, headers } from "next/headers";
import Link from "next/link";
import Menu from "../components/dashboard/Menu";
import Content from "../components/dashboard/Content";

const localHost = "http://localhost:3000/";

export default async function Dashboard() {

  return (
    <section className="flex-1 w-screen flex justify-start items-center ">
      <Menu />
      <Content />
    </section>
  )
}