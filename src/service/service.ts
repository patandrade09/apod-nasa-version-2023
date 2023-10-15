export const fecthDateImageUrl = async (dateImage: unknown) => {
  const API_KEY = "ggMGCBk7bZyioUaGqoDQk0mZpoe1tehvURi7pQu1";
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${dateImage}`
    );
    if (!response.ok) {
      return response;
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};

export const fetchDefaultImageUrl = async () => {
  const API_KEY = "ggMGCBk7bZyioUaGqoDQk0mZpoe1tehvURi7pQu1";
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    );
    if (!response.ok) {
      return response;
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};
