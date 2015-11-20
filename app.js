$(document).ready(function () {
    var Cat = (function () {
        function Cat(name, id, imgSrc) {
            var _this = this;
            this.getId = function () { return _this.id; };
            this.getName = function () { return _this.name; };
            this.getImgSrc = function () { return _this.imgSrc; };
            this.getNumClicks = function () { return _this.numClicks; };
            this.setNumClicks = function (num) { _this.numClicks += 1; };
            this.name = name;
            this.id = id;
            this.imgSrc = imgSrc;
            this.numClicks = 0;
        }
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
        }
        Page.prototype.buildDropDown = function () {
            var catList = $("#cat-list");
            var self = this;
            this.cats.forEach(function (cat) {
                catList.append("<option value=" + cat.getId() + ">" + cat.getName() + "</option>");
            });
            catList.change(function () {
                self.activeCat = self.fetchCatById($(this).val());
                console.log(self.activeCat);
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
        };
        return Page;
    })();
    var page = new Page(catArray);
});
