import { ITabs } from "../../../../models/Tabs"
import { TabsContainer, TabsItems } from "./styles"

type TabsProps = {
    tabs: ITabs[]
}

export default function Tabs(props: TabsProps) {
    const { tabs } = props
    return (
        <TabsContainer>
            {tabs.map((tab: ITabs) => {
                return (
                    <TabsItems active={tab.active} to={tab.link}>
                        {tab.title}
                    </TabsItems>
                )
            })}
        </TabsContainer>
    )
}