// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let AllDirectors = [];
  for (i = 0; i < moviesArray.length; i++) {
    AllDirectors.push(moviesArray[i].director);
  }
  return AllDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let countSteven = 0;
  for (i = 0; i < moviesArray.length; i++) {
    if (
      moviesArray[i].genre.includes("Drama") &&
      moviesArray[i].director === "Steven Spielberg"
    ) {
      countSteven++;
    }
  }
  return countSteven;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let scoreSum = 0;
  let scoreAvg = 0;
  for (i = 0; i < moviesArray.length; i++) {
    scoreSum += moviesArray[i].score;
  }
  scoreAvg = Math.round((scoreSum / moviesArray.length) * 100) / 100;
  return scoreAvg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let avgDrama = 0;
  const juntarFilmesDrama = moviesArray.filter((dramaFilms) =>
    dramaFilms.genre.includes("Drama")
  );
  const arrayScoresDrama = juntarFilmesDrama.map(
    (scoresIsolados) => scoresIsolados.score
  );
  const somarScoresDrama = arrayScoresDrama.reduce(
    (acc, scoreIndividual) => acc + scoreIndividual
  );
  avgDrama =
    Math.round((somarScoresDrama / arrayScoresDrama.length) * 100) / 100;
  return avgDrama;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArrayForOrdering = moviesArray.map((item) => item);
  //const moviesOrderedYear = newArrayForOrdering.sort((a,b) => a.year - b.year) SINTAXE ES6, porém impossível fazer condição
  const moviesOrderedYear = newArrayForOrdering.sort(function (a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });

  return moviesOrderedYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newTitleAlphabetic = moviesArray.map((item) => item.title);
  const order20Alphabetic = newTitleAlphabetic.sort();
  const listaFinal = [];
  for (i = 0; i < 20; i++) {
    listaFinal.push(order20Alphabetic[i]);
  }
  return listaFinal.sort();
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
