/**
 * @description This class will contain all the helper methods, to be static to avoid initialization
 */
export default class Helpers {
  constructor() {}
  itemsPerPage = 8;

  /**
   *
   * @param {itemsPerPage: number} itemsPerPage
   * @param {totalCount: number} totalCount
   * @returns numberofPages: number
   */
  getNumberOfPages(totalCount, itemsPerPage = this.itemsPerPage) {
    console.log("totalCount", totalCount, itemsPerPage);
    const ref = Number(totalCount) / Number(itemsPerPage);
    return Number(Math.floor(ref) === ref ? ref : Math.floor(ref + 1));
  }
}

const helperInstance = new Helpers();

export { helperInstance };
