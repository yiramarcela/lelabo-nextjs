import base from "../api/base";

const getAirtableData = (tableName, view) => {
    console.log('entra aca');
  let data = [];
  base(tableName)
    .select({ view: view ? view : viewType.grid })
    .eachPage((records, fetchNextPage) => {
      const recordsFields = records.map((record) => record.fields);
      data.push(recordsFields);
      fetchNextPage();
    });
};

export default getAirtableData;
