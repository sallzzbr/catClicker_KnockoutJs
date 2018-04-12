
var catsList = [
  {
    name: 'Tabby',
    nicknames: ['Mariana', 'Fofinha', 'pituquinha', 'fofuxa'],
    counter: 0,
    imgSrc: 'img/434164568_fea0ad4013_z.jpg'
  },
  {
    name: 'Dark Tabby',
    nicknames: ['Mariana', 'Fofinha', 'pituquinha', 'fofuxa'],
    counter: 0,
    imgSrc: 'img/434164568_fea0ad4013_z.jpg'
  }
]

var Cat = function(data) {
  this.clickCount = ko.observable(data.counter);
  this.title = ko.observable("Baby");
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable('www.google.com');
  this.nicknames = ko.observableArray(data.nicknames);

  this.title = ko.computed(function() {
  		var title;
  		var clicks = this.clickCount();
  		if (clicks <= 5) {
  			title = 'Baby';
  		} else if (clicks <= 10) {
  			title = 'Kitten';
  		}else if (clicks <= 15) {
  			title = 'Teen';
  		} else if (clicks <= 20) {
  			title = 'Adult';
  		} else {
  			title = 'Cat-aracts';
  		}
  		return title;
  	}, this);
}

var ViewModel = function() {
  var self = this;

  this.catsArray = ko.observableArray([]);
  catsList.forEach(function(index){
    self.catsArray.push(new Cat(index));
  });

  this.currentCat = ko.observable(this.catsArray()[0]);

  this.selectCat = function(click) {
    self.currentCat(click);
  };

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  this.setCat = function(clickedCat) {
    self.currentCat(clickedCat)
  }
}

ko.applyBindings(new ViewModel());
