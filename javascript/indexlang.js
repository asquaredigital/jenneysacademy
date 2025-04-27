function getAllTourTexts() {
  const ids = [
    "bannersubtitletxt", "bannerbuttontxt", "tourText2a", "tourText2b",

    "highlight1h3", "highlight1p", "highlight1a",
    "highlight2h3", "highlight2p", "highlight2a",
    "highlight3h3", "highlight3p", "highlight3a",
    "highlight4h3", "highlight4p", "highlight4a",
    "highlight5h3", "highlight5p", "highlight5a",
    "highlight6h3", "highlight6p", "highlight6a",

    "eventheader", "event1", "event2", "event3", "event4",

    "highlight7h5", "highlight7p", "highlight7a",
    "highlight8h5", "highlight8p", "highlight8a",
    "highlight9h5", "highlight9p", "highlight9a",
    "highlight10h5", "highlight10p", "highlight10pa",

    "whyheading", "why1", "why2", "why3", "why4", "why5", "why6", "why7",

    "faqheadinghome", "homefaq1", "homefaq2", "homefaq3",

    "viewanswer1", "viewanswer2", "viewanswer3"
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

function translateAllTourTextsToTamil() {
  const { texts, idMap } = getAllTourTexts();

  if (texts.length === 0) {
    alert("No texts available for translation.");
    return;
  }

  $.ajax({
    url: "javascript/translate.php", // or directly "translate.php" if you put PHP at root
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
        alert("Unknown error occurred during translation.");
      }
    },
    error: function(xhr, status, error) {
      console.error(xhr.responseText);
      alert("Translation failed. Please try again.");
    }
  });
}

$("#tourenglishLink").click(function (e) {
  e.preventDefault();
  location.reload(); // reload to restore all original English texts
  $("#tourenglishLink").addClass("active");
  $("#tourtamilLink").removeClass("active");
});

$("#tourtamilLink").click(function (e) {
  e.preventDefault();
  translateAllTourTextsToTamil();
  $("#tourtamilLink").addClass("active");
  $("#tourenglishLink").removeClass("active");
});
