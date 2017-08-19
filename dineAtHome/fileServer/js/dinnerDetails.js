function getThaliDetail() {
	var thali = 
	{
		"detail"	: "One order of thali includes 4 Roti, Potato Shak, Dal (toor), Bhat enough for one person",
		"cost"		: "7.99",
		"costType"	: "per person"
	}
	return thali;
}

function getCustomizedDinnerDetail() {
	var items = [
		{
			"item"		: "Roti",
			"image"		: "http://www.supremequalityfoods.com.au/images/products/product-chapati-wholemeal.jpg",
			"message"	: "Made from stoneground wholemeal flour, traditionally known as atta with thin layer of ghee on top",
			"cost"		: "1.00",
			"costType"	: "per pack (3 roties)",
			"orderPreText"	: "Order",
			"orderPostText"	: "packs",
			
			"thisPage"	: "i1",
			"lastPage"	: "dinnerThaliOrCustomize",
			"nextPage"	: "i2"
			
		},
		
		{
			"item"		: "Potato Shak",
			"image"		: "http://cdn3.foodviva.com/static-content/food-images/curry-recipes/batata-nu-shaak-gujarati-style-potato-subzi/batata-nu-shaak-gujarati-style-potato-subzi.jpg",
			"message"	: "Cut potato cooked in spices",
			"cost"		: "2.50",
			"costType"	: "per person",
			"orderPreText"	: "Order for",
			"orderPostText"	: "person",
			
			"thisPage"	: "i2",
			"lastPage"	: "i1",
			"nextPage"	: "i3"
		},
		
		{
			"item"		: "Dal",
			"image"		: "http://cdn3.foodviva.com/static-content/food-images/curry-recipes/batata-nu-shaak-gujarati-style-potato-subzi/batata-nu-shaak-gujarati-style-potato-subzi.jpg",
			"message"	: "Cut potato cooked in spices",
			"cost"		: "2.50",
			"costType"	: "per person",
			"orderPreText"	: "Order for",
			"orderPostText"	: "person",
			
			"thisPage"	: "i3",
			"lastPage"	: "i2",
			"nextPage"	: "i4"
		},
		
		{
			"item"		: "Bhat",
			"image"		: "http://cdn3.foodviva.com/static-content/food-images/curry-recipes/batata-nu-shaak-gujarati-style-potato-subzi/batata-nu-shaak-gujarati-style-potato-subzi.jpg",
			"message"	: "Cut potato cooked in spices",
			"cost"		: "2.50",
			"costType"	: "per person",
			"orderPreText"	: "Order for",
			"orderPostText"	: "person",
			
			"thisPage"	: "i4",
			"lastPage"	: "i3",
			"nextPage"	: "i5"
		},
		
		{
			"item"		: "Papad",
			"image"		: "http://cdn3.foodviva.com/static-content/food-images/curry-recipes/batata-nu-shaak-gujarati-style-potato-subzi/batata-nu-shaak-gujarati-style-potato-subzi.jpg",
			"message"	: "Cut potato cooked in spices",
			"cost"		: "2.50",
			"costType"	: "per person",
			"orderPreText"	: "Order for",
			"orderPostText"	: "person",
			
			"thisPage"	: "i5",
			"lastPage"	: "i4",
			"nextPage"	: "i6"
		},
		
		{
			"item"		: "",
			"image"		: "",
			"message"	: "",
			"cost"		: "",
			"costType"	: "",
			"orderPreText"	: "",
			"orderPostText"	: "",
			
			"thisPage"	: "i6",
			"lastPage"	: "i5",
			"nextPage"	: "i7"
		},
		
		{
			"item"		: "",
			"image"		: "",
			"message"	: "",
			"cost"		: "",
			"costType"	: "",
			"orderPreText"	: "",
			"orderPostText"	: "",
			
			"thisPage"	: "i7",
			"lastPage"	: "i6",
			"nextPage"	: "i8"
		},
		
		{
			"item"		: "",
			"image"		: "",
			"message"	: "",
			"cost"		: "",
			"costType"	: "",
			"orderPreText"	: "",
			"orderPostText"	: "",
			
			"thisPage"	: "i8",
			"lastPage"	: "i7",
			"nextPage"	: "dinnerThaliOrCustomize"
		}
	];
	return items;
	
}
