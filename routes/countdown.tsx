/** @jsx h */
import { h } from "preact";
import Countdown from "../islands/Countdown.tsx";

export default function Page() {
  const date = new Date(`${new Date().getFullYear() + 1}-01-01T00:00:00.000+11:00`);
  return (
    <p>
      The big event is happening <Countdown target={date.toISOString()} />.
    </p>
  );
}