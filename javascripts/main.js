// Filter fish that are "on sale"
// Add fish to "Basket"

const writeFishes = arrayOfFishes => {
  let domString = "";
  arrayOfFishes.forEach(fish => {
    domString += `
        <div class="${
          fish.onSale ? "on-sale" : ""
        } fish card col-md-6 col-md-offset-3">
                <div class="thumbnail">
                    <img src="${fish.imageSoure}"
                     alt="" width="40%">
                    <div class="caption">
                        <h3 id="thumbnail-label">${fish.name}</h3>
                        <p>$
                            <span class="price">${fish.basePrice}</span>
                        </p>
                    </div>
                    <div class="caption card-footer">
                        <button class="add btn btn-danger">Add To Basket</button>
                    </div>
                </div>
            </div>`;
  });
  $("#available").append(domString);
  bindEvents();
};

const bindEvents = () => {
  $(".add").on("click", e => {});
  $(".revove").on("click", e => {});
};

$("body").on("click", "button.add", e => {
  const fishToMove = $(e.target).closest(".fish");
  $("#snagged").append(fishToMove);
  $(e.target)
    .text("Remove from Basket")
    .addClass("remove")
    .removeClass("add");
});

$("body").on("click", "button.remove", e => {
  const fishToMove = $(e.target).closest(".fish");
  $("#available").append(fishToMove);
  $(e.target)
    .text("Add To Basket")
    .addClass("add")
    .removeClass("remove");
});

$.get("../db/fishes.json")
  .done(data => {
    console.log(data);
    writeFishes(data.fishes);
  })
  .fail(error => {
    console.error(error);
  });
