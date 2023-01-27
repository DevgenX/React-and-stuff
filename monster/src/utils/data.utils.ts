export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
};

// GetData the will receive some type T, this type is what you are going to a return in this function
// inside of a promise
