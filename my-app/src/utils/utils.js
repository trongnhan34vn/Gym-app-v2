export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  // Create an options object with the desired date format
  const options = { day: 'numeric', month: 'short' };

  // Format the date using Intl.DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return formattedDate;
}

export const getCurrentDate = () => {
  const currentTimestamp = Date.now(); // Get the current timestamp

  // Create a new Date object using the current timestamp
  const currentDate = new Date(currentTimestamp);

  // Set the time to midnight (00:00:00)
  currentDate.setHours(0, 0, 0, 0);

  // Add one day
  currentDate.setDate(currentDate.getDate() + 1);

  // Get the updated timestamp
  const nextDayTimestamp = currentDate.getTime();
  return nextDayTimestamp;
}

export const formatTime = (timestamp) => {
  const date = new Date(timestamp);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedTime = `${hours} giờ ${minutes} phút`;

  return formattedTime;
}