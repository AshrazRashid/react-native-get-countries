
const getCountries = async () => {
  let response = await fetch(
    'https://apps-ivacy.s3.amazonaws.com/premium/ios/6.2.0/data.json',
  );

  let keys = ['iso_code', 'name'];
  let json = await response.json();

  let getSpecificFields = await json.body.country.map(o =>
    Object.assign(...keys.map(k => ({[k]: o[k]}))),
  );

  return getSpecificFields;
};


export default getCountries