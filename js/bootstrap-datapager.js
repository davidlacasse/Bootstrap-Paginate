$(document).ready(function () {
            var target;
            var pageSize;
            var currentPage;
            var pagesToGenerate;
            var navButtons;

            function selectPage(page) {
                currentPage = page;

                $(target.children('tbody').children('tr')).hide();
                var minItem = page * pageSize - pageSize;
                var maxItem = page * pageSize;
                $(target.children('tbody').children('tr').slice(minItem, maxItem)).show();
                $('.pagination ul li a').each(function () {
                    if ($(this).html() == page)
                        $(this).parent().addClass("active");
                    else
                        $(this).parent().removeClass("active");
                });
                if (navButtons) {
                    if (currentPage == 1)
                        $('.pagination ul li:first-child').addClass("active");
                    else if (currentPage == pagesToGenerate)
                        $('.pagination ul li:last-child').addClass("active");
                    else {
                        $('.pagination ul li:first-child').removeClass("active");
                        $('.pagination ul li:last-child').removeClass("active");
                    }
                }
            }

            $.fn.extend({
                paginate: function (options) {
                    if (options === undefined || options["navButtons"] === undefined)
                        navButtons = true;
                    else
                        navButtons = options["navButtons"];

                    target = this;

                    if (options === undefined || options["pageSize"] === undefined)
                        pageSize = 10;
                    else
                        pageSize = options["pageSize"];

                    var items = this.children('tbody').children('tr').length; //Get the number of row in the table
                    pagesToGenerate = Math.ceil(items / pageSize) //Get the number of page to generate
                    
                    if (pagesToGenerate > 1) {
                        var navigation = "<ul>"
                        if (navButtons)
                            navigation += "<li><a href=\"#\">Prev</a></li>";
                        for (var i = 1; i <= pagesToGenerate; i++) {
                            navigation += "<li><a href=\"#\">" + i + "</a></li>";
                        }
                        if (navButtons)
                            navigation += "<li><a href=\"#\">Next</a></li>";
                        navigation += "</ul>";
                        $('.pagination').append(navigation);
                        selectPage(1);
                    }
                }
            });

            $(document).on('click', '.pagination ul li a', function () {
                var page = $(this).html();
                if ($.isNumeric(page))
                    selectPage(page);
                else if (page == "Prev" && currentPage > 1)
                    selectPage(--currentPage);
                else if (page == "Next" && currentPage < pagesToGenerate)
                    selectPage(++currentPage);
            });
	});