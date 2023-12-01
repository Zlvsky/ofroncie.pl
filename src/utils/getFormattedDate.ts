const getFormattedDate = (parsedDate: string) => {
  const date = new Date(parsedDate);
  let day = date.toLocaleString("default", { day: "2-digit" });
  let month = date.toLocaleString("default", { month: "2-digit" });
  let year = date.toLocaleString("default", { year: "numeric" });

  let formattedDate = day + "." + month + "." + year;
  return formattedDate;
};

export default getFormattedDate;
