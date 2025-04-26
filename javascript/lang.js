
  const tourText2a = $("#tourText2a").text();
  const tourText2b = $("#tourText2b").text();

  const bannersubtitletxt = $("#bannersubtitletxt").text();
  const bannerbuttontxt = $("#bannerbuttontxt").text();
  const highlight1h3 = $("#highlight1h3").text();
  const highlight1p = $("#highlight1p").text();
  const highlight1a = $("#highlight1a").text();
  
  const highlight2h3 = $("#highlight2h3").text();
  const highlight2p = $("#highlight2p").text();
  const highlight2a = $("#highlight2a").text();
  
  const highlight3h3 = $("#highlight3h3").text();
  const highlight3p = $("#highlight3p").text();
  const highlight3a = $("#highlight3a").text();
  
  const highlight4h3 = $("#highlight4h3").text();
  const highlight4p = $("#highlight4p").text();
  const highlight4a = $("#highlight4a").text();
  
  const highlight5h3 = $("#highlight5h3").text();
  const highlight5p = $("#highlight5p").text();
  const highlight5a = $("#highlight5a").text();
  
  const highlight6h3 = $("#highlight6h3").text(); // Retained the ID as-is
  const highlight6p = $("#highlight6p").text();
  const highlight6a = $("#highlight6a").text();
  
  const eventheader = $("#eventheader").text();

  const event1 = $("#event1").text();
  const event2 = $("#event2").text();
  const event3 = $("#event3").text();
  const event4 = $("#event4").text();

  const highlight7h5 = $("#highlight7h5").text();
  const highlight7p = $("#highlight7p").text();
  const highlight7a = $("#highlight7a").text();

  const highlight8h5 = $("#highlight8h5").text();
  const highlight8p = $("#highlight8p").text();
  const highlight8a = $("#highlight8a").text();

  const highlight9h5 = $("#highlight9h5").text();
  const highlight9p = $("#highlight9p").text();
  const highlight9a = $("#highlight9a").text();

  const highlight10h5 = $("#highlight10h5").text();
  const highlight10p = $("#highlight10p").text();
  const highlight10pa = $("#highlight10pa").text();

  const whyheading = $("#whyheading").text();
  const why1 = $("#why1").text();
  const why2 = $("#why2").text();
  const why3 = $("#why3").text();
  const why4 = $("#why4").text();
  const why5 = $("#why5").text();
  const why6 = $("#why6").text();
  const why7 = $("#why7").text();

  const faqheadinghome = $("#faqheadinghome").text();
  const homefaq1 = $("#homefaq1").text();
  const homefaq2 = $("#homefaq2").text();
  const homefaq3 = $("#homefaq3").text();

  


  const viewanswer1 = $("#viewanswer1").text();
  const viewanswer2 = $("#viewanswer2").text();
  const viewanswer3 = $("#viewanswer3").text();

  const apiKey = "AIzaSyBs0UZDa5lcoPvQ3xzIMqhDNO56iGSIQVs"; // Replace with your actual Google Translate API key

  function translateTextToTamil(text, targetElementId) {
    $.ajax({
      url: "https://translation.googleapis.com/language/translate/v2",
      type: "POST",
      data: {
        q: text,
        target: "ta",
        format: "text",
        key: apiKey
      },
      success: function (response) {
        const translated = response.data.translations[0].translatedText;
        $("#" + targetElementId).html(translated);
      },
      error: function () {
        alert("Translation failed.");
      }
    });
  }

  $("#tourenglishLink").click(function (e) {
    e.preventDefault();
    $("#bannersubtitletxt").text(bannersubtitletxt);
    $("#bannerbuttontxt").text(bannerbuttontxt);

    $("#tourText2a").text(tourText2a);
    $("#tourText2b").text(tourText2a);

      // Highlights section
    $("#highlight1h3").text(highlight1h3);
    $("#highlight1p").text(highlight1p);
    $("#highlight1a").text(highlight1a);

    $("#highlight2h3").text(highlight2h3);
    $("#highlight2p").text(highlight2p);
    $("#highlight2a").text(highlight2a);

    $("#highlight3h3").text(highlight3h3);
    $("#highlight3p").text(highlight3p);
    $("#highlight3a").text(highlight3a);

    $("#highlight4h3").text(highlight4h3);
    $("#highlight4p").text(highlight4p);
    $("#highlight4a").text(highlight4a);

    $("#highlight5h3").text(highlight5h3);
    $("#highlight5p").text(highlight5p);
    $("#highlight5a").text(highlight5a);

    $("#highlight6h3").text(highlight6h3); 
    $("#highlight6p").text(highlight6p);
    $("#highlight6a").text(highlight6a);

    $("#eventheader").text(eventheader);
    $("#event1").text(event1);
    $("#event2").text(event2);
    $("#event3").text(event3);
    $("#event4").text(event4);

    

    $("#highlight7h5").text(highlight7h5);
    $("#highlight7p").text(highlight7p);
    $("#highlight7a").text(highlight7a);

    $("#highlight8h5").text(highlight8h5);
    $("#highlight8p").text(highlight8p);
    $("#highlight8a").text(highlight8a);

    $("#highlight9h5").text(highlight9h5);
    $("#highlight9p").text(highlight9p);
    $("#highlight9a").text(highlight9a);

    $("#highlight10h5").text(highlight10h5);
    $("#highlight10p").text(highlight10p);
    $("#highlight10pa").text(highlight10pa);

    $("#whyheading").text(whyheading);
    $("#why1").text(why1);
    $("#why2").text(why2);
    $("#why3").text(why3);
    $("#why4").text(why4);
    $("#why5").text(why5);
    $("#why6").text(why6);
    $("#why7").text(why7);
    

    $("#faqheadinghome").text(faqheadinghome);
    $("#homefaq1").text(homefaq1);
    $("#homefaq2").text(homefaq2);
    $("#homefaq3").text(homefaq3);

    $("#viewanswer1").text(viewanswer1);
    $("#viewanswer2").text(viewanswer2);
    $("#viewanswer3").text(viewanswer3);

    $("#tourenglishLink").addClass("active");
    $("#tourtamilLink").removeClass("active");
  });

  $("#tourtamilLink").click(function (e) {
    e.preventDefault();
    translateTextToTamil(bannersubtitletxt, "bannersubtitletxt");
    translateTextToTamil(bannerbuttontxt, "bannerbuttontxt");

    translateTextToTamil(tourText2a, "tourText2a");
    translateTextToTamil(tourText2b, "tourText2b");

    translateTextToTamil(highlight1h3, "highlight1h3");
    translateTextToTamil(highlight1p, "highlight1p");
    translateTextToTamil(highlight1a, "highlight1a");

    translateTextToTamil(highlight2h3, "highlight2h3");
    translateTextToTamil(highlight2p, "highlight2p");
    translateTextToTamil(highlight2a, "highlight2a");

    translateTextToTamil(highlight3h3, "highlight3h3");
    translateTextToTamil(highlight3p, "highlight3p");
    translateTextToTamil(highlight3a, "highlight3a");

    translateTextToTamil(highlight4h3, "highlight4h3");
    translateTextToTamil(highlight4p, "highlight4p");
    translateTextToTamil(highlight4a, "highlight4a");

    translateTextToTamil(highlight5h3, "highlight5h3");
    translateTextToTamil(highlight5p, "highlight5p");
    translateTextToTamil(highlight5a, "highlight5a");

    translateTextToTamil(highlight6h3, "highlight6h3"); // adjust if ID is corrected
    translateTextToTamil(highlight6p, "highlight6p");
    translateTextToTamil(highlight6a, "highlight6a");

    translateTextToTamil(eventheader, "eventheader");
    translateTextToTamil(event1, "event1");
    translateTextToTamil(event2, "event2");
    translateTextToTamil(event3, "event3");
    translateTextToTamil(event4, "event4");


    translateTextToTamil(highlight7h5, "highlight7h5");
    translateTextToTamil(highlight7p, "highlight7p");
    translateTextToTamil(highlight7a, "highlight7a");

    translateTextToTamil(highlight8h5, "highlight8h5");
    translateTextToTamil(highlight8p, "highlight8p");
    translateTextToTamil(highlight8a, "highlight8a");

    translateTextToTamil(highlight9h5, "highlight9h5");
    translateTextToTamil(highlight9p, "highlight9p");
    translateTextToTamil(highlight9a, "highlight9a");

    translateTextToTamil(highlight10h5, "highlight10h5");
    translateTextToTamil(highlight10p, "highlight10p");
    translateTextToTamil(highlight10pa, "highlight10pa");

    translateTextToTamil(whyheading, "whyheading");
    translateTextToTamil(why1, "why1");
    translateTextToTamil(why2, "why2");
    translateTextToTamil(why3, "why3");
    translateTextToTamil(why4, "why4");
    translateTextToTamil(why5, "why5");
    translateTextToTamil(why6, "why6");
    translateTextToTamil(why7, "why7");

    

    translateTextToTamil(faqheadinghome, "faqheadinghome");
    translateTextToTamil(homefaq1, "homefaq1");
    translateTextToTamil(homefaq2, "homefaq2");
    translateTextToTamil(homefaq3, "homefaq3");

    translateTextToTamil(viewanswer1, "viewanswer1");
    translateTextToTamil(viewanswer2, "viewanswer2");
    translateTextToTamil(viewanswer3, "viewanswer3");


    $("#tourtamilLink").addClass("active");
    $("#tourenglishLink").removeClass("active");
  });

  
