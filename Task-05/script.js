fetch('landing.html')
.then(response => response.text())
.then(data => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = data;
    const ele = tempElement.querySelector('.nav_bar');
    document.querySelector(".nav_bar").innerHTML=ele.innerHTML;

});


var items_container = document.getElementById("shop");
let items = ("origins_vinyl.png floral_hoodie.png next_to_me_poster.png cap.png imagine_poster.png mercury_I.png keychain.png vintage_hoodie.png mercury_II.png bottle.png cassette.png tote.png").split(" ");
let discription = ("ORIGINS VINYL +<br>DIGITAL ALBUM <br>₹2800# FLORAL LOGO TAN<br>HOODIE <br>₹3200#  NEXT TO ME A3 <br>POSTER <br>₹1800# VEGAS TRUCKER<br>HAT <br>₹1500# IMAGINE A1<br>POSTER <br>₹1800# MERCURY ACT-I <br>DELUXE CD<br>₹1800# IMAGINE DRAGONS<br>KEYCHAIN <br>₹1800# VINTAGE GRAPHIC<br>HOODIE <br>₹3400# MERCURY ACT II <br>VINYL <br>₹2200 #VINTAGE VEGAS<br> WATER BOTTLE<br>₹2800# NIGHT VISIONS<br> CASSETTE <br>₹1100# BONES TREAT<br> BAG <br>₹1500").split("#");

for (var i = 0; i < 12; i++) {
    let ele = document.createElement('div');
    ele.className = "card";
    ele.innerHTML=`
    <div class="c1">
        <img class="pic" src="assets/item_cards/${items[i]}" alt=""><br></div>
        <div class="c2"><p>${discription[i]}</p></div>
        <div class="bottom"></div>
    </div>
    `
    items_container.appendChild(ele);
}
