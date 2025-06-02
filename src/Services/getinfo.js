 async function getIp() {
        const response = await fetch('https://api.ipify.org/?format=json')
        const data = await response.json()
        return data.ip
    }
async function getInfo() {
        const ip = await getIp()
        const response = await fetch(`http://ipwho.is/${ip}`)
        const data = await response.json()
        return data

    }
export default getInfo