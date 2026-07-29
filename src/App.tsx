import type { ReactElement } from "react";
import { demoPage } from "./data/demoPage";
import BasePage from "./components/BasePage/BasePage";

export default function App(): ReactElement {
  return (
    <>
        <BasePage {...demoPage} />
    </>
  );
}