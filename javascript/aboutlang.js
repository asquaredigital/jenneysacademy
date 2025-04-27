function getAllTexts() {
  const ids = [
    "abouttitle", "aboutcontent1", "aboutcontent2", "aboutcontent3",
    "whytitle1", "why1", "why2", "why3", "why4",
    "highlightstitle", "highlight1", "highlight2", "highlight3", "highlight4"
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

function translateAllTextsToTamil() {
  const { texts, idMap } = getAllTexts();

  if (texts.length === 0) {
    alert("No texts available to translate.");
    return;
  }

  $.ajax({
    url: "javascript/translate.php",
    type: "POST",
    data: JSON.stringify({ texts: texts }),
    contentType: "application/json", // Important!!!
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

$("#tourenglishLink").click(function (e) {
  e.preventDefault();
  location.reload(); // Just reload to restore original English
});

$("#tourtamilLink").click(function (e) {
  e.preventDefault();
  translateAllTextsToTamil();
  $("#tourtamilLink").addClass("active");
  $("#tourenglishLink").removeClass("active");
});
