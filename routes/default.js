const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render('index', {
        page_nav: "home",
        page_title: "Acceuil"
    });
});
router.get("/about", (req, res) => {
    res.render('biographie', {
        page_nav: "about",
        page_title: "Biographie"
    });
});
router.get("/actualities", (req, res) => {
    res.render('actualities', {
        page_nav: "actualities",
        page_title: "Actualités"
    });
});
router.get("/contact", (req, res) => {
    res.render('contact', {
        page_nav: "contact",
        page_title: "Contact"
    });
});
router.get("/films", (req, res) => {
    res.render('filmographie', {
        page_nav: "films",
        page_title: "Filmographie"
    });
});
router.get("/gallery", (req, res) => {
    res.render('gallery', {
        page_nav: "gallery",
        page_title: "Galerie"
    });
});
router.get("/media", (req, res) => {
    res.render('media', {
        page_nav: "media",
        page_title: ""
    });
});


router.get("/credits", (req, res) => {
    res.render('credits', {
        page_nav: "credits",
        page_title: "Crédits"
    });
});


// router.get("/products", (req, res) => {
//     res.render('products', {
//         products: products
//     });
// });

// router.get("/product/:id", (req, res) => {
//     const { id } = req.params;
//     const itemFound = products.find((item) => item.id === id);
//     res.render('product', {
//         product: itemFound
//     });
// });


module.exports = router;
