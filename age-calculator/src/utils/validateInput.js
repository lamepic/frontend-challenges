export const validateDate = ({ formLabel, value }) => {
  if (value.length === 0) {
    return "This field is required";
  }

  if (formLabel.toLowerCase() === "day") {
    if (value < 0 || value > 31) {
      return "Must be a valid day";
    }
  }

  if (formLabel.toLowerCase() === "month") {
    if (value < 0 || value > 12) {
      return "Must be a valid month";
    }
  }

  if (formLabel.toLowerCase() === "year") {
    if (value > new Date().getFullYear()) {
      return "Must be in the past";
    }
  }
};
