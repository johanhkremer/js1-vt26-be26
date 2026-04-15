console.log("👹🔥")

//Stegen är inte kopplade till varandra
setTimeout(() => {
    console.log("Paketet har registrerats")
}, 1000)

setTimeout(() => {
    console.log("Paketet har skickats")
}, 2000)

setTimeout(() => {
    console.log("Paketet är i Malmö")
}, 3000)

setTimeout(() => {
    console.log("Paketet har levererats 📦")
}, 4000)

//Stegen är kopplade till varandra
setTimeout(() => {
    console.log("Paketet har registrerats")

    setTimeout(() => {
        console.log("Paketet har skickats")

        setTimeout(() => {
            console.log("Paketet är i Malmö")

            setTimeout(() => {
                console.log("Paketet har levererats 📦")
            }, 1000)

        }, 1000)

    }, 1000)

}, 1000)

/* Exempel */

//Mer verklighetsnära exempel
loginUser("johan", "1234", (user) => {
    console.log("Inloggad:", user.name)

    getOrders(user.id, (orders) => {
        console.log("Ordrar hämtade:", orders)

        getOrderDetails(orders[0].id, (orderDetails) => {
            console.log("Orderdetaljer hämtade:", orderDetails)

            renderOrder(orderDetails, () => {
                console.log("Ordern är nu renderad på sidan")
            })
        })
    })
})

/* Hur löser vi callback hell? 👹🔥
- Promises
- Async/Await
*/

