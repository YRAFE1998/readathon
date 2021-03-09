export const  handleSortGenirec = (direction: string, value: any, data: any[]) => {
    let newData: any = [];
        if (typeof data?.[0]?.[value] === 'string') {
            if (direction == "asc") {
                newData = data?.sort((a, b) => (a[value]?.toUpperCase() > b[value]?.toUpperCase()) ? 1 : ((b[value]?.toUpperCase() > a[value]?.toUpperCase()) ? -1 : 0))
            } else {
                newData = data?.sort((a, b) => (a[value]?.toUpperCase() < b[value]?.toUpperCase()) ? 1 : ((b[value]?.toUpperCase() < a[value]?.toUpperCase()) ? -1 : 0))
            }
        } else {
            if (direction == "asc") {
                newData = data?.sort((a, b) => (a[value] - b[value]) )
            } else {
                newData = data?.sort((a, b) => (b[value] - a[value]) )

            }
        }
       return newData;
}