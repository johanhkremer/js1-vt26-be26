//Pure function
const paketKostnad = (vikt) => {
    return 10 * vikt
}

//Sync callback
const beställningMottagen = (meddelande, beräknaKostnaden) => {
    const kostnad = beräknaKostnaden(3)
    console.log(`${meddelande} ${kostnad} SEK`)
}

//Async callback
const paketSkickat = (meddelande, påväg, levererat) => {
    setTimeout(() => {
        console.log(meddelande)
        påväg()
        levererat()
    }, 2000)
}

const paketPåväg = () => {
    console.log("Ditt paket är nu påväg mot dig!")
}

const paketLevererats = () => {
    console.log("Ditt paket har levererats!")
}

const beställPaketLeverans = () => {
    beställningMottagen("Beställning mottagen, kostanden för leverans: ", paketKostnad)
    console.log("----------------------")

    paketSkickat(
        "Ert paket har packats och kommer strax skickas från vårat lager",
        paketPåväg,
        paketLevererats
    )
}

beställPaketLeverans()
