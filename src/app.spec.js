class Product {
	constructor() {
		this.myMethod();
	}
	
	myMethod() {
		return 'test';
	}
}

describe('First test', () => {
	
	it('should be able to test', () => {
		var a = {};
		expect(a).toBe(a);
	});
	
	it('should have more tests', () => {
		expect(1).toEqual(1);
	});
	
	describe('class', () => {
		
		beforeEach(function() {
			spyOn(Product.prototype, 'myMethod').and.callThrough();
			this.product = new Product();
		});
		
		it('should test method', function() {
			expect(this.product.myMethod).toHaveBeenCalled();
		});
		
		it('should test method output', function() {			
			expect(this.product.myMethod()).toEqual('test');
		});		
	
	});
	
	describe('functions', () => {
		beforeEach(function() {
			this.foo = {
				hasParams: (param1) => {
					return !!param1;
				}
			};
			spyOn(this.foo, 'hasParams');
			this.foo.hasParams(2);	
		});
		
		it('should check whether function was called', function() {
			expect(this.foo.hasParams).toHaveBeenCalled();
		});
		
		it('should check whether function was called', function() {
			expect(this.foo.hasParams).toHaveBeenCalledWith(2);
		});
		
	});
	
});
