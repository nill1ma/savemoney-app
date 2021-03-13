import { Form, Formik } from 'formik'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { save } from '../../../../commons/firebase'
import { useAuth } from '../../../../contexts/auth'
import { MoneyDeposit } from '../../../../models/MoneyDeposit'
import { Button } from '../../shared/Button'
import FormFields from '../../shared/FormFields'
import { ButtonsAreaContainer, MoneyDepositFormArea, FieldArea } from './styles'


export default function CreateMoneyDeposit() {
    const { user } = useAuth()

    const moneyDepositInitialValues: MoneyDeposit = {
        origin: '',
        grossAmount: 0,
        tax: 0,
        reference: '',
    }
    const form = [
        { name: 'origin', placeholder: 'Origin', width: '100%', type: 'text' },
        { name: 'grossAmount', placeholder: 'Gross Amount', width: '100%', type: 'nuber' },
        { name: 'tax', placeholder: 'Tax', width: '45%', type: 'number' },
        { name: 'reference', placeholder: 'Reference', width: '45%', type: 'string' },
    ]
    const saveMoneyDeposit = async (values: MoneyDeposit, actions: any) => {
        await save('money-deposit', values, user!.uid)
    }

    const redirect = () => {
        return <Redirect to={'/list-money-deposit'}/>
    }
    return (
        <>
            <Formik
                initialValues={moneyDepositInitialValues}
                onSubmit={saveMoneyDeposit}>
                <Form>
                    <MoneyDepositFormArea>
                        {form.map(f => {
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
                            <Link to={'/list-money-deposit'}>SEE LIST</Link>
                        </ButtonsAreaContainer>
                    </MoneyDepositFormArea>
                </Form>
            </Formik>
        </>
    )
}