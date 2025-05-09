document.addEventListener("DOMContentLoaded", async () => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const isUpsideDown = urlParams.get("australia-is-upside-down") === "true";

    if (isUpsideDown) {
      document.body.style.transform = "rotate(180deg)";
    }

    if (!urlParams.has("australia-is-upside-down")) {
      const response = await fetch(`https://ipapi.co/json/`); // Ipapi accepts standalone, and uses the senders IP (Would be Client.)
      const data = await response.json();

      if (data.country === "AU") {
        document.body.style.transform = "rotate(180deg)";
        urlParams.set("australia-is-upside-down", "true");
        window.history.replaceState(
          {},
          "",
          `${window.location.pathname}?${urlParams}`
        );
      }
    }
  } catch (error) {
    console.error("Error fetching geolocation data:", error);
  }
});
