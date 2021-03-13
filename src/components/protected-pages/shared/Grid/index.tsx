
import { GridContainer, GridHeaderItem, GridItemBox, GridItemsContainer, GridItemText } from "./styles";

export default function Grid() {

    const header = [
        'Origin', 'Gross Amount', 'Tax', 'Reference', 'Country'
    ]

    const data = [
        { origin: 'TW', grossAmount: 10768.61, tax: 2000.00, reference: '03/2021', country: 'Brazil' },
        { origin: 'TW', grossAmount: 11768.61, tax: 2000.00, reference: '03/2022', country: 'Chile' },
        { origin: 'TW', grossAmount: 12768.61, tax: 2000.00, reference: '03/2023', country: 'Noth America' },
        { origin: 'TW', grossAmount: 13768.61, tax: 2000.00, reference: '03/2023', country: 'Noth America' },
        { origin: 'TW', grossAmount: 14768.61, tax: 2000.00, reference: '03/2025', country: 'Noth America' }
    ]

    const lengthOfObject = Object.keys(data[0]).length

    return (
        <>
            <GridContainer>
                <GridItemsContainer>
                    <>
                        <GridHeaderItem>
                            {header.map(h => {
                                return (

                                    <GridItemText lengthOfObjects={lengthOfObject}>{h}</GridItemText>
                                )
                            })}
                        </GridHeaderItem>
                        {data.map(m => {
                            return (
                                <GridItemBox>
                                    <GridItemText lengthOfObjects={lengthOfObject}>{m.origin}</GridItemText>
                                    <GridItemText lengthOfObjects={lengthOfObject}>{m.grossAmount}</GridItemText>
                                    <GridItemText lengthOfObjects={lengthOfObject}>{m.tax}</GridItemText>
                                    <GridItemText lengthOfObjects={lengthOfObject}>{m.reference}</GridItemText>
                                    <GridItemText lengthOfObjects={lengthOfObject}>{m.country}</GridItemText>

                                </GridItemBox>
                            )
                        })}
                    </>
                </GridItemsContainer>
            </GridContainer>
        </>
    )
}