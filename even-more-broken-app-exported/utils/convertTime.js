function convertTimestampToWords(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString("en-US", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit"
  });
}

module.exports = convertTimestampToWords;