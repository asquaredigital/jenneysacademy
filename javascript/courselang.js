
const apiKey = "AIzaSyBs0UZDa5lcoPvQ3xzIMqhDNO56iGSIQVs"; // Replace with your actual Google Translate API key

  const englishTexts = [
    $("#course-title").text(),
    $("#course1desc1").text(),
    $("#course1desc2").text(),
    $("#course1desc3").text(),
    $("#course1desc4").text(),
    $("#course1desc5").text(),
    $("#course1desc6").text(),
    $("#course1desc7").text(),
    $("#course1desc8").text(),
    $("#course1desc9").text(),
    $("#course1desc10").text(),
    $("#course1desc11").text(),
    $("#course1desc12").text(),
    $("#course1desc13").text(),
    $("#course1desc14").text(),
    $("#course1desc15").text(),
    $("#course1desc16").text(),
    $("#course1desc17").text(),

    $("#course2desc1").text(),
    $("#course2desc2").text(),
    $("#course2desc3").text(),
    $("#course2desc4").text(),
    $("#course2desc5").text(),
    $("#course2desc6").text(),
    $("#course2desc7").text(),
    $("#course2desc8").text(),
    $("#course2desc9").text(),

    $("#course3desc1").text(),
    $("#course3desc2").text(),
    $("#course3desc3").text(),
    $("#course3desc4").text(),
    $("#course3desc5").text(),
    $("#course3desc6").text(),
    $("#course3desc7").text(),
    $("#course3desc8").text(),
    $("#course3desc9").text(),
    $("#course3desc10").text(),
    $("#course3desc11").text(),

    $("#course4desc1").text(),
    $("#course4desc2").text(),
    $("#course4desc3").text(),
    $("#course4desc4").text(),
    $("#course4desc5").text(),
    $("#course4desc6").text(),
    $("#course4desc7").text(),
    $("#course4desc8").text(),
    $("#course4desc9").text(),
    $("#course4desc10").text(),
    $("#course4desc11").text(),
    $("#course4desc12").text(),

    $("#course5desc1").text(),
    $("#course5desc2").text(),
    $("#course5desc3").text(),
    $("#course5desc4").text(),
    $("#course5desc5").text(),
    $("#course5desc6").text(),
    $("#course5desc7").text(),
    $("#course5desc8").text(),
    $("#course5desc9").text(),
    $("#course5desc10").text(),
    $("#course5desc11").text(),
    $("#course5desc12").text(),

    $("#course6desc1").text(),
    $("#course6desc2").text(),
    $("#course6desc3").text(),
    $("#course6desc4").text(),
    $("#course6desc5").text(),
    $("#course6desc6").text(),
    $("#course6desc7").text(),
    $("#course6desc8").text(),
    $("#course6desc9").text(),
    $("#course6desc10").text(),
    $("#course6desc11").text(),
    $("#course6desc12").text(),
    $("#course6desc13").text(),

    $("#course7desc1").text(),
    $("#course7desc2").text(),
    $("#course7desc3").text(),
    $("#course7desc4").text(),
    $("#course7desc5").text(),
    $("#course7desc6").text(),
    $("#course7desc7").text(),
    $("#course7desc8").text(),
    $("#course7desc9").text(),
    $("#course7desc10").text(),
    $("#course7desc11").text()
  ];

  // Corresponding IDs in same order
  const elementIds = [
    "course-title",
    "course1desc1",
    "course1desc2",
    "course1desc3",
    "course1desc4",
    "course1desc5",
    "course1desc6",
    "course1desc7",
    "course1desc8",
    "course1desc9",
    "course1desc10",
    "course1desc11",
    "course1desc12",
    "course1desc13",
    "course1desc14",
    "course1desc15",
    "course1desc16",
    "course1desc17",

    "course2desc1",
    "course2desc2",
    "course2desc3",
    "course2desc4",
    "course2desc5",
    "course2desc6",
    "course2desc7",
    "course2desc8",
    "course2desc9",

    "course3desc1",
    "course3desc2",
    "course3desc3",
    "course3desc4",
    "course3desc5",
    "course3desc6",
    "course3desc7",
    "course3desc8",
    "course3desc9",
    "course3desc10",
    "course3desc11",

    "course4desc1",
    "course4desc2",
    "course4desc3",
    "course4desc4",
    "course4desc5",
    "course4desc6",
    "course4desc7",
    "course4desc8",
    "course4desc9",
    "course4desc10",
    "course4desc11",
    "course4desc12",

    "course5desc1",
    "course5desc2",
    "course5desc3",
    "course5desc4",
    "course5desc5",
    "course5desc6",
    "course5desc7",
    "course5desc8",
    "course5desc9",
    "course5desc10",
    "course5desc11",
    "course5desc12",

    "course6desc1",
    "course6desc2",
    "course6desc3",
    "course6desc4",
    "course6desc5",
    "course6desc6",
    "course6desc7",
    "course6desc8",
    "course6desc9",
    "course6desc10",
    "course6desc11",
    "course6desc12",
    "course6desc13",

    "course7desc1",
    "course7desc2",
    "course7desc3",
    "course7desc4",
    "course7desc5",
    "course7desc6",
    "course7desc7",
    "course7desc8",
    "course7desc9",
    "course7desc10",
    "course7desc11"
  ];

  function translateCourseTexts() {
    $.ajax({
      url: "https://translation.googleapis.com/language/translate/v2",
      type: "POST",
      data: {
        q: englishTexts,
        target: "ta",
        format: "text",
        key: apiKey
      },
      traditional: true,
      success: function (response) {
        const translations = response.data.translations;
        for (let i = 0; i < translations.length; i++) {
          $("#" + elementIds[i]).html(translations[i].translatedText);
        }
      },
      error: function () {
        alert("Translation failed. Please check your API key and limits.");
      }
    });
  }

  $("#courseEnglishLink").click(function (e) {
    e.preventDefault();
    for (let i = 0; i < englishTexts.length; i++) {
      $("#" + elementIds[i]).text(englishTexts[i]);
    }
    $("#courseEnglishLink").addClass("active");
    $("#courseTamilLink").removeClass("active");
  });

  $("#courseTamilLink").click(function (e) {
    e.preventDefault();
    translateCourseTexts();
    $("#courseTamilLink").addClass("active");
    $("#courseEnglishLink").removeClass("active");
  });
