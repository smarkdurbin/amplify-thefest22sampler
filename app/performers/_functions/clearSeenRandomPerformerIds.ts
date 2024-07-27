/**
 *
 */
const clearSeenRandomPerformerIds = async () => {
  try {
    // Clear the existing data labeled "thefest22_seen_random_performer_ids" from local storage
    localStorage.removeItem("thefest22_seen_random_performer_ids");
  } catch (error) {
    console.error(error);
    throw new Error("Error while clearing seen random performers");
  }
};

export default clearSeenRandomPerformerIds;
