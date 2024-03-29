(function(a) {
    "use strict";
    a.fn.skeletonSlideShow = function(b) {
        function f() {
            d.each(function() {
                function v(a, b) {
                    if (a == "forward") {
                        if (g == l) {
                            d = 0
                        } else {
                            d = g * u * -1
                        }
                    } else if (a == "backward") {
                        if (g == 1) {
                            d = u * (l - 1) * -1
                        } else {
                            d = (g - 2) * u * -1
                        }
                    } else if (a == "exact") {
                        d = b * u * -1
                    }
                    return d
                }

                function w() {
                    if (c.advanceEnd) {
                        c.advanceEnd(g)
                    }
                    a(" a", a(c.paginationContainer)).removeClass("nav_current_slide");
                    a(" ul :nth-child(" + g + ") a", a(c.paginationContainer)).addClass("nav_current_slide");
                    a(" > *", o.parent()).removeClass("current_slide");
                    a(" > :nth-child(" + g + ")", o.parent()).addClass("current_slide")
                }

                function x(b) {
                    if (b < s * -1) {
                        b = s * -1
                    }
                    if (b > 0) {
                        b = 0
                    }
                    if (c.advanceStart) {
                        c.advanceStart(g)
                    }
                    a(" .skeleton_wrapper", a(f)).stop().animate({
                        left: b
                    }, c.transitionSpeed, c.easingMethod, function() {
                        r = 0;
                        g = m.indexOf(parseFloat(a(" .skeleton_wrapper", a(f)).css("left")));
                        if (a(c.paginationContainer).length) {
                            w()
                        }
                    })
                }

                function y(a) {
                    if (a == "forward") {
                        b = v("forward");
                        x(b, "forward")
                    } else if (a == "backward") {
                        b = v("backward");
                        x(b, "backward")
                    }
                }
                var b = 0,
                    d = 0,
                    f = this,
                    g = 1,
                    h = "",
                    i = null,
                    j = "",
                    k = 0,
                    l = 0,
                    m = ["0"],
                    n = {},
                    o = "",
                    p = "",
                    q = "",
                    r = 0,
                    s = 0,
                    t, u = null;
                if (c.height == null) {
                    i = a(f).height()
                } else {
                    i = c.height
                }
                if (c.width == null) {
                    u = a(f).width()
                } else {
                    u = c.width
                }
                if (a(f).is("ul")) {
                    a(" > *", f).wrapAll('<li class="skeleton_wrapper"><ul></ul></li>');
                    o = a(".skeleton_wrapper li", f)
                } else {
                    a(" > *", f).wrapAll('<div class="skeleton_wrapper"></div>');
                    o = a(".skeleton_wrapper > *", f)
                }
                l = o.length;
                s = l * u;
                if (a(f).css("position") == "absolute") {
                    t = "absolute"
                } else {
                    t = "relative"
                }
                a(f).css({
                    height: i,
                    overflow: "hidden",
                    position: t,
                    width: u
                });
                j = a(" .skeleton_wrapper", f);
                j.css({
                    height: i,
                    left: 0,
                    overflow: "visible",
                    position: "absolute",
                    top: 0,
                    width: u
                });
                o.each(function(b, c) {
                    a(c).css({
                        height: i,
                        left: u * b,
                        position: "absolute",
                        top: 0,
                        width: u
                    });
                    m.push(u * b * -1)
                });
                e.push(setInterval(function() {
                    if (r == c.visibleFor) {
                        b = v("forward");
                        x(b)
                    }
                    r += 100
                }, 100));
                if (a(c.navigationContainer).length) {
                    p = '<a href="#" class="previous_page">Previous</a> <a href="#" class="next_page">Next</a>';
                    a(c.navigationContainer).append(p);
                    a(" .previous_page", c.navigationContainer).click(function(a) {
                        a.preventDefault();
                        y("backward")
                    });
                    a(" .next_page", c.navigationContainer).click(function(a) {
                        a.preventDefault();
                        y("forward")
                    })
                }
                if (a(c.paginationContainer).length) {
                    q = "<ul>";
                    for (k = 0; k < l; k += 1) {
                        h = "";
                        if (c.markupNavigation || k == 0) {
                            if (c.markupNavigation && k == 0) {
                                h = h + ' class="goto_slide_' + (k + 1) + ' nav_current_slide"'
                            } else if (c.markupNavigation && k != 0) {
                                h = h + ' class="goto_slide_' + (k + 1) + '"'
                            } else {
                                h = h + ' class="nav_current_slide"'
                            }
                        }
                        q = q + '<li><a href="#pagination"' + h + ">" + (k + 1) + "</a></li>"
                    }
                    q = q + "</ul>";
                    a(c.paginationContainer).append(q);
                    a(" li a", c.paginationContainer).click(function(b) {
                        b.preventDefault();
                        x(v("exact", a(this).parent().index()))
                    })
                }
                if (c.pluginLoaded) {
                    n.wrapper = j;
                    n.totalSlides = l;
                    n.totalWidth = s;
                    n.slidesObject = o;
                    c.pluginLoaded(n)
                }
            })
        }
        var c = a.extend({
                advanceStart: function() {},
                advanceEnd: function() {},
                animation: "slide",
                easingMethod: "swing",
                height: null,
                markupNavigation: false,
                navigationContainer: false,
                paginationContainer: false,
                pluginLoaded: function() {},
                transitionSpeed: 500,
                visibleFor: 5e3,
                width: null
            }, b),
            d = this,
            e = [];
        f()
    }
})(jQuery)
