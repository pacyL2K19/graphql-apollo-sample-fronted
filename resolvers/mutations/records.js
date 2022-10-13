import { gql } from "@apollo/client";

const CREATE_RECORD = gql`
  mutation AddRecord($data: RecordInput!) {
    addRecord(data: $data) {
      id
      country
      year
      totalPopulation
      area
    }
  }
`;

const UPDATE_RECORD = gql`
  mutation UpdateRecord($id: ID!, $data: UpdateRecordInput!) {
    updateRecord(id: $id, data: $data) {
      id
      country
      year
      totalPopulation
      area
    }
  }
`;

export { CREATE_RECORD, UPDATE_RECORD };
