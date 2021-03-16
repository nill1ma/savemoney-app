import { Form, Formik } from 'formik'
import { save } from '../../../../commons/firebase'
import { useAuth } from '../../../../contexts/auth'
import { Expenses } from '../../../../models/Expenses'
import { Forms } from '../../../../models/Forms'
import { RoutesEnum } from '../../../../models/RoutesEnum'
import { ITabs } from '../../../../models/Tabs'
import { Button } from '../../shared/Button'
import FormFields from '../../shared/FormFields'
import Tabs from '../../shared/Tabs/inedx'
import { ButtonsAreaContainer, ExpensesContainer, ExpensesFormArea, FieldArea } from './styles'

export default function CreateExpenses() {
    const { user } = useAuth()

    const expenseInitialValues: Expenses = {
        name: '',
        cathegory: '',
        dueDate: '',
        payDay: '',
        billAmount: 0,
        amountPaid: 0,
    }
    const form: Forms[] = [
        { name: 'name', placeholder: 'Name', width: '100%', type: 'text' },
        { name: 'cathegory', placeholder: 'Cathegory', width: '100%', type: 'text' },
        { name: 'dueDate', placeholder: 'Due date', width: '45%', type: 'date' },
        { name: 'payDay', placeholder: 'Pay Day', width: '45%', type: 'date' },
        { name: 'billAmount', placeholder: 'Bill amount', width: '45%', type: 'number' },
        { name: 'amountPaid', placeholder: 'Amount Paid', width: '45%', type: 'number' }
    ]

    const tabs:ITabs[] = [
        { title: 'Create', link: RoutesEnum.CREATE_EXPENSES, active: true },
        { title: 'List', link: RoutesEnum.LIST_EXPENSES, active: false }
    ]
    
    const saveExpense = async (values: Expenses, actions: any) => {
        await save('expenses', values, user!.uid)
    }
    return (
        <ExpensesContainer>
            <Tabs tabs={tabs} />
            <Formik
                initialValues={expenseInitialValues}
                onSubmit={saveExpense}>
                <Form>
                    <ExpensesFormArea>
                        {form.map((f: Forms) => (
                            <FieldArea key={f.name} margin={'1.5rem 0 0 5%'} width={f.width}>
                                <FormFields
                                    key={f.placeholder}
                                    label={f.placeholder}
                                    name={f.name}
                                    type={f.type}
                                />
                            </FieldArea>
                        )
                        )}
                        <ButtonsAreaContainer>
                            <Button buttonType='submit' height={'3rem'} width={'10.813rem'}>SAVE</Button>
                        </ButtonsAreaContainer>
                    </ExpensesFormArea>
                </Form>
            </Formik>
        </ExpensesContainer>
    )
}