import Product from '../models/product';

class ProductsController {
	
	constructor(Product) {
		this.Product = Product;
	}

	get(req, res) {
		return this.Product.find({})
			.then(products => res.send(products))
			.catch(err => res.status(400).send(err.message));
	}

	post(req, res) {
		let prod = {
			'name'        : req.body.name,
			'description' : req.body.description,
			'price'       : req.body.price
		};

		const Product1 = new Product(prod);
		
		return Product1.save((err, savedObject) => {
			res.send(savedObject);
		});	
	}
}
export default ProductsController;