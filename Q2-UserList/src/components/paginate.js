import _ from "lodash";

//this is a javascript function component that
//used for paginate, in this function,
//three variable are required, the things that you need to paginate
//the pagenumber and the pageSize
//lodash provides various funciton to operate the arrary
//slice, take, value....etc
//slice from the startIndex and take 4 items for each page and return the value.
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
