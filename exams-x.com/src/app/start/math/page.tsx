"use client";
import useSorting from "@/hooks/useSorting";

export default function Start() {
  const {Form, Play} = useSorting();
  return (
    <>
      {Form}
      {Play}
    </>
  );
}