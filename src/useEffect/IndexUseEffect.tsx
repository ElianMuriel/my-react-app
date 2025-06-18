import Clock from "./Clock";
import DynamicTitle from "./DynamicTitle";
import FetchUser from "./FetchUser";
import LogEffect from "./LogEffect";
import PersistCounter from "./PersistCounter";
import SafeFetch from "./SafeFetch";
import ScrollLogger from "./ScrollLogger";

export default function IndexUseStates() {
  return (
    <>
      <Clock />
      <DynamicTitle />
      <FetchUser />
      <LogEffect />
      <PersistCounter />
      <SafeFetch />
      <ScrollLogger />
    </>
  );
}