export function formatStockData(stockData){
    const formattedData = []

    if(stockData){
        Object.entries(
            stockData['Weekly Adjusted Time Series']
        ).map(
            ([key, value]) => {
                formattedData.push({
                    close: value['4. close'],
                    low: value['3. low'],
                    high: value['2. high'],
                    open: value['1. open'],
                    timestamp: key,
                })
            }
        )
    }
    return formattedData
}