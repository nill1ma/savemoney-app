import { useState } from "react"
import { Expenses } from "../../../../models/Expenses"
import { RoutesEnum } from "../../../../models/RoutesEnum"
import { ITabs } from "../../../../models/Tabs"
import Grid from "../../shared/Grid"
import Tabs from "../../shared/Tabs/inedx"
import { ExpensesGridContainer, ExpensesListContainer } from "./styles"

export default function ExpensesList() {

    const tabs: ITabs[] = [
        { title: 'Create', link: RoutesEnum.CREATE_EXPENSES, active: false },
        { title: 'List', link: RoutesEnum.LIST_EXPENSES, active: true }
    ]

    const [data] = useState<Expenses[]>([
        { name: 'English', cathegory: 'Learn to fly', dueDate: '01-11-2021', payDay: '01-11-2021', billAmount: 250, amountPaid: 250 },
        { name: 'English', cathegory: 'Learn to fly', dueDate: '01-11-2021', payDay: '01-11-2021', billAmount: 250, amountPaid: 250 },
        { name: 'English', cathegory: 'Learn to fly', dueDate: '01-11-2021', payDay: '01-11-2021', billAmount: 250, amountPaid: 250 },
        { name: 'English', cathegory: 'Learn to fly', dueDate: '01-11-2021', payDay: '01-11-2021', billAmount: 250, amountPaid: 250 },
        { name: 'English', cathegory: 'Learn to fly', dueDate: '01-11-2021', payDay: '01-11-2021', billAmount: 250, amountPaid: 250 }
    ])

    return (
       
        <ExpensesListContainer>
            <Tabs tabs={tabs} />
            <ExpensesGridContainer>
                <Grid dataProps={data} />
            </ExpensesGridContainer>
        </ExpensesListContainer>
    )
}