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
    var cat4 = new Cat("Scary", "cat3", "http://i233.photobucket.com/albums/ee173/charbo187/cute-funny-animals-30.jpg");
    var cat5 = new Cat("Stuck", "cat3", "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg");
    var catArray = [cat1, cat2, cat3, cat4, cat5];
    var Page = (function () {
        function Page(cats) {
            this.cats = cats;
            this.buildDropDown();
        }
        Page.prototype.buildDropDown = function () {
            this.cats.forEach(function (cat) {
                $("#cat-list").append("<option value=" + cat.getId() + ">" + cat.getName() + "</option>");
            });
        };
        return Page;
    })();
    var page = new Page(catArray);
});
