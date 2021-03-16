import { useState } from "react";
import { MoneyDeposit } from "../../../../models/MoneyDeposit";
import { RoutesEnum } from "../../../../models/RoutesEnum";
import { ITabs } from "../../../../models/Tabs";
import Grid from "../../shared/Grid";
import Tabs from "../../shared/Tabs/inedx";
import { MoneyDepositGridContainer, MoneyDepositListContainer } from "./styles";

export default function MoneyDepositList() {
    const tabs: ITabs[] = [
        { title: 'Create', link: RoutesEnum.MONEY_DEPOSIT, active: false },
        { title: 'List', link: RoutesEnum.LIST_MONEY_DEPOSIT, active: true }
    ]
     
    const [data] = useState<MoneyDeposit[]>([
        { origin: 'TW', grossAmount: 10768.61, tax: 2000.00, reference: '03/2021', country: 'Brazil' },
        { origin: 'TW', grossAmount: 11768.61, tax: 2000.00, reference: '03/2022', country: 'Chile' },
        { origin: 'TW', grossAmount: 12768.61, tax: 2000.00, reference: '03/2023', country: 'Noth America' },
        { origin: 'TW', grossAmount: 13768.61, tax: 2000.00, reference: '03/2023', country: 'Noth America' },
        { origin: 'TW', grossAmount: 14768.61, tax: 2000.00, reference: '03/2025', country: 'Noth America' }
    ])
    
    return (
        <MoneyDepositListContainer>
            <Tabs tabs={tabs} />
            <MoneyDepositGridContainer>
                <Grid dataProps={data} />
            </MoneyDepositGridContainer>
        </MoneyDepositListContainer>
    )
}