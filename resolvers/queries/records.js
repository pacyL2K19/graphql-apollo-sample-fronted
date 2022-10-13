import { gql } from "@apollo/client";

const GET_ALL_RECORDS = gql`
  query RecordQuery($limit: Int, $skip: Int) {
    getAllRecords(
      limit: $limit
      skip: $skip
    ) {
      id
      country
      year
      totalPopulation
      area
    }
    getRecordCount
}`;

export default GET_ALL_RECORDS;
