//SUBMIT REVIEWS FUNCTIONS

function listReviews(){
	
	var name = document.getElementById("name").value;
	var password = document.getElementById("password").value;
	var checkinD = document.getElementById("checkinD").value;
	var checkoutD = document.getElementById("checkoutD").value;
	var comment = document.getElementById("comment").value;
	
	//verify that the all the information are well inputed
			if (this.name != '' && this.password != '' && this.checkinD != '' && this.checkoutD != '' && this.comment != '' ){
				//debugging help to verify that the IF condition is respected
				console.log("No empty boxes");
				//add the inputed information into the array of reviews
				this.reviews.push({name: this.name, checkinD: this.checkinD, checkoutD: this.checkoutD, comment: this.comment});
			}
			//If there is no blank boxes
			else{
				console.log("Info missing");
				//indicates to the user when one field is empty
				alert("Information missing");
			}
}
