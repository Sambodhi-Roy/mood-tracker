import Dashboard from "@/components/Dashboard";
import Loading from "@/components/Loading";
import Login from "@/components/Login";
import Main from "@/components/Main";
import React from "react";

export const metadata = {
  title: "Reflectly ⋅ Dashboard",
};

export default function page() {
  return (
    <Main>
      <Dashboard />
    </Main>
  );
}
