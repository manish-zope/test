describe('my scenario', function(){
	
	it('first test', function(){
		
		browser.get('http://www.angularjs.org');
		element(by.model('yourName')).sendKeys('Julie');

		expect(element(by.binding('yourName')).getText()).toEqual('Hello Julie!');
		
		element(by.binding('yourName')).getText().then(function(text){
			
			console.log(text);
			
		});
		
	});
	
});

describe('second scenario',function(){
	
	it('second text', function(){
		
		browser.get('http://www.angularjs.org');
		element(by.model('yourName')).sendKeys('Manish');
		element(by.model('yourName')).sendKeys('Manish');
		element(by.model('yourName')).sendKeys('Manish');
		element(by.model('yourName')).sendKeys('Manish');
		
		element(by.binding('yourName')).getText().then(function(){
			
			console.log('hello Manishhhhhhhhhhhhhhh');
			
		});
		
	} );
	
});