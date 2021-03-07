import { useState } from 'react'
import { Expenses } from '../../../../models/expenses'
import { Button } from '../../shared/Button'
import FormFields from '../../shared/FormFields'
import { ButtonsAreaContainer, ExpensesFormArea, FieldArea } from './styles'
export default function CreateExpenses() {

    const [expenses, setExpenses] = useState<Expenses>({
        name: '',
        cathegory: '',
        dueDate: new Date(),
        payDay: new Date(),
        billAmount: 0,
        amountPaid: 0,
    })
    const form = [
        { name: 'name', placeholder: 'Name', width: '100%', type: 'text' },
        { name: 'cathegory', placeholder: 'Cathegory', width: '100%', type: 'text' },
        { name: 'dueDate', placeholder: 'Due date', width: '45%', type: 'date' },
        { name: 'payDay', placeholder: 'Pay Day', width: '45%', type: 'date' },
        { name: 'billAmount', placeholder: 'Bill amount', width: '45%', type: 'number' },
        { name: 'amountPaid', placeholder: 'Amount Paid', width: '45%', type: 'number' }
    ]
    const handleExpensesValues = (e: any) => {
        const { name, value } = e.target
        setExpenses(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(expenses)
    }

    const sendExpense = () => {
        console.log(expenses)
    }
    return (
        <>
            <ExpensesFormArea>
                {form.map(f => {
                    return (
                        <FieldArea margin={'1.5rem 0 0 5%'} width={f.width}>
                            <FormFields
                                key={Math.random()}
                                label={f.placeholder}
                                name={f.name}
                                type={f.type}
                                onChangeAction={(e: any) => handleExpensesValues(e)}
                            />
                        </FieldArea>
                    )
                })}
                <ButtonsAreaContainer>
                    <Button onClickAction={() => sendExpense()} height={'3rem'} width={'10.813rem'}>SAVE</Button>
                    <Button height={'3rem'} width={'10.813rem'}>SEE LIST</Button>
                </ButtonsAreaContainer>
            </ExpensesFormArea>
        </>
    )
}