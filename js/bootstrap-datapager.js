(function ($) {
    $.fn.paginate = function (options) {
        var target = this;
        var pageSize = 10;
        var currentPage;
        var pagesToGenerate;
        var navButtons = true;
        var paginationSelector = '.pagination';

        if (options !== undefined && options["navButtons"] !== undefined)
            navButtons = options["navButtons"];

        if (options !== undefined && options["pageSize"] !== undefined)
            pageSize = options["pageSize"];

        if (options !== undefined && options["paginationSelector"] !== undefined)
            paginationSelector = options["paginationSelector"];

        var items = this.children('tbody').children('tr').length; //Get the number of row in the table
        pagesToGenerate = Math.ceil(items / pageSize) //Get the number of page to generate

        if (pagesToGenerate > 1) {

            nav = $('<ul/>').appendTo($(paginationSelector));

            if (navButtons) {
                $('<li/>').append($('<a/>', {
                    'text': 'Prev',
                    'href': '#'
                }).click(function () {
                    if (currentPage > 1) {
                        selectPage(--currentPage);
                    }
                })).appendTo(nav);
            }

            for (var i = 1; i <= pagesToGenerate; i++) {
                $('<li/>').append($('<a/>', {
                    'text': i,
                    'href': '#'
                }).click(function () {
                    var page = $(this).html();
                    if ($.isNumeric(page)) {
                        selectPage(page);
                    }
                })).appendTo(nav);
            }

            if (navButtons) {
                $('<li/>').append($('<a/>', {
                    'text': 'Next',
                    'href': '#'
                }).click(function () {
                    if (currentPage < pagesToGenerate) {
                        selectPage(++currentPage);
                    }
                })).appendTo(nav);
            }

            selectPage(1);
        }

        function selectPage(page) {
            currentPage = page;

            $(target.children('tbody').children('tr')).hide();
            var minItem = page * pageSize - pageSize;
            var maxItem = page * pageSize;
            $(target.children('tbody').children('tr').slice(minItem, maxItem)).show();
            $(paginationSelector + ' ul li a').each(function () {
                if ($(this).html() == page)
                    $(this).parent().addClass("active");
                else
                    $(this).parent().removeClass("active");
            });
            if (navButtons) {
                if (currentPage == 1)
                    $(paginationSelector + ' ul li:first-child').addClass("active");
                else if (currentPage == pagesToGenerate)
                    $(paginationSelector + ' ul li:last-child').addClass("active");
                else {
                    $(paginationSelector + ' ul li:first-child').removeClass("active");
                    $(paginationSelector + ' ul li:last-child').removeClass("active");
                }
            }
        }

        return this;
    };
}(jQuery));