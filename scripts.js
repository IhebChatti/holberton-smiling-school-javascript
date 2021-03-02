$(document).ready(function () {
  $("#data-loader").show();
  function loadQuotes() {
    $.ajax({
      method: "GET",
      url: "https://smileschool-api.hbtn.info/quotes",
      success: (data) => {
        data.forEach((element) => {
          let active = "";
          element.id === 1 ? (active = "active") : (active = "");
          $("#data-loader").hide();
          $html = `<div class="carousel-item ${active}" >
						<div class="row justify-content-lg-around ml-5">
							<img
								class="rounded-circle my-3 d-block"
								src="${element.pic_url}"
								alt="First slide"
								width="150"
								height="150"
							/>
							<p class="text-white col-sm-6 my-5 carousel-text">
								${element.text}
								<br />
								<br />
								<span class="font-weight-bold">${element.name}</span>
								<br />
								${element.title}
							</p>
						</div>
					</div>`;
          $("#carousel-items").append($html);
        });
        $("#carousel-items").children().eq(0).remove();
        $("#carousel-items").children().eq(2).remove();
      },
    });
  }
  loadQuotes();
});
