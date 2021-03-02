
var shownPages = 3;

const handelArrayPaginationChunckedLength = (data: any[], pageSize: number) =>
    new Array(Math.ceil((data?.length || 0) / pageSize)).fill(0);

export const pageNumbers = (array: any, page: number, pageSize: number) => {
    var result: any[] = [];
    if (array) {
        if (handelArrayPaginationChunckedLength(array, pageSize).length < shownPages) {
            result = handelArrayPaginationChunckedLength(array, pageSize)?.map((v, i) => i + 1);

        } else if (page == handelArrayPaginationChunckedLength(array, pageSize).length - 2) {
            result.push(page, page + 1, page + 2);

        } else if (page == handelArrayPaginationChunckedLength(array, pageSize).length - 1) {
            result.push(page - 1, page, handelArrayPaginationChunckedLength(array, pageSize).length);

        } else if (page == handelArrayPaginationChunckedLength(array, pageSize).length) {
            result.push(page - 2, page - 1, page);

        } else {
            result.push(page, page + 1, page + 2, "...", handelArrayPaginationChunckedLength(array, pageSize).length);

        }

    }
    return result;
}
