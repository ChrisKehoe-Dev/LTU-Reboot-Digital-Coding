var $mealTotal = 35.45
var $taxPerct = 10
var $taxCalc = (100 + $taxPerct) / 100
var $mealNet = $mealTotal / $taxCalc
$mealNet = $mealNet.toFixed(2) 
var $taxAmount = $mealTotal - $mealNet
$taxAmount = $taxAmount.toFixed(2) 

//alert($mealNet)

document.write("<p>Food and drink total £" + $mealNet + "</p>")
document.write("<p>Tax @ " + $taxPerct + "% £" + $taxAmount + "</p>")
document.write("<p><strong>Total including Tax £" + $mealTotal + "<strong></p>")

