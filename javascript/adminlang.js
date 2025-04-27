function getAllAdminTexts() {
  const ids = [
    "administratortitle", "admintitle",
    "admin1name", "admin1subtitle", "admin1desc", "admin1desc2",
    "admintitle2", "admin2name", "admin2subtitle",
    "admin2desc1", "admin2desc2", "admin2desc3",
    "admintitle3", "admin3name", "admin3subtitle",
    "admin3desc1", "admin3desc2",
    "admintitle4", "admin4name", "admin4subtitle", "admin4desc1"
  ];

  const texts = [];
  const idMap = [];

  ids.forEach(function(id) {
    const el = $("#" + id);
    if (el.length > 0) {
      const txt = el.text().replace(/\s+/g, ' ').trim();
      if (txt !== "") {
        texts.push(txt);
        idMap.push(id);
      }
    }
  });

  return { texts, idMap };
}

function translateAllAdminTextsToTamil() {
  const { texts, idMap } = getAllAdminTexts();

  if (texts.length === 0) {
    alert("No texts available to translate.");
    return;
  }

  $.ajax({
    url: "javascript/translate.php", // You can move to /translate.php if needed
    type: "POST",
    data: JSON.stringify({ texts: texts }),
    contentType: "application/json", 
    success: function(response) {
      if (response.data && response.data.translations) {
        for (let i = 0; i < idMap.length; i++) {
          $("#" + idMap[i]).html(response.data.translations[i].translatedText);
        }
      } else if (response.error) {
        alert("Google API error: " + response.error.message);
      } else {
        alert("Unknown error occurred.");
      }
    },
    error: function(xhr, status, error) {
      console.error(xhr.responseText);
      alert("Translation failed.");
    }
  });
}

$("#englishLink").click(function (e) {
  e.preventDefault();
  location.reload(); // Reload to restore original English
  $("#englishLink").addClass("active");
  $("#tamilLink").removeClass("active");
});

$("#tamilLink").click(function (e) {
  e.preventDefault();
  translateAllAdminTextsToTamil();
  $("#tamilLink").addClass("active");
  $("#englishLink").removeClass("active");
});
