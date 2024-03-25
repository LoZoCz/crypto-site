const getTime = (unixTime: number | undefined) => {
    if (unixTime === undefined) return

    const date = new Date(unixTime)
    const hour = date.getHours()
    const minuets =
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()

    return `${hour}:${minuets}`
}

export default getTime
