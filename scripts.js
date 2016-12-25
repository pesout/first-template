/*
************************
Created by Stepan Pesout
*****www.pesout.eu******
*****@stepanpesout******
************************
*/

var i = document.documentElement.clientWidth;

var b;
var c;
var a = i / 4;
var z = 0;

var f;
var g;
var e = i / 4;
var h;
var j = i / 4;

var k;
var l;
var m = i / 4;
var n;
var o = i / 2;

var p;
var q;
var r = i / 4;
var s = 0;
  
if (!document.getElementById && document.all) document.getElementById = document.all;
function prvnizmena()
{  
	if (z != 0) { 
	clearInterval(c);
					}  
	z = z + 1;
	
  document.getElementById('prvnipole').style.zIndex = '12';  
  b = setInterval(function(){prvnipohyb()},5);	 
}

function prvnizpet()
{
  clearInterval(b);  
  document.getElementById('prvnipole').style.zIndex = '10';
  c = setInterval(function(){prvnipohybzpatky()},5); 
}

function prvnipohyb() {  
if (Math.round(a) != Math.round((i / 4) + (i / 30))) {
	 a = a + 0.5; 
	 document.getElementById('prvnipole').style.width = a; 
		}
}

function prvnipohybzpatky() {  
if (Math.round(a) != Math.round(i / 4)) {
	 a = a - 0.5; 
	 document.getElementById('prvnipole').style.width = a; 
		}
else {
    document.getElementById('prvnipole').style.zIndex = '8';
    clearInterval(c);
		}
}

/*-------------------------------------------------------------------------------------------------*/

function druhezmena()
{  
	if (h != 0) { 
	clearInterval(g);
					}  
	h = h + 1;
	
  document.getElementById('druhepole').style.zIndex = '12';  
  f = setInterval(function(){druhepohyb()},5);	 
}

function druhezpet()
{
  clearInterval(f); 
  document.getElementById('druhepole').style.zIndex = '10'; 
  g = setInterval(function(){druhepohybzpatky()},5); 
}

function druhepohyb() {  
if (Math.round(e) != Math.round((i / 4) + (i / 30) + (i / 30))) {
	 e = e + 1; 
	 j = j - 0.5;
	 document.getElementById('druhepole').style.width = e; 
	 document.getElementById('druhepole').style.left = j; 
		}
		
}

function druhepohybzpatky() {  
if (Math.round(e) != Math.round(i / 4)) {
	 e = e - 1; 
	 j = j + 0.5;
	 document.getElementById('druhepole').style.width = e; 
	document.getElementById('druhepole').style.left = j;
		}
else {
    document.getElementById('druhepole').style.zIndex = '8';
    clearInterval(g);
		}
}

/*--------------------------------------------------------------------------------------------------*/

function tretizmena()
{  
	if (n != 0) { 
	clearInterval(l);
					}  
	n = n + 1;
	
  document.getElementById('tretipole').style.zIndex = '12';  
  k = setInterval(function(){tretipohyb()},5);	 
}

function tretizpet()
{
  clearInterval(k); 
  document.getElementById('tretipole').style.zIndex = '10'; 
  l = setInterval(function(){tretipohybzpatky()},5); 
}

function tretipohyb() {  
if (Math.round(m) != Math.round((i / 4) + (i / 30) + (i / 30))) {
	 m = m + 1; 
	 o = o - 0.5;
	 document.getElementById('tretipole').style.width = m; 
	 document.getElementById('tretipole').style.left = o; 
		}
		
}

function tretipohybzpatky() {  
if (Math.round(m) != Math.round(i / 4)) {
	 m = m - 1; 
	 o = o + 0.5;
	 document.getElementById('tretipole').style.width = m; 
	document.getElementById('tretipole').style.left = o;
		}
else {
    document.getElementById('tretipole').style.zIndex = '8';
    clearInterval(l);
		}
}

/*-------------------------------------------------------------------------------------------------*/
function ctvrtezmena()
{  
	if (s != 0) { 
	clearInterval(q);
					}  
	s = s + 1;
	
  document.getElementById('ctvrtepole').style.zIndex = '12';  
  p = setInterval(function(){ctvrtepohyb()},5);	 
}

function ctvrtezpet()
{
  clearInterval(p);  
  document.getElementById('ctvrtepole').style.zIndex = '10';
  q = setInterval(function(){ctvrtepohybzpatky()},5); 
}

function ctvrtepohyb() {  
if (Math.round(r) != Math.round((i / 4) + (i / 30))) {
	 r = r + 0.5; 
	 document.getElementById('ctvrtepole').style.width = r; 
		}
}

function ctvrtepohybzpatky() {  
if (Math.round(r) != Math.round(i / 4)) {
	 r = r - 0.5; 
	 document.getElementById('ctvrtepole').style.width = r; 
		}
else {
    document.getElementById('ctvrtepole').style.zIndex = '8';
    clearInterval(q);
		}
}

/*-------------------------------------------------------------------------------------------------*/

function ctzmena()
{  
document.getElementById('ctverecek').style.width = '100%';	 
}

function ctzpet()
{
document.getElementById('ctverecek').style.width = '45';	  
}

/*-------------------------------------------------------------------------------------------------*/

function nacti() {
document.getElementById('druhepole').style.width = document.documentElement.clientWidth / 4 + 8;
setTimeout("zobraz();", 500);
}

function zobraz() {
document.getElementById('hlavnistrana').style.zIndex = 6;	
document.getElementById('logo_pruh').style.zIndex = 6;
}
