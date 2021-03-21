const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Could not fetch. Status - ${res.status}`);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.error(`Could not fetch. ${error.message}`);
    return false;
  }
};
export default getApiResource;
