/*
========================================================================

js5 - Lightweight Javascript wrapper to manipulate DOM elements and
XHR requests.

========================================================================

  This file is part of js5.js.

  ScoutCensus is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  ScoutCensus is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with ScoutCensus. If not, see <https://www.gnu.org/licenses/>.

------------------------------------------------------------------------

  Copyright James Smith - 2020, 2021
  Developer - James Smith (james@curtissmith.me.uk)

========================================================================
*/

(function(d){
'use strict';
window._={
  // Find elements (first param optional - use document as el if none give.
  qs:    function(el,s) {   if('string'===typeof el) { s=el; el=d; }      return s==='' ? el : el.querySelector(s);        },
  qm:    function(el,s) {   if('string'===typeof el) { s=el; el=d; }      return Array.from(document.querySelectorAll(s)); },
  // Apply function to set of elements
  m:     function(el,s,f) { if('string'===typeof el) { f=s; s=el; el=d; } this.qm(el,s).forEach(f);                        },
  s:     function(el,s,f) { if('string'===typeof el) { f=s; s=el; el=d; } var z=this.qs(el,s); if(z) f(z);                 },
  // Active/inactive class
  dis:   function(el) {     el.classList.remove('active');          },
  act:   function(el) {     el.classList.add('active');             },
  isact: function(el) {     return el.classList.contains('active'); },
  // Turn on and off elements.
  st:    function(el,di) {  this.qs(el).style.display=di;           },
  block: function(el) {     this.st(el,'block');                    },
  inline:function(el) {     this.st(el,'inline');                   },
  flex:  function(el) {     this.st(el,'flex');                     },
  hide:  function(el) {     this.st(el,'none');                     },
  // AJAX/XHR
  get:   function(url,callback){
    var h=new XMLHttpRequest(); h.overrideMimeType('application/json'); h.open('GET',url); h.onreadystatechange=function(){
      if(h.readyState==4&&h.status=='200'){callback(h.responseText);} }; h.send(null);                                     }
};}(document));
