import AccessWithLimit from "./AccessWithLimit";
import AutoCounter from "./AutoCounter";
import CheckboxSummary from "./CheckboxSummary";
import DocumentTitleChanger from "./DocumentTitleChanger";
import DynamicColor from "./DynamicColor";
import HoverFont from "./HoverFont";
import LanguageSwitcher from "./LanguageSwitcher";

export default function IndexUseEffect() {
  return (
    <>
      <AccessWithLimit />
      <AutoCounter />
      <CheckboxSummary />
      <DocumentTitleChanger />
      <DynamicColor />
      <HoverFont />
      <LanguageSwitcher />
    </>
  );
}