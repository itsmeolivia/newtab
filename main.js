$("a").filter(
  function() {
    if ($(this).attr("target")) { return false; }
    if ($(this).attr("href").startsWith("#")) { return false; }
    if ($(this).attr("href").startsWith("javascript:")) { return false; }
    return true;
  }
).attr("target", "_blank")
