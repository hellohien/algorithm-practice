// For every string, after every occurrence of 'and' and/or 'but', insert the substring 'apparently' directly after the occurrence(s).
function modifyStrings(string) {
  return string.replace(/\b(and|but)\b(?!\s+apparently\b)/g, "$1 apparently");
}
