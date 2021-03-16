import { Form, Formik } from 'formik';
import { save } from '../../../../commons/firebase';
import { useAuth } from '../../../../contexts/auth';
import { Forms } from '../../../../models/Forms';
import { MoneyDeposit } from '../../../../models/MoneyDeposit';
import { RoutesEnum } from "../../../../models/RoutesEnum";
import { ITabs } from "../../../../models/Tabs";
import { Button } from '../../shared/Button';
import FormFields from '../../shared/FormFields';
import Tabs from "../../shared/Tabs/inedx";
import { ButtonsAreaContainer, FieldArea, MoneyDepositContainer, MoneyDepositFormArea } from './styles';

export default function CreateMoneyDeposit() {
    const { user } = useAuth()

    const moneyDepositInitialValues: MoneyDeposit = {
        origin: '',
        grossAmount: 0,
        tax: 0,
        reference: '',
        country:''
    }
    
    const form:Forms[] = [
        { name: 'origin', placeholder: 'Origin', width: '100%', type: 'text' },
        { name: 'grossAmount', placeholder: 'Gross Amount', width: '100%', type: 'nuber' },
        { name: 'tax', placeholder: 'Tax', width: '45%', type: 'number' },
        { name: 'reference', placeholder: 'Reference', width: '45%', type: 'string' },
    ]

    const tabs:ITabs[] = [
        { title: 'Create', link: RoutesEnum.MONEY_DEPOSIT, active: true },
        { title: 'List', link: RoutesEnum.LIST_MONEY_DEPOSIT, active: false }
    ]

    const saveMoneyDeposit = async (values: MoneyDeposit, actions: any) => {
        await save('money-deposit', values, user!.uid)
    }
    return (
        <MoneyDepositContainer>
            <Tabs tabs={tabs} />
            <Formik
                initialValues={moneyDepositInitialValues}
                onSubmit={saveMoneyDeposit}>
                <Form>
                    <MoneyDepositFormArea>
                        {form.map((f:Forms) => (
                            <FieldArea key={f.name} margin={'1.5rem 0 0 5%'} width={f.width}>
                                <FormFields
                                    key={f.placeholder}
                                    label={f.placeholder}
                                    name={f.name}
                                    type={f.type} />
                            </FieldArea>
                        ))}
                        <ButtonsAreaContainer>
                            <Button buttonType='submit' height={'3rem'} width={'10.813rem'}>SAVE</Button>
                        </ButtonsAreaContainer>
                    </MoneyDepositFormArea>
                </Form>
            </Formik>
        </MoneyDepositContainer>
    )
}