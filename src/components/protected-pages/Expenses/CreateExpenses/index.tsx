import { Form, Formik } from 'formik'
import { useEffect, useLayoutEffect } from 'react'
import { useAuth } from '../../../../contexts/auth'
import { Expenses } from '../../../../models/expenses'
import { firebase } from '../../../../services/firebase_config'
import { Button } from '../../shared/Button'
import FormFields from '../../shared/FormFields'
import { ButtonsAreaContainer, ExpensesFormArea, FieldArea } from './styles'

const db = firebase.database()
export default function CreateExpenses() {

    const {user} = useAuth()

    const form = [
        { name: 'name', placeholder: 'Name', width: '100%', type: 'text' },
        { name: 'cathegory', placeholder: 'Cathegory', width: '100%', type: 'text' },
        { name: 'dueDate', placeholder: 'Due date', width: '45%', type: 'date' },
        { name: 'payDay', placeholder: 'Pay Day', width: '45%', type: 'date' },
        { name: 'billAmount', placeholder: 'Bill amount', width: '45%', type: 'number' },
        { name: 'amountPaid', placeholder: 'Amount Paid', width: '45%', type: 'number' }
    ]
    useEffect(()=>{
        console.log(user!.displayName)
    },[])
    const expenseInitialValues: Expenses = {
        name: '',
        cathegory: '',
        dueDate: new Date(),
        payDay: new Date(),
        billAmount: 0,
        amountPaid: 0,
    }

    const saveExpense = (values: Expenses, actions:any) => {

        const expensesRef = db.ref('expenses')
        const newExpensesRef = expensesRef.push()
        newExpensesRef.set({...values, userId:user!.uid})
        console.log('Clicou', values)
    }
    return (
        <>
            <Formik
                initialValues={expenseInitialValues}
                onSubmit={saveExpense}>
                <Form>
                    <ExpensesFormArea>
                        {form.map((f) => {
                            return (
                                <FieldArea key={f.name} margin={'1.5rem 0 0 5%'} width={f.width}>
                                    <FormFields
                                        key={f.name}
                                        label={f.placeholder}
                                        name={f.name}
                                        type={f.type}
                                    />
                                </FieldArea>
                            )
                        })}
                        <ButtonsAreaContainer>
                            <Button buttonType='submit' height={'3rem'} width={'10.813rem'}>SAVE</Button>
                            <Button buttonType='button' height={'3rem'} width={'10.813rem'}>SEE LIST</Button>
                        </ButtonsAreaContainer>
                    </ExpensesFormArea>
                </Form>
            </Formik>
        </>
    )
}