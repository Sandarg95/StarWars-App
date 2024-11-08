function filterAndSort(data, text, asc) {
  return data
    .filter((i) => text.length === 0 || i.toLowerCase().includes(text.toLowerCase()))
    .sort(
      asc
        ? (a, b) => (b > a ? -1 : a === b ? 0 : 1)
        : (a, b) => (a > b ? -1 : a === b ? 0 : 1)
    );
}

export async function fetchItemsFilms( filter, asc) {
  try {
    const response = await fetch('https://www.swapi.tech/api/films');
    const data = await response.json();
    console.log('API response:', data); 
    const items = data.result.map((item) => item.properties.title); 
    return {
      items: filterAndSort(items, filter, asc),
    };
  } catch (error) {
    console.error("Error fetching Films:", error);
    return { items: [] };
  }
}

export async function fetchItemsPlanets(filter, asc) {
  try {
    const response = await fetch('https://www.swapi.tech/api/planets');
    const data = await response.json();
    console.log('API response:', data); 
    const items = data.results.map((item) => item.name); 
    return {
      items: filterAndSort(items, filter, asc),
    };
  } catch (error) {
    console.error("Error fetching planets:", error);
    return { items: [] };
  }
}

export async function fetchItemsSpace(filter, asc) {
  try {
    const response = await fetch('https://www.swapi.tech/api/starships');
    const data = await response.json();
    console.log('API response:', data); 
    const items = data.results.map((item) => item.name); 
    return {
      items: filterAndSort(items, filter, asc),
    };
  } catch (error) {
    console.error("Error fetching Space:", error);
    return { items: [] };
  }
}
