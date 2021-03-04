$(document).ready(function () {
  $("#data-loader").show();
  function loadQuotes() {
    $.ajax({
      method: "GET",
      url: "https://smileschool-api.hbtn.info/quotes",
      success: (response) => {
        response.forEach((element) => {
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

  function loadVideos() {
    $.ajax({
      type: "GET",
      url: "https://smileschool-api.hbtn.info/popular-tutorials",
      success: function (response) {
        response.forEach((element) => {
          $("#data-loader").hide();
          let $stars = "";
          for (let i = 0; i < element.star; i++) {
            $stars += `<img
						src="./images/star_on.png"
						class="mt-2"
						alt="Star Rating"
					/>`;
          }
          for (let i = 0; i < 5 - element.star; i++) {
            $stars += `<img
							src="./images/star_off.png"
							class="mt-2"
							alt="Star Rating"
						/>`;
          }
          $("#video-carousel").append(`
          <div>
					<div class="carousel-item active">
              <div
                class=" justify-content-sm-around ml-3 col-lg-10 ml-5 mx-auto"
              >
                <div class="card border-0" style="width: 18rem">
                  <img
                    class="card-img-top"
                    src="${element.thumb_url}"
                    alt="Card image cap"
                  />
                  <div class="card-img-overlay">
                    <img
                      src="./images/play.png"
                      class="play-img"
                      alt="Play image"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">
                      ${element["sub-title"]}
                    </p>
                    <div class="justify-content-space-between">
                      <img
                        src="${element.author_pic_url}"
                        alt="reviewer"
                        class="rounded-circle"
                        width="50"
                        height="50"
                      />
                      <h5 class="reviewer-name">${element.author}</h5>
                      ${$stars}
                      <h5 class="time float-right my-2">${element.duration}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
					`);
        });
      },
    });
  }

  loadQuotes();
  loadVideos();
});
