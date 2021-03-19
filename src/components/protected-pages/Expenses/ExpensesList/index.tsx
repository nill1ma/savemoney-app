import { useEffect, useState } from "react"
import { Expenses } from "../../../../models/Expenses"
import { RoutesEnum } from "../../../../models/RoutesEnum"
import { ITabs } from "../../../../models/Tabs"
import { get } from "../../../../commons/firebase"
import { ExpensesGridContainer, ExpensesListContainer } from "./styles"
import Grid from "../../shared/Grid"
import InfoEmpityMessage from "../../shared/InfoEmpityMessage"
import Tabs from "../../shared/Tabs/inedx"

export default function ExpensesList() {

    const [dataExpenses] = useState<Expenses[]>(get<Expenses>('expenses'))

    useEffect(() => {
        console.log(dataExpenses)
    }, [dataExpenses])

    const tabs: ITabs[] = [
        { title: 'Create', link: RoutesEnum.CREATE_EXPENSES, active: false },
        { title: 'List', link: RoutesEnum.LIST_EXPENSES, active: true }
    ]

    return (

        <ExpensesListContainer>
            <Tabs tabs={tabs} />
            <ExpensesGridContainer>
                {dataExpenses && dataExpenses.length > 0 ?
                    <Grid dataProps={dataExpenses} />
                    : <InfoEmpityMessage />
                }
            </ExpensesGridContainer>
        </ExpensesListContainer>
    )
}