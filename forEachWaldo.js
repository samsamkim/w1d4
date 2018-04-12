
function findWaldo(arr, found) {
  arr.forEach(function(item){
    if (item === "Waldo") {
      found();
    }
  })
}

function actionWhenFound() {
  console.log("Found Waldo!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);