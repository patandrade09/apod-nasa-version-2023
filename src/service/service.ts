const apiKey = import.meta.env.VITE_API_KEY;

export const fecthDateImageUrl = async (dateImage: unknown) => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateImage}`
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
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
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
