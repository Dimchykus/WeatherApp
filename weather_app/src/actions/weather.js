export const setItem = (weather) => (
    {
        type: "SET_DATA",
        payload: weather
    }
)
export const setIsReady = (isReady) => (
    {
        type: "SET_ISREADY",
        payload: isReady
    }
)