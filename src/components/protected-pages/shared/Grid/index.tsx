import { Expenses } from "../../../../models/Expenses";
import { MoneyDeposit } from "../../../../models/MoneyDeposit";
import { GridContainer, GridHeaderItem, GridItemBox, GridItemsContainer, GridItemText } from "./styles";

type TDataProps = {
    dataProps: Expenses[] | MoneyDeposit[]
}

export default function Grid(props: TDataProps) {
    const { dataProps } = props
    const [firstLineProps] = dataProps
    const dataFields = Object.keys(firstLineProps)

    return (
        <>
            <GridContainer>
                <GridItemsContainer>
                    <>
                        <GridHeaderItem>
                            {dataFields.map(h =>
                                <GridItemText lengthOfObjects={dataFields.length}>{h.split(/(?=[A-Z])/).map(hd => `${hd} `)}</GridItemText>
                            )}
                        </GridHeaderItem>
                        {dataProps.map((d: any) => {
                            return (
                                <GridItemBox key={`${dataFields}${Math.random()}`}>
                                    {dataFields.map((h: string) =>
                                        <GridItemText key={`${h}${Math.random()}`} lengthOfObjects={dataFields.length}>{d[h]}</GridItemText>
                                    )}
                                </GridItemBox>
                            )
                        })}
                    </>
                </GridItemsContainer>
            </GridContainer>
        </>
    )
}