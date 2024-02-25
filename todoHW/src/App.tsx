import { useState } from "react"
import { Button } from "./components/Button/Button"
import { Input } from "./components/Input/Input"
import { Tabs } from "./components/Tabs/Tabs"

export const App = () => {
  const TABS = ['active', 'completed']
  const [tabId, setTabId] = useState<string>('active')

  return (
    <div className="container">
      <div className="input__container">
        <Input />
        <Button />
      </div>
      <div className="">
        <Tabs setTabId={setTabId} tabs={TABS} currentTabs={tabId} />
        <div>
          {tabId}
        </div>
      </div>
    </div>
  )
}