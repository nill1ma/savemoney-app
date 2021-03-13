import { useState } from "react"
import { Expenses } from "../../../../models/Expenses"

export default function ExpensesList() {
    const [expenses, setExpenses] = useState<Expenses[]>([{
        name: '',
        cathegory: '',
        dueDate: new Date(),
        payDay: new Date(),
        billAmount: 0,
        amountPaid: 0
    }])
    return (
        <>
            <div></div>
        </>
    )
}