function performSearch() {
    
    const year = document.getElementById('select-year').value;
    const style = document.getElementById('select-style').value;
    const mark = document.getElementById('select-mark').value;
    const condition = document.getElementById('select-condition').value;
    const model = document.getElementById('select-model').value;
    const price = document.getElementById('select-price').value;


    const searchQuery = {
      year: year,
      style: style,
      mark: mark,
      condition: condition,
      model: model,
      price: price
    };
}
const searchResultsDiv = document.getElementById('search-results');
  searchResultsDiv.innerHTML = `
    <p>Year: ${searchQuery.year}</p>
    <p>Style: ${searchQuery.style}</p>
    <p>Mark: ${searchQuery.mark}</p>
    <p>Condition: ${searchQuery.condition}</p>
    <p>Model: ${searchQuery.model}</p>
    <p>Price: ${searchQuery.price}</p>
  `;