import './tabs.css'

interface TabsProps {
    setTabId: (id: string) => void
    tabs: string[]
    currentTabs: string
}

export const Tabs = ({ setTabId, tabs, currentTabs }: TabsProps) => {

    return (
        <div className="tabs">
            {
                tabs.map((el) => (
                    <div className={`tabs__item ${currentTabs === el ? 'active' : ''}`} onClick={() => setTabId(el)} key={el}>
                        {el}
                    </div>
                ))
            }
        </div>
    )
}