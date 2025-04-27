function getAllFaqTexts() {
  const ids = [
    "faqtitle", "faqclick",
    "ques1", "ans1", "ans1a", "ans1b", "ans1c", "ans1d", "ans1e", "ans1f", "ans1g",
    "ques2", "ans2", "ans2a", "ans2b",
    "ques3", "ans3", "ans3a", "ans3b",
    "ques4", "ans4", "ans4a", "ans4b", "ans4c", "ans4d", "ans4e", "ans4f", "ans4g", "ans4h",
    "ques5", "ans5", "ans5a", "ans5b", "ans5c", "ans5d", "ans5e", "ans5f", "ans5g", "ans5h", "ans5i", "ans5j", "ans5k",
    "ques6", "ans6", "ans6a", "ans6b", "ans6c", "ans6d", "ans6e", "ans6f", "ans6g", "ans6h",
    "ques7", "ans7", "ans7a",
    "ques8", "ans8", "ans8a",
    "ques9", "ans9", "ans9a",
    "ques10", "ans10", "ans10a", "ans10b", "ans10c", "ans10d", "ans10e", "ans10f", "ans10g", "ans10h", "ans10i", "ans10j",
    "ques11", "ans11", "ans11a", "ans11b", "ans11c", "ans11d", "ans11e", "ans11f", "ans11g", "ans11h", "ans11i", "ans11j", "ans11k", "ans11l",
    "ques12", "ans12", "ans12a"
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

function translateAllFaqTextsToTamil() {
  const { texts, idMap } = getAllFaqTexts();

  if (texts.length === 0) {
    alert("No texts available for translation.");
    return;
  }

  $.ajax({
    url: "javascript/translate.php", // or just "translate.php" depending on where your PHP is
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
  location.reload(); // Safest way to restore all original English texts
  $("#englishLink").addClass("active");
  $("#tamilLink").removeClass("active");
});

$("#tamilLink").click(function (e) {
  e.preventDefault();
  translateAllFaqTextsToTamil();
  $("#tamilLink").addClass("active");
  $("#englishLink").removeClass("active");
});
