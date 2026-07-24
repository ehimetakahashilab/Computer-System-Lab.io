(() => {
  const countElement = document.querySelector("#visit-count");
  if (!countElement) return;

  fetch("https://sunnywang.goatcounter.com/counter/TOTAL.json", { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error("Counter request failed");
      return response.json();
    })
    .then((data) => {
      countElement.textContent = data.count || "0";
    })
    .catch(() => {
      countElement.textContent = "—";
    });
})();
