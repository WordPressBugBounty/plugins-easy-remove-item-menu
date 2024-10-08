!(function (e) {
    ({
        init: function () {
            (this.wp_menu_item = "#menu-to-edit .menu-item"),
                (this.wp_delete_btn = ".item-delete"),
                (this.hp_delete_btn = "hp-menu-delete"),
                (this.delete_this_text = "x"),
                (this.delete_this_desc = "Delete this menu item"),
                (this.delete_all_text = "xx"),
                (this.delete_all_desc = "Delete this & all sub menu items"),
                this.customRemove();
        },
        customRemove: function () {
            var t = this;
            e(t.wp_menu_item).each(function () {
                var i = e(this),
                    n = i.find(".item-controls").find(".item-type");
                e("<a/>", {
                    class: t.hp_delete_btn,
                    text: t.delete_this_text,
                    title: t.delete_this_desc,
                    click: function () {
                        return i.find(".menu-item-settings").find(t.wp_delete_btn).trigger("click"), !1;
                    },
                }).insertBefore(n),
                    e("<a/>", {
                        class: t.hp_delete_btn,
                        text: t.delete_all_text,
                        title: t.delete_all_desc,
                        click: function () {
                            var e = t.menuLevel(i);
                            return i.nextUntil(".menu-item-depth-" + e).remove(), i.remove(), !1;
                        },
                    }).insertBefore(n);
            });
        },
        menuLevel: function (e) {
            var t = e.attr("class").match(/menu-item-depth-[0-9]+/)[0];
            return (t = parseInt(t.replace("menu-item-depth-", "")));
        },
    }.init());
})(jQuery);
