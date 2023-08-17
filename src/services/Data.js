export default class Data {
  static url = 'http://localhost:3001/counters';

  static async loadCounters() {
    // La fonction fetch retourne une promesse (donc asynchrone)
    return fetch(this.url)
    .then(response => {
      console.log(`Response status : `, response.status);
      return response.json();
    })
    .then(counters => {
      //console.log(`Counters : `, counters);
      return counters;
    })
    .catch(error => {
      console.error(`Erreur attrapée dans le loadCounters : `, error);
    })
  }

  static async addCounters(intial_value = 0) {
    // La fonction fetch retourne une promesse (donc asynchrone)
    return fetch(this.url,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ "value": intial_value })
      })
    .then(response => {
      console.log(`Response status : `, response.status);
      return response.json();
    })
    .catch(error => {
      console.error(`Erreur attrapée dans le addCounters : `, error);
    })
  }

  static async deleteCounter(id) {
    // Pour rappel la fonction fetch retourne une promesse
    return fetch(this.url + "/" + id,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE"
      })
      .then((res) => { console.log(res) })
      .catch((error) => { console.error(error) })
  }

}