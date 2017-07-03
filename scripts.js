function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
};

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};

var galaxyS6 = new Phone("Samsung", 1700, "black"),
    iPhone6S = new Phone("Apple", 2250, "silver"),
    onePlusOne = new Phone("OnePlus", 1330, "white");

galaxyS6.printInfo(); 
iPhone6S.printInfo();
onePlusOne.printInfo();

