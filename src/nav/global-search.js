$("[tr-search-element='component']").each(function (index) {
  let componentEl = $(this),
    inputEl = componentEl.find("[tr-search-element='input']"),
    clearButtonEl = componentEl.find("[tr-search-element='clear']"),
    resultsWrapperEl = componentEl.find("[tr-search-element='results-wrapper']");
  // while user types on search input field
  inputEl.on("input", function () {
    // get field value
    let fieldValue = $(this).val();
    // if field value contains at least 1 character
    if (fieldValue.length) {
      // open component
      componentEl.addClass("is-open");
      // fetch content dynamically
      $.ajax({
        // go to search page with query that matches field value
        url: "/search?query=" + fieldValue.replaceAll(" ", "+"),
        success: function (response) {
          // find search results wrapper inside search page
          let results = $(response).find("[tr-search-element='search-page-results']");
          // empty component's results wrapper
          resultsWrapperEl.empty();
          // fill it with content from search page
          resultsWrapperEl.append(results);
        }
      });
    } else {
      // close component if field is empty
      componentEl.removeClass("is-open");
    }
  });
  // clear field value on click of clear button
  clearButtonEl.on("click", function () {
    inputEl.val("");
    componentEl.removeClass("is-open");
  });
});