function displaysaloninfo() {
  let salon = {
    name: "Paw-sitive spaw Salon ",
    hours: {
      open: "10:00 AM",
      close: "10:00 PM",
    },
    phone: "973-012-3456",
    address: {
      street: "123 main st",
      city: "Paterson",
      state: "NJ",
      zip: "07302",
    },
  };
  

  document.getElementById("salon-info").innerHTML = `
        <h2>${salon.name}</h2>
        <p>Hours: ${salon.hours.open} - ${salon.hours.close}</p>
        <p>Phone: ${salon.phone}</p>
        <p>Address: ${salon.address.street}, ${salon.address.city}, ${salon.address.state} ${salon.address.zip}</p>
        `;
}


$(document).ready(function () {
  $("#select-service").change(function () {
    let description = $(this).find("option:selected").data("description");

    if (description) {
      $("#data-description p").text(description);
    } else {
      $("#data-description p").text("No description available.");
    }
  });

  $("#select-service").change(function () {
    let price = $(this).find("option:selected").data("price");

    if (price) {
      $("#data-price p").text(price);
    } else {
      $("#data-price p").text("No price available call fosr information.");
    }
  });

 
});

displaysaloninfo();

$("#changeModeButton").click(function () {
  $("body").toggleClass("dark-mode");
  if ($("body").hasClass("dark-mode")) {
    $(this).text("light mode");
  } else {
    $(this).text("dark mode");
  }

  $("#changeModeButton").text("🌗");
});
