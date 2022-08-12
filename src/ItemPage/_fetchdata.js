export const fetchdata = (
  item_name,
  category,
  location,
  available_quantity,
  rent_rates,
  ref_deposit,
  images
) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    item_name: item_name,
    category: category,
    location: location,
    available_quantity: available_quantity,
    rent_rates: rent_rates,
    ref_deposit: ref_deposit,
    images: images,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/products", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

// import { fetchdata } from "./ItemPage/fetchdata";
// import { newdata } from "./ItemPage/datanew";

// console.log(newdata);

// useEffect(() => {
//   newdata.map((item) => {
//     console.log(
//       item.item_name,
//       item.category,
//       item.location,
//       item.available_quantity,
//       item.rent_rates,
//       item.ref_deposit,
//       item.images
//     );
//DO NOT UNCOMMENT FETCH
// fetchdata(
//   item.item_name,
//   item.category,
//   item.location,
//   item.available_quantity,
//   item.rent_rates,
//   item.ref_deposit,
//   item.images
// );
//   });
// }, []);
