function getAllCourseTexts() {
  const ids = [
    "course-title",
    "course1desc1", "course1desc2", "course1desc3", "course1desc4", "course1desc5", "course1desc6", "course1desc7", "course1desc8", "course1desc9", "course1desc10", "course1desc11", "course1desc12", "course1desc13", "course1desc14", "course1desc15", "course1desc16", "course1desc17",
    "course2desc1", "course2desc2", "course2desc3", "course2desc4", "course2desc5", "course2desc6", "course2desc7", "course2desc8", "course2desc9",
    "course3desc1", "course3desc2", "course3desc3", "course3desc4", "course3desc5", "course3desc6", "course3desc7", "course3desc8", "course3desc9", "course3desc10", "course3desc11",
    "course4desc1", "course4desc2", "course4desc3", "course4desc4", "course4desc5", "course4desc6", "course4desc7", "course4desc8", "course4desc9", "course4desc10", "course4desc11", "course4desc12",
    "course5desc1", "course5desc2", "course5desc3", "course5desc4", "course5desc5", "course5desc6", "course5desc7", "course5desc8", "course5desc9", "course5desc10", "course5desc11", "course5desc12",
    "course6desc1", "course6desc2", "course6desc3", "course6desc4", "course6desc5", "course6desc6", "course6desc7", "course6desc8", "course6desc9", "course6desc10", "course6desc11", "course6desc12", "course6desc13",
    "course7desc1", "course7desc2", "course7desc3", "course7desc4", "course7desc5", "course7desc6", "course7desc7", "course7desc8", "course7desc9", "course7desc10", "course7desc11"
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

function translateAllCourseTextsToTamil() {
  const { texts, idMap } = getAllCourseTexts();

  if (texts.length === 0) {
    alert("No texts available for translation.");
    return;
  }

  $.ajax({
    url: "javascript/translate.php", // Or just "translate.php" if you move PHP file to root
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

$("#courseEnglishLink").click(function (e) {
  e.preventDefault();
  location.reload(); // Reload to restore original English easily
  $("#courseEnglishLink").addClass("active");
  $("#courseTamilLink").removeClass("active");
});

$("#courseTamilLink").click(function (e) {
  e.preventDefault();
  translateAllCourseTextsToTamil();
  $("#courseTamilLink").addClass("active");
  $("#courseEnglishLink").removeClass("active");
});
