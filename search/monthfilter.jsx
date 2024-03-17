import React from "react";

const monthfilter = () => {
  var monthsList = [
    { label: "Janurary", value: "01", dataset: [] },
    { label: "February", value: "02", dataset: [] },
    { label: "March", value: "03", dataset: [] },
    { label: "April", value: "04", dataset: [] },
    { label: "May", value: "05", dataset: [] },
    { label: "June", value: "06", dataset: [] },
    { label: "July", value: "07", dataset: [] },
    { label: "August", value: "08", dataset: [] },
    { label: "September", value: "09", dataset: [] },
    { label: "October", value: "10", dataset: [] },
    { label: "November", value: "11", dataset: [] },
    { label: "December", value: "12", dataset: [] },
  ];

  dates.forEach((i) => {
    var expense = i.Amount;
    var month = i.Date.slice(0, 2);
    monthsList.find((m) => m.value === month);

    for (let j = 0; j < monthsList.length; j++) {
      if (monthsList[j].value === month) {
        monthsList[j].dataset.push(expense);
      }
    }
  });
  return <div></div>;
};

export default monthfilter;
