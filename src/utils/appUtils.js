import _ from "lodash";

const returnPaginationRange = (pages, currentPage, postPerPage, siblings) => {
    let totalPageNoInArray = 7 + siblings;
    if (totalPageNoInArray >= pages){
        _.range(1, pages + 1)
    }
    let leftSiblingIndex = Math.max(currentPage - siblings, 1);
    let rightSiblingIndex = Math.min(currentPage + siblings, pages)
    let showLeftDots = leftSiblingIndex > 2;
    let showRightDots = rightSiblingIndex < pages - 2

    if (!showLeftDots && showRightDots){
        let leftItemsCount = 3 + 2 * siblings;
        let leftRange = _.range(1, leftItemsCount+1);
        return [...leftRange, " ...", pages];
    } else if(!showRightDots && showLeftDots) {
        let rightItemsCount = 3 + 2 * siblings;
        let rightRange = _.range(pages -rightItemsCount + 1, pages);
        return [1, "... ", ...rightRange];
    } else {
        let middleRange = _.range(leftSiblingIndex, rightSiblingIndex+1);
        return [1,"... ", ...middleRange," ...", pages];
    }
}

export default returnPaginationRange