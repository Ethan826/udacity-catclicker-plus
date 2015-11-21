$(document).ready(function () {
    var Cat = (function () {
        function Cat(name, id, imgSrc) {
            this.name = name;
            this.id = id;
            this.imgSrc = imgSrc;
            this.numClicks = 0;
        }
        Cat.prototype.getId = function () {
            return this.id;
        };
        Cat.prototype.getName = function () {
            return this.name;
        };
        Cat.prototype.getImgSrc = function () {
            return this.imgSrc;
        };
        Cat.prototype.getNumClicks = function () {
            return this.numClicks;
        };
        Cat.prototype.setNumClicks = function (num) {
            this.numClicks += 1;
        };
        return Cat;
    })();
    var cat1 = new Cat("Grumpy", "cat1", "http://i.dailymail.co.uk/i/pix/2014/08/05/1407225932091_wps_6_SANTA_MONICA_CA_AUGUST_04.jpg");
    var cat2 = new Cat("Happy", "cat2", "http://dc541.4shared.com/img/CNrXLjwN/s7/13cd1fd1a38/happy-cat.jpg");
    var cat3 = new Cat("Dopey", "cat3", "http://s-ak.buzzfed.com/static/enhanced/terminal01/2010/5/28/13/enhanced-buzz-7552-1275066424-6.jpg");
    var cat4 = new Cat("Scary", "cat4", "http://i233.photobucket.com/albums/ee173/charbo187/cute-funny-animals-30.jpg");
    var cat5 = new Cat("Stuck", "cat5", "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg");
    var catArray = [cat1, cat2, cat3, cat4, cat5];
    var Page = (function () {
        function Page(cats) {
            this.cats = cats;
            this.buildDropDown();
            this.activeCat = cats[Math.floor((Math.random() * cats.length))];
            this.renderActiveCat();
        }
        Page.prototype.buildDropDown = function () {
            var catList = $("#cat-list");
            var self = this;
            this.cats.forEach(function (cat) {
                catList.append("<option value=" + cat.getId() + ">" + cat.getName() + "</option>");
            });
            catList.change(function () {
                self.activeCat = self.fetchCatById($(this).val());
                self.renderActiveCat();
            });
        };
        Page.prototype.fetchCatById = function (id) {
            console.log(id);
            var counter = 0;
            var answer = null;
            while (counter < this.cats.length && !answer) {
                var cat = this.cats[counter];
                if (cat["id"] == id) {
                    answer = cat;
                }
                counter += 1;
            }
            if (answer) {
                return answer;
            }
            else {
                throw "fetchCatByID() could not find the cat";
            }
        };
        Page.prototype.renderActiveCat = function () {
            var cat = this.activeCat;
            var text = "<h2>" + cat.getName() + "</h2>\n                  <img id=" + cat.getId() + " src=\"" + cat.getImgSrc() + "\">\n                  <h3 class=\"clicks\">" + cat.getNumClicks() + "</h3>";
            $(".cat-area").html(text);
            var handle = $("#" + cat.getId());
            handle.click(function () {
                cat.setNumClicks(cat.getNumClicks() + 1);
                $(".clicks").text(cat.getNumClicks());
            });
        };
        return Page;
    })();
    var page = new Page(catArray);
});
