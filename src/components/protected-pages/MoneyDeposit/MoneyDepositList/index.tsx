import { useCallback, useEffect, useState } from "react";
import { MoneyDeposit } from "../../../../models/MoneyDeposit";
import { RoutesEnum } from "../../../../models/RoutesEnum";
import { ITabs } from "../../../../models/Tabs";
import { get } from '../../../../commons/firebase';
import { MoneyDepositGridContainer, MoneyDepositListContainer } from "./styles";
import Grid from "../../shared/Grid";
import InfoEmpityMessage from "../../shared/InfoEmpityMessage";
import Tabs from "../../shared/Tabs/inedx";

export default function MoneyDepositList() {

    const [dataMonetDeposit, setDataMonetDeposit] = useState<MoneyDeposit[]>([])

    useEffect(() => {
        dataMonetDeposit.length === 0 &&
            setDataMonetDeposit(get<MoneyDeposit>('money-deposit'))
    }, [dataMonetDeposit])

    useEffect(() => {
        console.log(dataMonetDeposit)
    }, [dataMonetDeposit])

    const tabs: ITabs[] = [
        { title: 'Create', link: RoutesEnum.MONEY_DEPOSIT, active: false },
        { title: 'List', link: RoutesEnum.LIST_MONEY_DEPOSIT, active: true }
    ]

    return (
        <MoneyDepositListContainer>
            <Tabs tabs={tabs} />
            <MoneyDepositGridContainer>
                {dataMonetDeposit && dataMonetDeposit.length > 0 ?
                    <Grid dataProps={dataMonetDeposit} />
                    : <InfoEmpityMessage />
                }
            </MoneyDepositGridContainer>
        </MoneyDepositListContainer>
    )
}