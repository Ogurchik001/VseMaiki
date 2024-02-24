function changeImage(e) {
    let img = document.getElementById('img');
    let path = e.attributes['src'].nodeValue;
    img.src = path;

    }

    let clicks = 0;
    function onClick() {
      clicks += 1;
      document.getElementById('cart_num').innerHTML = clicks;
    };