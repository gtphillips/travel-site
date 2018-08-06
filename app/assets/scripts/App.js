import $ from "jquery";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "45%");
new RevealOnScroll($(".testamonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
